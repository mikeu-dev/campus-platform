const db = require('../config/db');
const { z } = require('zod');

const agendaSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    date: z.string(), // YYYY-MM-DD
    location: z.string().optional(),
    is_pinned: z.boolean().default(false),
    is_active: z.boolean().default(true),
});

class AgendaController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM public_agendas WHERE tenant_id = $1 ORDER BY date ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const { pinned, limit } = req.query;

            let query = 'SELECT * FROM public_agendas WHERE tenant_id = $1 AND is_active = TRUE';
            const params = [tenantId];

            if (pinned === 'true') {
                query += ' AND is_pinned = TRUE';
            }

            // Show upcoming first
            query += ' ORDER BY date ASC';

            if (limit) {
                query += ` LIMIT $${params.length + 1}`;
                params.push(limit);
            }

            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = agendaSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `INSERT INTO public_agendas (tenant_id, title, description, date, location, is_pinned, is_active)
                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                [tenantId, data.title, data.description, data.date, data.location, data.is_pinned, data.is_active]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = agendaSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `UPDATE public_agendas SET title = $1, description = $2, date = $3, location = $4, is_pinned = $5, is_active = $6, updated_at = NOW()
                 WHERE id = $7 AND tenant_id = $8 RETURNING *`,
                [data.title, data.description, data.date, data.location, data.is_pinned, data.is_active, id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Agenda not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'DELETE FROM public_agendas WHERE id = $1 AND tenant_id = $2 RETURNING *',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Agenda not found' });
            res.json({ status: 'success', message: 'Agenda deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new AgendaController();
