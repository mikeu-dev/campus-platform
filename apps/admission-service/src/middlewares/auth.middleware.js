const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ status: 'fail', message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ status: 'fail', message: 'Malformed token' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        if (!req.user.tenant_id) {
            return res.status(403).json({ status: 'fail', message: 'Token missing tenant context' });
        }

        next();
    } catch (err) {
        return res.status(403).json({ status: 'fail', message: 'Invalid or expired token' });
    }
};

const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.roles || !req.user.roles.includes('admin')) {
        return res.status(403).json({ status: 'fail', message: 'Admin role required' });
    }
    next();
};

module.exports = { verifyToken, isAdmin };
