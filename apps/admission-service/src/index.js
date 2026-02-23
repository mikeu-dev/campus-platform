const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const publicRoutes = require('./routes/public.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();
const port = process.env.PORT || 3005;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const { verifyToken, isAdmin } = require('./middlewares/auth.middleware');

// Routes
app.use('/api/v1/public/pmb', publicRoutes);
app.use('/api/v1/admin/pmb', verifyToken, isAdmin, adminRoutes);

// Health Check
app.get('/health', async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.status(200).json({
            status: 'ok',
            service: 'admission-service',
            database: 'connected'
        });
    } catch (error) {
        res.status(503).json({
            status: 'trouble',
            service: 'admission-service',
            database: 'disconnected',
            error: error.message
        });
    }
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});

const prisma = require('./lib/prisma');

const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('Database verification successful.');

        app.listen(port, () => {
            console.log(`Admission Service (PMB) listening at http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
};

startServer();

module.exports = app;
