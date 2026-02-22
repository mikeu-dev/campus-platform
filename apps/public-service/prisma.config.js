require('dotenv').config();
const { defineConfig } = require('@prisma/config');

module.exports = defineConfig({
    datasource: {
        url: process.env.DIRECT_URL || "postgresql://postgres:postgres@localhost:5432/dummy",
    },
    migrations: {
        seed: 'node prisma/seed.js',
    },
});
