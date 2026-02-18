const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../server.log'), { flags: 'a' });

app.use(helmet());
app.use(cors());
app.use(morgan('dev')); // Log to console
app.use(morgan('combined', { stream: accessLogStream })); // Log to file
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', service: 'public-service' });
});

// Routes will be mounted here
const publicRoutes = require('./routes/public.routes');
const adminRoutes = require('./routes/admin.routes');

app.use('/api/v1/public', publicRoutes);
app.use('/api/v1/admin/public', adminRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 'error', message: err.message });
});

module.exports = app;
