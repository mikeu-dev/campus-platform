const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ status: 'fail', message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ status: 'fail', message: 'Invalid token format' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { sub, tenant_id, tenant_slug, roles, email }
        next();
    } catch (err) {
        return res.status(403).json({ status: 'fail', message: 'Invalid or expired token' });
    }
};

const requireRole = (role) => {
    return (req, res, next) => {
        if (!req.user || !req.user.roles || !req.user.roles.includes(role)) {
            return res.status(403).json({ status: 'fail', message: `Role ${role} required` });
        }
        next();
    };
};

const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.roles || !req.user.roles.includes('admin')) {
        return res.status(403).json({ status: 'fail', message: 'Admin access required' });
    }
    next();
};

module.exports = {
    verifyToken,
    requireRole,
    isAdmin
};
