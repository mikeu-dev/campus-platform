const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('../generated/client');

// Seeding uses DIRECT_URL to bypass PgBouncer, otherwise use DATABASE_URL (Pooler)
const isSeeding = process.env.IS_SEEDING === 'true';
const connectionString = isSeeding
    ? (process.env.DIRECT_URL || process.env.DATABASE_URL)
    : process.env.DATABASE_URL;

// Parse the target custom schema from the URL
const schemaMatch = connectionString.match(/[?&]schema=([^&]+)/);
const schemaName = schemaMatch ? schemaMatch[1] : 'public';

// Add search_path to the pool just in case of raw queries
const pool = new Pool({
    connectionString,
    options: `-c search_path="${schemaName}",public`
});

// PASS THE SCHEMA TO PRISMA PG ADAPTER! (Crucial for Prisma v7)
const adapter = new PrismaPg(pool, { schema: schemaName });

let prisma;
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient({ adapter });
} else {
    // Prevent multiple instances in development (Next.js/SvelteKit HMR)
    if (!global.prisma) {
        global.prisma = new PrismaClient({ adapter });
    }
    prisma = global.prisma;
}

module.exports = prisma;
