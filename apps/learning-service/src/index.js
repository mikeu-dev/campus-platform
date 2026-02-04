const app = require('./app');
const db = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3003;

const startServer = async () => {
    try {
        await db.query('SELECT NOW()');
        console.log('Database verification successful.');

        app.listen(PORT, () => {
            console.log(`Learning Service running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

startServer();
