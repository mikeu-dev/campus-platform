const { Client } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const seed = async () => {
    const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost:5435/campus_identity_db';
    const client = new Client({ connectionString: dbUrl });

    try {
        await client.connect();
        console.log('Connected to database for essential production seeding...');

        // 1. Create Tenant
        // Check if tenant exists
        const tenantSlug = 'main-university';
        let tenantId;

        const tenantRes = await client.query('SELECT id FROM tenants WHERE slug = $1', [tenantSlug]);

        if (tenantRes.rows.length > 0) {
            console.log(`Tenant '${tenantSlug}' already exists.`);
            tenantId = tenantRes.rows[0].id;
        } else {
            console.log(`Creating tenant '${tenantSlug}'...`);
            const newTenant = await client.query(
                'INSERT INTO tenants (name, slug, domain, status) VALUES ($1, $2, $3, $4) RETURNING id',
                ['Kampus Utama', tenantSlug, 'kampus.ac.id', 'active']
            );
            tenantId = newTenant.rows[0].id;
            console.log(`Tenant created with ID: ${tenantId}`);
        }

        // 2. Create Required Roles
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

        // 3. Create Super Admin User
        let adminId;
        const adminEmail = 'admin@kampus.ac.id';
        const userRes = await client.query('SELECT id FROM users WHERE email = $1', [adminEmail]);

        if (userRes.rows.length > 0) {
            console.log(`Super Admin '${adminEmail}' already exists.`);
            adminId = userRes.rows[0].id;
        } else {
            console.log(`Creating super admin '${adminEmail}'...`);
            const hashedPassword = await bcrypt.hash('password123', 10);
            const newUser = await client.query(
                'INSERT INTO users (tenant_id, email, password_hash, full_name, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
                [tenantId, adminEmail, hashedPassword, 'Super Administrator', 'active']
            );
            adminId = newUser.rows[0].id;
            console.log(`Super Admin '${adminEmail}' created with ID: ${adminId}`);

            // Assign Admin Role
            console.log(`Assigning 'admin' role to super admin...`);
            await client.query(
                'INSERT INTO user_roles (user_id, role_id) VALUES ($1, $2)',
                [adminId, roleIds['admin']]
            );
        }

        console.log('Essential Identity seeding completed successfully!');

    } catch (err) {
        console.error('Error during identity production seeding:', err);
    } finally {
        await client.end();
    }
};

seed();
