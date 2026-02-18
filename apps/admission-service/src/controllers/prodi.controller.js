const db = require('../config/db');
const { z } = require('zod');

const prodiSchema = z.object({
    name: z.string().min(2),
    faculty: z.string().optional(),
    is_active: z.boolean().optional()
});

class ProdiController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user?.tenant_id || req.params.tenantId || '00000000-0000-0000-0000-000000000000';
            const result = await db.query(
                'SELECT * FROM pmb_prodis WHERE tenant_id = $1 ORDER BY name ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = prodiSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'INSERT INTO pmb_prodis (tenant_id, name, faculty, is_active) VALUES ($1, $2, $3, $4) RETURNING *',
                [tenantId, data.name, data.faculty, data.is_active ?? true]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = prodiSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `UPDATE pmb_prodis SET name = $1, faculty = $2, is_active = $3 
                 WHERE id = $4 AND tenant_id = $5 RETURNING *`,
                [data.name, data.faculty, data.is_active, id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Prodi not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'DELETE FROM pmb_prodis WHERE id = $1 AND tenant_id = $2 RETURNING *',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Prodi not found' });
            res.json({ status: 'success', message: 'Prodi deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new ProdiController();
