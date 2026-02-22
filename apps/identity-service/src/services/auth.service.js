const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    // Find Tenant by Slug
    async getTenantBySlug(slug) {
        return await prisma.tenants.findUnique({
            where: { slug }
        });
    }

    // Register a new user
    async register({ email, password, fullName, tenantSlug, roleName = 'student' }) {
        // 1. Check Tenant
        const tenant = await this.getTenantBySlug(tenantSlug);
        if (!tenant) {
            throw new Error('Tenant not found');
        }

        // 2. Check if user exists
        const existingUser = await prisma.users.findFirst({
            where: { email }
        });

        if (existingUser) {
            throw new Error('Email already registered');
        }

        // 3. Hash Password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // 4. Transaction: Create User -> Find/Create Role -> Assign Role
        return await prisma.$transaction(async (tx) => {
            // Create User
            const user = await tx.users.create({
                data: {
                    tenant_id: tenant.id,
                    email,
                    password_hash: hashedPassword,
                    full_name: fullName
                }
            });

            // Find or Create Role
            let role = await tx.roles.findFirst({
                where: {
                    tenant_id: tenant.id,
                    name: roleName
                }
            });

            if (!role) {
                role = await tx.roles.create({
                    data: {
                        tenant_id: tenant.id,
                        name: roleName
                    }
                });
            }

            // Assign Role
            await tx.user_roles.create({
                data: {
                    user_id: user.id,
                    role_id: role.id
                }
            });

            return user;
        });
    }

    // Login
    async login({ email, password }) {
        // 1. Find User
        const user = await prisma.users.findUnique({
            where: { email },
            include: {
                tenants: true
            }
        });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        // 2. Check Password
        const isValid = await bcrypt.compare(password, user.password_hash);
        if (!isValid) {
            throw new Error('Invalid credentials');
        }

        // 3. Get Roles
        const userRoles = await prisma.user_roles.findMany({
            where: { user_id: user.id },
            include: {
                roles: true
            }
        });
        const roles = userRoles.map(ur => ur.roles.name);

        // 4. Generate Token
        const payload = {
            sub: user.id,
            tenant_id: user.tenant_id,
            tenant_slug: user.tenants.slug,
            roles: roles,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

        return { token, user: { id: user.id, email: user.email, fullName: user.full_name, roles } };
    }

    // Create Initial Tenant (Helper)
    async createTenant({ name, slug, domain }) {
        try {
            return await prisma.tenants.create({
                data: { name, slug, domain }
            });
        } catch (err) {
            if (err.code === 'P2002') throw new Error('Tenant slug already exists');
            throw err;
        }
    }

    // List Users (Admin)
    async getUsers(tenantId, { page = 1, limit = 10, search = '' }) {
        const skip = (page - 1) * limit;
        const take = limit;

        const where = {
            tenant_id: tenantId,
            ...(search && {
                OR: [
                    { email: { contains: search, mode: 'insensitive' } },
                    { full_name: { contains: search, mode: 'insensitive' } }
                ]
            })
        };

        // Transaction to get data and count in parallel (or sequential)
        const [users, total] = await prisma.$transaction([
            prisma.users.findMany({
                where,
                skip,
                take,
                orderBy: { created_at: 'desc' },
                include: {
                    user_roles: {
                        include: {
                            roles: true
                        }
                    }
                }
            }),
            prisma.users.count({ where })
        ]);

        // Transform response to match previous structure if needed
        const data = users.map(u => ({
            id: u.id,
            email: u.email,
            full_name: u.full_name,
            role: u.user_roles.length > 0 ? u.user_roles[0].roles.name : null
        }));

        return {
            data,
            meta: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }

    // Admin Create User (Internal/Admin)
    async adminCreateUser({ email, password, fullName, tenantId, roleName }) {
        // 1. Check if user exists
        const existingUser = await prisma.users.findFirst({
            where: { email }
        });

        if (existingUser) {
            throw new Error('Email already registered');
        }

        // 2. Hash Password
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // 3. Transaction
        return await prisma.$transaction(async (tx) => {
            const user = await tx.users.create({
                data: {
                    tenant_id: tenantId,
                    email,
                    password_hash: hashedPassword,
                    full_name: fullName
                }
            });

            // Find or Create Role
            let role = await tx.roles.findFirst({
                where: {
                    tenant_id: tenantId,
                    name: roleName
                }
            });

            if (!role) {
                role = await tx.roles.create({
                    data: {
                        tenant_id: tenantId,
                        name: roleName
                    }
                });
            }

            // Assign Role
            await tx.user_roles.create({
                data: {
                    user_id: user.id,
                    role_id: role.id
                }
            });

            return { ...user, role: roleName };
        });
    }
}

module.exports = new AuthService();
