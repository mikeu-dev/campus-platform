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

    // 3. Create Users — Admin, Lecturers, Students
    const usersToSeed = [
        // Admin
        { id: 'a1111111-1111-1111-1111-111111111111', email: 'admin@ypat.ac.id', fullName: 'Admin Kampus', role: 'admin' },

        // Lecturers (5)
        { id: 'b2222222-2222-2222-2222-222222222222', email: 'dosen@ypat.ac.id', fullName: 'Dr. Ahmad Fauzi, M.Kom.', role: 'lecturer' },
        { id: 'b2222222-2222-2222-2222-222222222233', email: 'siti.nurhaliza@ypat.ac.id', fullName: 'Siti Nurhaliza, S.Kom., M.T.', role: 'lecturer' },
        { id: 'b2222222-2222-2222-2222-222222222244', email: 'bambang.purnomo@ypat.ac.id', fullName: 'Bambang Purnomo, S.T., M.Cs.', role: 'lecturer' },
        { id: 'b2222222-2222-2222-2222-222222222255', email: 'dewi.sartika@ypat.ac.id', fullName: 'Dewi Sartika, S.Si., M.Kom.', role: 'lecturer' },
        { id: 'b2222222-2222-2222-2222-222222222266', email: 'rudi.hartono@ypat.ac.id', fullName: 'Rudi Hartono, S.Kom., M.M.', role: 'lecturer' },

        // Students (11)
        { id: 'c3333333-3333-3333-3333-333333333333', email: 'mahasiswa@ypat.ac.id', fullName: 'Budi Santoso', role: 'student' },
        { id: 'c3333333-3333-3333-3333-333333333344', email: 'agus.pratama@ypat.ac.id', fullName: 'Agus Pratama', role: 'student' },
        { id: 'c3333333-3333-3333-3333-333333333355', email: 'rina.wulandari@ypat.ac.id', fullName: 'Rina Wulandari', role: 'student' },
        { id: 'c3333333-3333-3333-3333-333333333366', email: 'dedi.kurniawan@ypat.ac.id', fullName: 'Dedi Kurniawan', role: 'student' },
        { id: 'c3333333-3333-3333-3333-333333333377', email: 'fitri.handayani@ypat.ac.id', fullName: 'Fitri Handayani', role: 'student' },
        { id: 'c3333333-3333-3333-3333-333333333388', email: 'yusuf.ramadhan@ypat.ac.id', fullName: 'Yusuf Ramadhan', role: 'student' },
        { id: 'c3333333-3333-3333-3333-333333333399', email: 'nina.safitri@ypat.ac.id', fullName: 'Nina Safitri', role: 'student' },
        { id: 'c3333333-3333-3333-3333-3333333333aa', email: 'hendra.wijaya@ypat.ac.id', fullName: 'Hendra Wijaya', role: 'student' },
        { id: 'c3333333-3333-3333-3333-3333333333bb', email: 'mega.putri@ypat.ac.id', fullName: 'Mega Putri Lestari', role: 'student' },
        { id: 'c3333333-3333-3333-3333-3333333333cc', email: 'rizky.maulana@ypat.ac.id', fullName: 'Rizky Maulana', role: 'student' },
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

    console.log(`Identity Seeding Completed. Total: ${usersToSeed.length} users.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
