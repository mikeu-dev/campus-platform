const authService = require('../services/auth.service');
const { z } = require('zod');

// Schemas
const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string().min(2),
    tenantSlug: z.string().min(3),
    roleName: z.string().optional(),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

const tenantSchema = z.object({
    name: z.string().min(3),
    slug: z.string().min(3),
    domain: z.string().optional(),
});

class AuthController {
    async register(req, res, next) {
        try {
            const data = registerSchema.parse(req.body);
            const user = await authService.register(data);
            res.status(201).json({
                status: 'success',
                data: { user },
            });
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const data = loginSchema.parse(req.body);
            const result = await authService.login(data);
            res.status(200).json({
                status: 'success',
                data: result,
            });
        } catch (err) {
            if (err.message === 'Invalid credentials') {
                return res.status(401).json({ status: 'fail', message: err.message });
            }
            next(err);
        }
    }

    async createTenant(req, res, next) {
        try {
            const data = tenantSchema.parse(req.body);
            const tenant = await authService.createTenant(data);
            res.status(201).json({
                status: 'success',
                data: { tenant },
            });
        } catch (err) {
            if (err instanceof z.ZodError) {
                return res.status(400).json({ status: 'fail', errors: err.errors });
            }
            next(err);
        }
    }
    async getUsers(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';

            const result = await authService.getUsers(tenantId, { page, limit, search });
            res.json({ status: 'success', ...result });
        } catch (err) { next(err); }
    }

    async createUser(req, res, next) {
        try {
            // Admin only
            const { email, password, fullName, roleName } = req.body;
            const tenantId = req.user.tenant_id;

            // Re-use schema or simple validation
            if (!email || !password || !fullName || !roleName) {
                return res.status(400).json({ status: 'fail', message: 'Missing fields' });
            }

            const user = await authService.adminCreateUser({ email, password, fullName, tenantId, roleName });
            res.status(201).json({ status: 'success', data: user });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AuthController();
