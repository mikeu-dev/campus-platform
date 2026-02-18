const db = require('../config/db');
const { z } = require('zod');

const videoSchema = z.object({
    title: z.string().optional(),
    youtube_id: z.string().min(1),
    order_index: z.number().int().default(0),
    is_active: z.boolean().default(true),
});

class VideoController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM public_videos WHERE tenant_id = $1 ORDER BY order_index ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await db.query(
                'SELECT * FROM public_videos WHERE tenant_id = $1 AND is_active = TRUE ORDER BY order_index ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = videoSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `INSERT INTO public_videos (tenant_id, title, youtube_id, order_index, is_active)
                 VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [tenantId, data.title, data.youtube_id, data.order_index, data.is_active]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = videoSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `UPDATE public_videos SET title = $1, youtube_id = $2, order_index = $3, is_active = $4, updated_at = NOW()
                 WHERE id = $5 AND tenant_id = $6 RETURNING *`,
                [data.title, data.youtube_id, data.order_index, data.is_active, id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Video not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'DELETE FROM public_videos WHERE id = $1 AND tenant_id = $2 RETURNING *',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Video not found' });
            res.json({ status: 'success', message: 'Video deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new VideoController();
