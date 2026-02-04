const { Client } = require('pg');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Parse DATABASE_URL to get DB name and root connection
const dbName = process.env.DATABASE_URL.split('/').pop();
const connectionStringRoot = process.env.DATABASE_URL.replace(`/${dbName}`, '/postgres');

const initDb = async () => {
    const client = new Client({ connectionString: connectionStringRoot });
    try {
        await client.connect();

        // Check if database exists
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`);
        if (res.rowCount === 0) {
            console.log(`Database ${dbName} does not exist. Creating...`);
            await client.query(`CREATE DATABASE "${dbName}"`);
            console.log(`Database ${dbName} created.`);
        } else {
            console.log(`Database ${dbName} already exists.`);
        }
    } catch (err) {
        console.error('Error creating database:', err);
    } finally {
        await client.end();
    }

    // Now connect to the actual database and run schema
    const pool = new Client({ connectionString: process.env.DATABASE_URL });
    try {
        await pool.connect();
        const schemaPath = path.join(__dirname, '../src/database/schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');

        console.log('Running schema migration for Learning Service...');
        await pool.query(schemaSql);
        console.log('Schema migration completed successfully.');
    } catch (err) {
        console.error('Error running schema migration:', err);
    } finally {
        await pool.end();
    }
};

initDb();
