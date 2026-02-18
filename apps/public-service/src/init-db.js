const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function initDB() {
    const postgresConn = 'postgres://postgres:postgrespassword@localhost:5435/postgres';
    const dbName = 'campus_public_db';

    let client = new Client({ connectionString: postgresConn });

    try {
        await client.connect();

        // Create database if not exists
        const res = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`);
        if (res.rowCount === 0) {
            console.log(`Creating database ${dbName}...`);
            await client.query(`CREATE DATABASE ${dbName}`);
        } else {
            console.log(`Database ${dbName} already exists.`);
        }
        await client.end();

        // Connect to the new database to run schema and seed
        const publicConn = `postgres://postgres:postgrespassword@localhost:5435/${dbName}`;
        client = new Client({ connectionString: publicConn });
        await client.connect();

        console.log('Applying schema.sql...');
        const schemaSql = fs.readFileSync(path.join(__dirname, 'database/schema.sql'), 'utf8');
        await client.query(schemaSql);

        console.log('Applying seed.sql...');
        const seedSql = fs.readFileSync(path.join(__dirname, 'database/seed.sql'), 'utf8');
        await client.query(seedSql);

        console.log('Database initialization completed successfully!');

    } catch (err) {
        console.error('Database initialization failed:', err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

initDB();
