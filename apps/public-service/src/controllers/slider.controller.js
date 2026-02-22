const prisma = require('../lib/prisma');
const { z } = require('zod');

const sliderSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image_url: z.string().url(),
    order_index: z.number().int().default(0),
    is_active: z.boolean().default(true),
});

class SliderController {
    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_sliders.findMany({
                where: { tenant_id: tenantId },
                orderBy: { order_index: 'asc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getPublic(req, res, next) {
        try {
            const { tenantId } = req.params;
            const result = await prisma.public_sliders.findMany({
                where: { tenant_id: tenantId, is_active: true },
                orderBy: { order_index: 'asc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async create(req, res, next) {
        try {
            const data = sliderSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_sliders.create({
                data: { ...data, tenant_id: tenantId }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const data = sliderSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const result = await prisma.public_sliders.update({
                where: { id, tenant_id: tenantId },
                data: { ...data, updated_at: new Date() }
            });
            res.json({ status: 'success', data: result });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Slider not found' });
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            await prisma.public_sliders.delete({
                where: { id, tenant_id: tenantId }
            });
            res.json({ status: 'success', message: 'Slider deleted' });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Slider not found' });
            next(err);
        }
    }
}

module.exports = new SliderController();
