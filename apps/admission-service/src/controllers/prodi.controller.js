const db = require('../config/db');
const { z } = require('zod');

class ProdiController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user?.tenant_id || req.params.tenantId || '00000000-0000-0000-0000-000000000000';
            const result = await db.query(
                'SELECT * FROM pmb_prodis WHERE tenant_id = $1 AND is_active = TRUE ORDER BY name ASC',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const { name, faculty } = req.body;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'INSERT INTO pmb_prodis (tenant_id, name, faculty) VALUES ($1, $2, $3) RETURNING *',
                [tenantId, name, faculty]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }
}

module.exports = new ProdiController();
