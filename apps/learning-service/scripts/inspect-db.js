const { Client } = require('pg');
require('dotenv').config();

async function listTables() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    const res = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        ORDER BY table_name;
    `);
    console.log('Tables:', res.rows.map(r => r.table_name).join(', '));

    for (const table of res.rows) {
        const pks = await client.query(`
            SELECT a.attname
            FROM   pg_index i
            JOIN   pg_attribute a ON a.attrelid = i.indrelid
                                 AND a.attnum = ANY(i.indkey)
            WHERE  i.indrelid = '${table.table_name}'::regclass
            AND    i.indisprimary;
        `);
        console.log(`- ${table.table_name}: ${pks.rows.length > 0 ? 'PK found' : 'NO PK'}`);
    }

    await client.end();
}

listTables().catch(console.error);
