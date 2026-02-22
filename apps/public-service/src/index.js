const app = require('./app');
const prisma = require('./lib/prisma');
require('dotenv').config();

const PORT = process.env.PORT || 3004;

const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('Database verification successful.');

        app.listen(PORT, () => {
            console.log(`Public Service running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

startServer();
