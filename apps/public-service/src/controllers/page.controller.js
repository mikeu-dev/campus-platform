const db = require('../config/db');
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
            const result = await db.query(
                'SELECT * FROM public_pages WHERE tenant_id = $1 ORDER BY parent_menu, order_index ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await db.query(
                'SELECT * FROM public_pages WHERE tenant_id = $1 AND is_active = TRUE ORDER BY parent_menu, order_index ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getBySlug(req, res, next) {
        try {
            const { tenantId, slug } = req.params;
            const result = await db.query(
                'SELECT * FROM public_pages WHERE tenant_id = $1 AND slug = $2 AND is_active = TRUE',
                [tenantId, slug]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Page not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = pageSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `INSERT INTO public_pages (tenant_id, title, slug, content, parent_menu, order_index, is_active)
                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                [tenantId, data.title, data.slug, data.content, data.parent_menu, data.order_index, data.is_active]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = pageSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `UPDATE public_pages SET title = $1, slug = $2, content = $3, parent_menu = $4, order_index = $5, is_active = $6, updated_at = NOW()
                 WHERE id = $7 AND tenant_id = $8 RETURNING *`,
                [data.title, data.slug, data.content, data.parent_menu, data.order_index, data.is_active, id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Page not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'DELETE FROM public_pages WHERE id = $1 AND tenant_id = $2 RETURNING *',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Page not found' });
            res.json({ status: 'success', message: 'Page deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new PageController();
