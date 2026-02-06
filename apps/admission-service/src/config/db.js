const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://mikeudev:mikeudev@localhost:5432/campus_platform',
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool
};
