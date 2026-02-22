const prisma = require('../lib/prisma');
const { z } = require('zod');

const postSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3),
    content: z.string().optional(),
    image_url: z.string().optional(),
    category: z.string().optional(),
    is_pinned: z.boolean().default(false),
    is_active: z.boolean().default(true),
});

class PostController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_posts.findMany({
                where: { tenant_id: tenantId },
                orderBy: { created_at: 'desc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const { pinned, limit } = req.query;

            const where = { tenant_id: tenantId, is_active: true };
            if (pinned === 'true') {
                where.is_pinned = true;
            }

            const result = await prisma.public_posts.findMany({
                where,
                orderBy: { created_at: 'desc' },
                take: limit ? parseInt(limit) : undefined
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getBySlug(req, res, next) {
        try {
            const { tenantId, slug } = req.params;
            const result = await prisma.public_posts.findFirst({
                where: { tenant_id: tenantId, slug, is_active: true }
            });
            if (!result) return res.status(404).json({ status: 'fail', message: 'Post not found' });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = postSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_posts.create({
                data: { ...data, tenant_id: tenantId }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = postSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_posts.update({
                where: { id, tenant_id: tenantId },
                data: { ...data, updated_at: new Date() }
            });
            res.json({ status: 'success', data: result });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Post not found' });
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            await prisma.public_posts.delete({
                where: { id, tenant_id: tenantId }
            });
            res.json({ status: 'success', message: 'Post deleted' });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Post not found' });
            next(err);
        }
    }
}

module.exports = new PostController();
