const { Client } = require('pg');
require('dotenv').config();

const seedDev = async () => {
    // Connection strings
    const identityDbUrl = process.env.IDENTITY_DIRECT_URL || process.env.IDENTITY_DB_URL || 'postgres://postgres:postgrespassword@localhost:5435/campus_identity_db?schema=identity';
    const academicDbUrl = process.env.DIRECT_URL || process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost:5435/campus_academic_db?schema=academic';

    const identitySchemaMatch = identityDbUrl.match(/[?&]schema=([^&]+)/);
    let identityOptions = '';
    if (identitySchemaMatch && identitySchemaMatch[1]) {
        identityOptions = `-c search_path="${identitySchemaMatch[1]}",public`;
    }
    const identityClient = new Client({ connectionString: identityDbUrl, options: identityOptions });

    const academicSchemaMatch = academicDbUrl.match(/[?&]schema=([^&]+)/);
    let academicOptions = '';
    if (academicSchemaMatch && academicSchemaMatch[1]) {
        academicOptions = `-c search_path="${academicSchemaMatch[1]}",public`;
    }
    const academicClient = new Client({ connectionString: academicDbUrl, options: academicOptions });

    try {
        await identityClient.connect();
        if (identitySchemaMatch && identitySchemaMatch[1]) {
            await identityClient.query(`SET search_path TO "${identitySchemaMatch[1]}", public`);
        }

        await academicClient.connect();
        if (academicSchemaMatch && academicSchemaMatch[1]) {
            await academicClient.query(`SET search_path TO "${academicSchemaMatch[1]}", public`);
        }

        console.log('Connected to databases...');

        // 1. Fetch Tenant & Users from Identity Service
        const tenantRes = await identityClient.query("SELECT id FROM tenants WHERE slug = 'dev-tenant'");
        if (tenantRes.rows.length === 0) {
            console.error('Tenant not found in Identity Service. Please run identity seeder first.');
            return;
        }
        const tenantId = tenantRes.rows[0].id;

        const studentUserRes = await identityClient.query("SELECT id FROM users WHERE email = 'student@example.com'");
        const lecturerUserRes = await identityClient.query("SELECT id FROM users WHERE email = 'lecturer@example.com'");

        if (studentUserRes.rows.length === 0 || lecturerUserRes.rows.length === 0) {
            console.error('Users not found in Identity Service. Please run identity seeder first.');
            return;
        }

        const studentUserId = studentUserRes.rows[0].id;
        const lecturerUserId = lecturerUserRes.rows[0].id;

        console.log(`Found Student User ID: ${studentUserId}`);
        console.log(`Found Lecturer User ID: ${lecturerUserId}`);

        // --- SELF-REP: Ensure Schema matches (Dev only) ---
        console.log('Ensuring schema columns exist...');
        await academicClient.query(`
            ALTER TABLE students ADD COLUMN IF NOT EXISTS study_program VARCHAR(100);
            ALTER TABLE students ADD COLUMN IF NOT EXISTS entry_year INT;
            ALTER TABLE students ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'active';
            ALTER TABLE students ADD COLUMN IF NOT EXISTS platform_student_number VARCHAR(50);
            ALTER TABLE lecturers ADD COLUMN IF NOT EXISTS platform_lecturer_number VARCHAR(50);
        `);
        console.log('Schema confirmed.');
        // --------------------------------------------------

        // 2. Seed Students Table
        const studentRes = await academicClient.query('SELECT id FROM students WHERE user_id = $1', [studentUserId]);
        if (studentRes.rows.length > 0) {
            console.log('Student record already exists.');
        } else {
            console.log('Creating student record...');
            await academicClient.query(`
                INSERT INTO students (tenant_id, user_id, name, study_program, entry_year, status, platform_student_number)
                VALUES ($1, $2, 'Student User', 'Teknik Informatika', 2024, 'active', '2024001')
            `, [tenantId, studentUserId]);
            console.log('Student record created.');
        }

        // 3. Seed Lecturers Table
        const lecturerRes = await academicClient.query('SELECT id FROM lecturers WHERE user_id = $1', [lecturerUserId]);
        if (lecturerRes.rows.length > 0) {
            console.log('Lecturer record already exists.');
        } else {
            console.log('Creating lecturer record...');
            await academicClient.query(`
                INSERT INTO lecturers (tenant_id, user_id, name, platform_lecturer_number)
                VALUES ($1, $2, 'Lecturer User', '04123456')
            `, [tenantId, lecturerUserId]);
            console.log('Lecturer record created.');
        }

        console.log('Academic seeding completed successfully!');

    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await identityClient.end();
        await academicClient.end();
    }
};

seedDev();
