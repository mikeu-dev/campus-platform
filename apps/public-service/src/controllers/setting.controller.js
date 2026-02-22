const prisma = require('../lib/prisma');
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
            const result = await prisma.public_settings.findMany({
                where: { tenant_id: tenantId }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await prisma.public_settings.findMany({
                where: { tenant_id: tenantId }
            });

            // Transform to object for easier consumption
            const settings = {};
            result.forEach(row => {
                settings[row.key] = row.value;
            });

            res.json({ status: 'success', data: settings });
        } catch (err) { next(err); }
    }

    async upsert(req, res, next) {
        try {
            const { key, value, category } = settingSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await prisma.public_settings.upsert({
                where: {
                    tenant_id_key: {
                        tenant_id: tenantId,
                        key: key
                    }
                },
                update: {
                    value,
                    category,
                    updated_at: new Date()
                },
                create: {
                    tenant_id: tenantId,
                    key,
                    value,
                    category
                }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async bulkUpsert(req, res, next) {
        try {
            const settings = z.array(settingSchema).parse(req.body);
            const tenantId = req.user.tenant_id;

            // Using transaction for bulk upsert
            await prisma.$transaction(
                settings.map(s => prisma.public_settings.upsert({
                    where: {
                        tenant_id_key: {
                            tenant_id: tenantId,
                            key: s.key
                        }
                    },
                    update: {
                        value: s.value,
                        category: s.category,
                        updated_at: new Date()
                    },
                    create: {
                        tenant_id: tenantId,
                        key: s.key,
                        value: s.value,
                        category: s.category
                    }
                }))
            );
            res.json({ status: 'success', message: 'Settings updated' });
        } catch (err) { next(err); }
    }
}

module.exports = new SettingController();
