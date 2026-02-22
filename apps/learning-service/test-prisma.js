require('dotenv').config();
const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DIRECT_URL || process.env.DATABASE_URL
        }
    }
});

prisma.materials.count()
    .then(c => console.log('Materials count:', c))
    .catch(console.error)
    .finally(() => prisma.$disconnect());
