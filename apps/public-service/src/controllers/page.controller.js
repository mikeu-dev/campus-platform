const prisma = require('../lib/prisma');
const { z } = require('zod');

const pageSchema = z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    content: z.string().optional(),
    parent_menu: z.string().optional(),
    order_index: z.number().int().default(0),
    is_active: z.boolean().default(true),
});

class PageController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_pages.findMany({
                where: { tenant_id: tenantId },
                orderBy: [
                    { parent_menu: 'asc' },
                    { order_index: 'asc' }
                ]
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await prisma.public_pages.findMany({
                where: { tenant_id: tenantId, is_active: true },
                orderBy: [
                    { parent_menu: 'asc' },
                    { order_index: 'asc' }
                ]
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getBySlug(req, res, next) {
        try {
            const { tenantId, slug } = req.params;
            const result = await prisma.public_pages.findFirst({
                where: { tenant_id: tenantId, slug, is_active: true }
            });
            if (!result) return res.status(404).json({ status: 'fail', message: 'Page not found' });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = pageSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_pages.create({
                data: { ...data, tenant_id: tenantId }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = pageSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_pages.update({
                where: { id, tenant_id: tenantId },
                data: { ...data, updated_at: new Date() }
            });
            res.json({ status: 'success', data: result });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Page not found' });
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            await prisma.public_pages.delete({
                where: { id, tenant_id: tenantId }
            });
            res.json({ status: 'success', message: 'Page deleted' });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Page not found' });
            next(err);
        }
    }
}

module.exports = new PageController();
