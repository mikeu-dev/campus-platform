require('dotenv').config();
const { defineConfig, env } = require('@prisma/config');

module.exports = defineConfig({
    datasource: {
        url: env('DIRECT_URL'),
    },
    migrations: {
        seed: 'node prisma/seed.js',
    },
});
