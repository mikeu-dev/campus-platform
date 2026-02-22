const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ status: 'fail', message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Decoded contains: { sub, tenant_id, tenant_slug, roles, email }
        req.user = decoded;

        // Enforce Tenant Context
        if (!req.user.tenant_id) {
            return res.status(403).json({ status: 'fail', message: 'Token missing tenant context' });
        }

        next();
    } catch (err) {
        return res.status(403).json({ status: 'fail', message: 'Invalid token' });
    }
};

const isAdmin = (req, res, next) => {
    if (!req.user || !req.user.roles || !req.user.roles.includes('admin')) {
        return res.status(403).json({ status: 'fail', message: 'Admin access required' });
    }
    next();
};

module.exports = { verifyToken, isAdmin };
