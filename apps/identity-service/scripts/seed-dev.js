const { Client } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const seedDev = async () => {
    const client = new Client({ connectionString: process.env.DATABASE_URL });

    try {
        await client.connect();
        console.log('Connected to database for seeding...');

        // 1. Create Tenant
        // Check if tenant exists
        const tenantSlug = 'dev-tenant';
        let tenantId;

        const tenantRes = await client.query('SELECT id FROM tenants WHERE slug = $1', [tenantSlug]);

        if (tenantRes.rows.length > 0) {
            console.log(`Tenant '${tenantSlug}' already exists.`);
            tenantId = tenantRes.rows[0].id;
        } else {
            console.log(`Creating tenant '${tenantSlug}'...`);
            const newTenant = await client.query(
                'INSERT INTO tenants (name, slug, domain, status) VALUES ($1, $2, $3, $4) RETURNING id',
                ['Development Tenant', tenantSlug, 'dev.local', 'active']
            );
            tenantId = newTenant.rows[0].id;
            console.log(`Tenant created with ID: ${tenantId}`);
        }

        // 2. Create Roles
        const roles = ['admin', 'user'];
        const roleIds = {};

        for (const roleName of roles) {
            let roleId;
            const roleRes = await client.query('SELECT id FROM roles WHERE tenant_id = $1 AND name = $2', [tenantId, roleName]);

            if (roleRes.rows.length > 0) {
                console.log(`Role '${roleName}' already exists.`);
                roleId = roleRes.rows[0].id;
            } else {
                console.log(`Creating role '${roleName}'...`);
                const newRole = await client.query(
                    'INSERT INTO roles (tenant_id, name) VALUES ($1, $2) RETURNING id',
                    [tenantId, roleName]
                );
                roleId = newRole.rows[0].id;
                console.log(`Role '${roleName}' created with ID: ${roleId}`);
            }
            roleIds[roleName] = roleId;
        }

        // 3. Create Dev User
        const userEmail = 'dev@example.com';
        let userId;

        const userRes = await client.query('SELECT id FROM users WHERE email = $1', [userEmail]);

        if (userRes.rows.length > 0) {
            console.log(`User '${userEmail}' already exists.`);
            userId = userRes.rows[0].id;
        } else {
            console.log(`Creating user '${userEmail}'...`);
            const hashedPassword = await bcrypt.hash('password123', 10);

            // Check constraints for user creation? 
            // In schema: tenant_id, email are unique.
            // But user table also has tenant_id.

            const newUser = await client.query(
                'INSERT INTO users (tenant_id, email, password_hash, full_name, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
                [tenantId, userEmail, hashedPassword, 'Developer User', 'active']
            );
            userId = newUser.rows[0].id;
            console.log(`User '${userEmail}' created with ID: ${userId}`);
        }

        // 4. Assign Admin Role to Dev User
        const adminRoleId = roleIds['admin'];
        const userRoleRes = await client.query(
            'SELECT id FROM user_roles WHERE user_id = $1 AND role_id = $2',
            [userId, adminRoleId]
        );

        if (userRoleRes.rows.length > 0) {
            console.log(`User '${userEmail}' already has 'admin' role.`);
        } else {
            console.log(`Assigning 'admin' role to user '${userEmail}'...`);
            await client.query(
                'INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)',
                [userId, adminRoleId]
            );
            console.log(`Role assigned.`);
        }

        console.log('Seeding completed successfully!');

    } catch (err) {
        console.error('Error seeding database:', err);
        process.exit(1);
    } finally {
        await client.end();
    }
};

seedDev();
