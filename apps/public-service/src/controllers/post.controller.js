const db = require('../config/db');
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
            const result = await db.query(
                'SELECT * FROM public_posts WHERE tenant_id = $1 ORDER BY created_at DESC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const { pinned, limit } = req.query;

            let query = 'SELECT * FROM public_posts WHERE tenant_id = $1 AND is_active = TRUE';
            const params = [tenantId];

            if (pinned === 'true') {
                query += ' AND is_pinned = TRUE';
            }

            query += ' ORDER BY created_at DESC';

            if (limit) {
                query += ` LIMIT $${params.length + 1}`;
                params.push(limit);
            }

            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getBySlug(req, res, next) {
        try {
            const { tenantId, slug } = req.params;
            const result = await db.query(
                'SELECT * FROM public_posts WHERE tenant_id = $1 AND slug = $2 AND is_active = TRUE',
                [tenantId, slug]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Post not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = postSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `INSERT INTO public_posts (tenant_id, title, slug, content, image_url, category, is_pinned, is_active)
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
                [tenantId, data.title, data.slug, data.content, data.image_url, data.category, data.is_pinned, data.is_active]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = postSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `UPDATE public_posts SET title = $1, slug = $2, content = $3, image_url = $4, category = $5, is_pinned = $6, is_active = $7, updated_at = NOW()
                 WHERE id = $8 AND tenant_id = $9 RETURNING *`,
                [data.title, data.slug, data.content, data.image_url, data.category, data.is_pinned, data.is_active, id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Post not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'DELETE FROM public_posts WHERE id = $1 AND tenant_id = $2 RETURNING *',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Post not found' });
            res.json({ status: 'success', message: 'Post deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new PostController();
