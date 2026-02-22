const prisma = require('../lib/prisma');
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
            const result = await prisma.pmb_periods.findMany({
                where: { tenant_id: tenantId },
                orderBy: { created_at: 'desc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await prisma.pmb_periods.findMany({
                where: {
                    tenant_id: tenantId,
                    is_active: true,
                    end_date: { gte: new Date() }
                },
                orderBy: { start_date: 'asc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = periodSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.pmb_periods.create({
                data: {
                    tenant_id: tenantId,
                    name: data.name,
                    start_date: new Date(data.start_date),
                    end_date: new Date(data.end_date),
                    is_active: data.is_active,
                    description: data.description
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = periodSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const exists = await prisma.pmb_periods.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Period not found' });

            const result = await prisma.pmb_periods.update({
                where: { id },
                data: {
                    name: data.name,
                    start_date: new Date(data.start_date),
                    end_date: new Date(data.end_date),
                    is_active: data.is_active,
                    description: data.description,
                    updated_at: new Date()
                }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const exists = await prisma.pmb_periods.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Period not found' });

            await prisma.pmb_periods.delete({ where: { id } });
            res.json({ status: 'success', message: 'Period deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new PeriodController();
