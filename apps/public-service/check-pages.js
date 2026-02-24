require('dotenv').config();
const prisma = require('./src/lib/prisma');

async function check() {
    // Force seeding mode to use correct URL and schema
    process.env.IS_SEEDING = 'true';
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';
    const pages = await prisma.public_pages.findMany({
        where: { tenant_id: tenantId }
    });
    console.log('--- PAGES IN DB ---');
    console.log(JSON.stringify(pages, null, 2));
    await prisma.$disconnect();
}

check();
