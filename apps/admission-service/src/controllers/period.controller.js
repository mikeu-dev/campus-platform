const db = require('../config/db');
const { z } = require('zod');

const periodSchema = z.object({
    name: z.string().min(1),
    start_date: z.string(),
    end_date: z.string(),
    is_active: z.boolean().default(true),
    description: z.string().optional(),
});

class PeriodController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM pmb_periods WHERE tenant_id = $1 ORDER BY created_at DESC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await db.query(
                'SELECT * FROM pmb_periods WHERE tenant_id = $1 AND is_active = TRUE AND end_date >= CURRENT_DATE ORDER BY start_date ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = periodSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `INSERT INTO pmb_periods (tenant_id, name, start_date, end_date, is_active, description)
                 VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [tenantId, data.name, data.start_date, data.end_date, data.is_active, data.description]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = periodSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `UPDATE pmb_periods SET name = $1, start_date = $2, end_date = $3, is_active = $4, description = $5, updated_at = NOW()
                 WHERE id = $6 AND tenant_id = $7 RETURNING *`,
                [data.name, data.start_date, data.end_date, data.is_active, data.description, id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Period not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'DELETE FROM pmb_periods WHERE id = $1 AND tenant_id = $2 RETURNING *',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Period not found' });
            res.json({ status: 'success', message: 'Period deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new PeriodController();
