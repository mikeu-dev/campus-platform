const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    // Find Tenant by Slug
    async getTenantBySlug(slug) {
        const result = await db.query(
            'SELECT id, name, status FROM tenants WHERE slug = $1',
            [slug]
        );
        return result.rows[0];
    }

    // Register a new user
    async register({ email, password, fullName, tenantSlug, roleName = 'student' }) {
        // 1. Check Tenant
        const tenant = await this.getTenantBySlug(tenantSlug);
        if (!tenant) {
            throw new Error('Tenant not found');
        }

        // 2. Check if user exists (Globally or per tenant? Model says Unique Email)
        const existingUser = await db.query('SELECT id FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            throw new Error('Email already registered');
        }

        // 3. Hash Password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // 4. Create User
        const client = await db.pool.connect();
        try {
            await client.query('BEGIN');

            const userRes = await client.query(
                `INSERT INTO users (tenant_id, email, password_hash, full_name)
         VALUES ($1, $2, $3, $4) RETURNING id, email, full_name, tenant_id`,
                [tenant.id, email, hashedPassword, fullName]
            );
            const user = userRes.rows[0];

            // 5. Assign Role (Get Role ID first)
            const roleRes = await client.query(
                'SELECT id FROM roles WHERE name = $1 AND tenant_id = $2',
                [roleName, tenant.id]
            );

            let roleId;
            if (roleRes.rows.length === 0) {
                // Create role if not exists (Auto-create for simplicity in MVP?) 
                // Or throw error? Better to auto-create 'student'/'lecturer' roles if missing for the tenant.
                const newRole = await client.query(
                    'INSERT INTO roles (tenant_id, name) VALUES ($1, $2) RETURNING id',
                    [tenant.id, roleName]
                );
                roleId = newRole.rows[0].id;
            } else {
                roleId = roleRes.rows[0].id;
            }

            await client.query(
                'INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)',
                [user.id, roleId]
            );

            await client.query('COMMIT');
            return user;
        } catch (err) {
            await client.query('ROLLBACK');
            throw err;
        } finally {
            client.release();
        }
    }

    // Login
    async login({ email, password }) {
        // 1. Find User
        const result = await db.query(
            `SELECT u.id, u.email, u.password_hash, u.full_name, u.tenant_id, t.slug as tenant_slug
       FROM users u
       JOIN tenants t ON u.tenant_id = t.id
       WHERE u.email = $1`,
            [email]
        );

        const user = result.rows[0];
        if (!user) {
            throw new Error('Invalid credentials');
        }

        // 2. Check Password
        const isValid = await bcrypt.compare(password, user.password_hash);
        if (!isValid) {
            throw new Error('Invalid credentials');
        }

        // 3. Get Roles
        const rolesRes = await db.query(
            `SELECT r.name 
       FROM user_roles ur
       JOIN roles r ON ur.role_id = r.id
       WHERE ur.user_id = $1`,
            [user.id]
        );
        const roles = rolesRes.rows.map(r => r.name);

        // 4. Generate Token
        const payload = {
            sub: user.id,
            tenant_id: user.tenant_id, // UUID
            tenant_slug: user.tenant_slug,
            roles: roles,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

        return { token, user: { id: user.id, email: user.email, fullName: user.full_name, roles } };
    }

    // Create Initial Tenant (Helper)
    async createTenant({ name, slug, domain }) {
        try {
            const res = await db.query(
                'INSERT INTO tenants (name, slug, domain) VALUES ($1, $2, $3) RETURNING *',
                [name, slug, domain]
            );
            return res.rows[0];
        } catch (err) {
            if (err.code === '23505') throw new Error('Tenant slug already exists');
            throw err;
        }
    }
    // List Users (Admin)
    async getUsers(tenantId, { page = 1, limit = 10, search = '' }) {
        const offset = (page - 1) * limit;
        const params = [tenantId];
        let whereClause = 'WHERE u.tenant_id = $1';

        if (search) {
            params.push(`%${search}%`);
            whereClause += ` AND (u.email ILIKE $${params.length} OR u.full_name ILIKE $${params.length})`;
        }

        // Count Total
        const countRes = await db.query(
            `SELECT COUNT(u.id) 
             FROM users u 
             ${whereClause}`,
            params
        );
        const total = parseInt(countRes.rows[0].count);

        // Get Data
        params.push(limit);
        params.push(offset);
        const query = `
            SELECT u.id, u.email, u.full_name, r.name as role
            FROM users u
            JOIN user_roles ur ON u.id = ur.user_id
            JOIN roles r ON ur.role_id = r.id
            ${whereClause}
            ORDER BY u.created_at DESC
            LIMIT $${params.length - 1} OFFSET $${params.length}
        `;

        const result = await db.query(query, params);

        return {
            data: result.rows,
            meta: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }

    // Admin Create User (Internal/Admin)
    async adminCreateUser({ email, password, fullName, tenantId, roleName }) {
        // 1. Check if user exists
        const existingUser = await db.query('SELECT id FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            throw new Error('Email already registered');
        }

        // 2. Hash Password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // 3. Create User & Assign Role
        const client = await db.pool.connect();
        try {
            await client.query('BEGIN');

            const userRes = await client.query(
                `INSERT INTO users (tenant_id, email, password_hash, full_name)
                 VALUES ($1, $2, $3, $4) RETURNING id, email, full_name`,
                [tenantId, email, hashedPassword, fullName]
            );
            const user = userRes.rows[0];

            // Assign Role
            const roleRes = await client.query(
                'SELECT id FROM roles WHERE name = $1 AND tenant_id = $2',
                [roleName, tenantId]
            );

            let roleId;
            if (roleRes.rows.length === 0) {
                const newRole = await client.query(
                    'INSERT INTO roles (tenant_id, name) VALUES ($1, $2) RETURNING id',
                    [tenantId, roleName]
                );
                roleId = newRole.rows[0].id;
            } else {
                roleId = roleRes.rows[0].id;
            }

            await client.query(
                'INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)',
                [user.id, roleId]
            );

            await client.query('COMMIT');
            return { ...user, role: roleName };
        } catch (err) {
            await client.query('ROLLBACK');
            throw err;
        } finally {
            client.release();
        }
    }
}

module.exports = new AuthService();
