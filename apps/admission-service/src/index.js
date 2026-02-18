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

// Auth Middleware (stub)
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    // In production, verify JWT from Identity Service here
    req.user = { tenant_id: '00000000-0000-0000-0000-000000000000', role: 'admin' };
    next();
};

// Routes
app.use('/api/v1/public/pmb', publicRoutes);
app.use('/api/v1/admin/pmb', authenticate, adminRoutes);

// Health Check
app.get('/health', (req, res) => res.json({ status: 'admission-service is running' }));

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error'
    });
});

app.listen(port, () => {
    console.log(`Admission Service (PMB) listening at http://localhost:${port}`);
});

module.exports = app;
