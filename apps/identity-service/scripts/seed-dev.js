const { Client } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const seedDev = async () => {
    const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
    const schemaMatch = connectionString.match(/[?&]schema=([^&]+)/);
    let queryOptions = '';
    if (schemaMatch && schemaMatch[1]) {
        queryOptions = `-c search_path="${schemaMatch[1]}",public`;
    }
    const client = new Client({ connectionString, options: queryOptions });

    try {
        await client.connect();
        if (schemaMatch && schemaMatch[1]) {
            await client.query(`SET search_path TO "${schemaMatch[1]}", public`);
        }
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
        const roles = ['admin', 'student', 'lecturer'];
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

        // 3. Create Users & Assign Roles
        const usersToSeed = [
            { email: 'admin@example.com', name: 'Admin User', role: 'admin' },
            { email: 'student@example.com', name: 'Student User', role: 'student' },
            { email: 'lecturer@example.com', name: 'Lecturer User', role: 'lecturer' }
        ];

        for (const userData of usersToSeed) {
            let userId;
            const userRes = await client.query('SELECT id FROM users WHERE email = $1', [userData.email]);

            if (userRes.rows.length > 0) {
                console.log(`User '${userData.email}' already exists.`);
                userId = userRes.rows[0].id;
            } else {
                console.log(`Creating user '${userData.email}'...`);
                const hashedPassword = await bcrypt.hash('password123', 10);
                const newUser = await client.query(
                    'INSERT INTO users (tenant_id, email, password_hash, full_name, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
                    [tenantId, userData.email, hashedPassword, userData.name, 'active']
                );
                userId = newUser.rows[0].id;
                console.log(`User '${userData.email}' created with ID: ${userId}`);
            }

            // Assign Role
            const roleId = roleIds[userData.role];
            const userRoleRes = await client.query(
                'SELECT id FROM user_roles WHERE user_id = $1 AND role_id = $2',
                [userId, roleId]
            );

            if (userRoleRes.rows.length > 0) {
                console.log(`User '${userData.email}' already has '${userData.role}' role.`);
            } else {
                console.log(`Assigning '${userData.role}' role to user '${userData.email}'...`);
                await client.query(
                    'INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)',
                    [userId, roleId]
                );
            }
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
