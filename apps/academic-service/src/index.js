require('dotenv').config();
const { inject } = require('@vercel/analytics');
const app = require('./app');

inject();
const prisma = require('./lib/prisma');

const PORT = process.env.PORT || 3002;

const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('Database verification successful.');

        app.listen(PORT, () => {
            console.log(`Academic Service running on port ${PORT}`);
        });

    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

startServer();

module.exports = app;
