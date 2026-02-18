const db = require('../config/db');
const { z } = require('zod');

const settingSchema = z.object({
    key: z.string(),
    value: z.string().optional(),
    category: z.string().optional(),
});

class SettingController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM public_settings WHERE tenant_id = $1',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await db.query(
                'SELECT * FROM public_settings WHERE tenant_id = $1',
                [tenantId]
            );

            // Transform to object for easier consumption
            const settings = {};
            result.rows.forEach(row => {
                settings[row.key] = row.value;
            });

            res.json({ status: 'success', data: settings });
        } catch (err) { next(err); }
    }

    async upsert(req, res, next) {
        try {
            const { key, value, category } = settingSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `INSERT INTO public_settings (tenant_id, key, value, category)
                 VALUES ($1, $2, $3, $4)
                 ON CONFLICT (tenant_id, key) 
                 DO UPDATE SET value = EXCLUDED.value, category = EXCLUDED.category, updated_at = NOW()
                 RETURNING *`,
                [tenantId, key, value, category]
            );
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async bulkUpsert(req, res, next) {
        try {
            const settings = z.array(settingSchema).parse(req.body);
            const tenantId = req.user.tenant_id;

            await db.query('BEGIN');
            try {
                for (const s of settings) {
                    await db.query(
                        `INSERT INTO public_settings (tenant_id, key, value, category)
                         VALUES ($1, $2, $3, $4)
                         ON CONFLICT (tenant_id, key) 
                         DO UPDATE SET value = EXCLUDED.value, category = EXCLUDED.category, updated_at = NOW()`,
                        [tenantId, s.key, s.value, s.category]
                    );
                }
                await db.query('COMMIT');
                res.json({ status: 'success', message: 'Settings updated' });
            } catch (err) {
                await db.query('ROLLBACK');
                throw err;
            }
        } catch (err) { next(err); }
    }
}

module.exports = new SettingController();
