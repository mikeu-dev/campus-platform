const { Client } = require('pg');
require('dotenv').config();

const seed = async () => {
    // Connection strings
    const academicDbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgrespassword@localhost:5435/campus_academic_db';

    if (!academicDbUrl) {
        console.error('DATABASE_URL is not set for production academic seed.');
        return;
    }

    const academicClient = new Client({ connectionString: academicDbUrl });

    try {
        await academicClient.connect();
        console.log('Connected to database to prepare academic schemas...');

        // --- SELF-REP: Ensure Schema matches ---
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

        // In production, we do NOT seed fake students or lecturers. 
        // Real data will be synced or created via the API/Admin Dashboard.
        console.log('Essential Academic seeding completed (No dummy data inserted).');

    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await academicClient.end();
    }
};

seed();
