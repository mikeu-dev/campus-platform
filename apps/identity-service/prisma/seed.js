require('dotenv').config();
const prisma = require('../src/lib/prisma');
const bcrypt = require('bcryptjs');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';
    const SALT_ROUNDS = 10;

    console.log('Seeding AMIK-YPAT PURWAKARTA Identity Data...');

    // 1. Create/Update Tenant
    const tenant = await prisma.tenants.upsert({
        where: { id: tenantId },
        update: {
            name: 'AMIK-YPAT PURWAKARTA',
            slug: 'amik-ypat',
            domain: 'ypat.ac.id',
            status: 'active'
        },
        create: {
            id: tenantId,
            name: 'AMIK-YPAT PURWAKARTA',
            slug: 'amik-ypat',
            domain: 'ypat.ac.id',
            status: 'active'
        }
    });
    console.log('Tenant Created/Updated:', tenant.name);

    // 2. Create Roles
    const roles = ['admin', 'lecturer', 'student'];
    const roleMap = {};

    for (const roleName of roles) {
        const role = await prisma.roles.upsert({
            where: {
                tenant_id_name: {
                    tenant_id: tenantId,
                    name: roleName
                }
            },
            update: {},
            create: {
                tenant_id: tenantId,
                name: roleName
            }
        });
        roleMap[roleName] = role.id;
        console.log(`Role '${roleName}' Ready.`);
    }

    // 3. Create Users
    const usersToSeed = [
        {
            id: 'a1111111-1111-1111-1111-111111111111',
            email: 'admin@ypat.ac.id',
            fullName: 'Admin Kampus',
            role: 'admin'
        },
        {
            id: 'b2222222-2222-2222-2222-222222222222',
            email: 'dosen@ypat.ac.id',
            fullName: 'Dosen Informatika',
            role: 'lecturer'
        },
        {
            id: 'c3333333-3333-3333-3333-333333333333',
            email: 'mahasiswa@ypat.ac.id',
            fullName: 'Budi Mahasiswa',
            role: 'student'
        }
    ];

    for (const userData of usersToSeed) {
        const hashedPassword = await bcrypt.hash('password123', SALT_ROUNDS);

        const user = await prisma.users.upsert({
            where: { id: userData.id },
            update: {
                email: userData.email,
                full_name: userData.fullName,
                password_hash: hashedPassword
            },
            create: {
                id: userData.id,
                tenant_id: tenantId,
                email: userData.email,
                full_name: userData.fullName,
                password_hash: hashedPassword,
                status: 'active'
            }
        });

        // Assign Role
        await prisma.user_roles.upsert({
            where: {
                user_id_role_id: {
                    user_id: user.id,
                    role_id: roleMap[userData.role]
                }
            },
            update: {},
            create: {
                user_id: user.id,
                role_id: roleMap[userData.role]
            }
        });

        console.log(`User '${userData.email}' (${userData.role}) Ready.`);
    }

    console.log('Identity Seeding Completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
