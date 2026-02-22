require('dotenv').config();
const app = require('./app');
const prisma = require('./lib/prisma');

const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        // Check DB Connection
        await prisma.$connect();
        console.log('Database verification successful.');

        app.listen(PORT, () => {
            console.log(`Identity Service running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

startServer();
