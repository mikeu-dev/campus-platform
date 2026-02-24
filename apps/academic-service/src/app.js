const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev')); // Log to console
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prisma = require('./lib/prisma');

app.get('/health', async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.status(200).json({
            status: 'ok',
            service: 'academic-service',
            database: 'connected'
        });
    } catch (error) {
        res.status(503).json({
            status: 'trouble',
            service: 'academic-service',
            database: 'disconnected',
            error: error.message
        });
    }
});

// Routes will be mounted here
const apiRoutes = require('./routes/api.routes');
app.use('/api/v1', apiRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 'error', message: err.message });
});

module.exports = app;
