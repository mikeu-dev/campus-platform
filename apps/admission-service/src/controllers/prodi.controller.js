const prisma = require('../lib/prisma');
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
            const result = await prisma.pmb_prodis.findMany({
                where: { tenant_id: tenantId },
                orderBy: { name: 'asc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = prodiSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.pmb_prodis.create({
                data: {
                    tenant_id: tenantId,
                    name: data.name,
                    faculty: data.faculty,
                    is_active: data.is_active ?? true
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = prodiSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            // Check existence logic handled by Prisma, but custom error preferred
            const exists = await prisma.pmb_prodis.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Prodi not found' });

            const result = await prisma.pmb_prodis.update({
                where: { id },
                data: {
                    name: data.name,
                    faculty: data.faculty,
                    is_active: data.is_active
                }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const exists = await prisma.pmb_prodis.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Prodi not found' });

            await prisma.pmb_prodis.delete({ where: { id } });
            res.json({ status: 'success', message: 'Prodi deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new ProdiController();
