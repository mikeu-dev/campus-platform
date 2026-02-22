const prisma = require('../lib/prisma');
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
            const result = await prisma.public_agendas.findMany({
                where: { tenant_id: tenantId },
                orderBy: { date: 'asc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const { pinned, limit } = req.query;

            const where = { tenant_id: tenantId, is_active: true };
            if (pinned === 'true') {
                where.is_pinned = true;
            }

            const result = await prisma.public_agendas.findMany({
                where,
                orderBy: { date: 'asc' },
                take: limit ? parseInt(limit) : undefined
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getById(req, res, next) {
        try {
            const { tenantId, id } = req.params;
            const result = await prisma.public_agendas.findFirst({
                where: { id, tenant_id: tenantId, is_active: true }
            });
            if (!result) {
                return res.status(404).json({ status: 'fail', message: 'Agenda not found' });
            }
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = agendaSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_agendas.create({
                data: {
                    ...data,
                    date: new Date(data.date),
                    tenant_id: tenantId
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = agendaSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_agendas.update({
                where: { id, tenant_id: tenantId },
                data: {
                    ...data,
                    date: new Date(data.date),
                    updated_at: new Date()
                }
            });
            res.json({ status: 'success', data: result });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Agenda not found' });
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            await prisma.public_agendas.delete({
                where: { id, tenant_id: tenantId }
            });
            res.json({ status: 'success', message: 'Agenda deleted' });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Agenda not found' });
            next(err);
        }
    }
}

module.exports = new AgendaController();
