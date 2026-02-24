const prisma = require('../lib/prisma');

class LandingController {
    async getLandingData(req, res, next) {
        try {
            const { tenantId } = req.params;

            if (!tenantId) {
                return res.status(400).json({ status: 'fail', message: 'tenantId is required' });
            }

            const [sliders, settings, posts, agendas, videos] = await Promise.all([
                // 1. Sliders
                prisma.public_sliders.findMany({
                    where: { tenant_id: tenantId, is_active: true },
                    orderBy: { order_index: 'asc' }
                }),
                // 2. Settings
                prisma.public_settings.findMany({
                    where: { tenant_id: tenantId }
                }),
                // 3. Pinned Posts
                prisma.public_posts.findMany({
                    where: { tenant_id: tenantId, is_active: true, is_pinned: true },
                    orderBy: { created_at: 'desc' },
                    take: 4
                }),
                // 4. Pinned Agendas
                prisma.public_agendas.findMany({
                    where: { tenant_id: tenantId, is_active: true, is_pinned: true },
                    orderBy: { date: 'asc' },
                    take: 4
                }),
                // 5. Featured Videos
                prisma.public_videos.findMany({
                    where: { tenant_id: tenantId, is_active: true },
                    orderBy: { order_index: 'asc' },
                    take: 2
                })
            ]);

            // Transform settings to object
            const settingsObj = {};
            settings.forEach(row => {
                settingsObj[row.key] = row.value;
            });

            res.json({
                status: 'success',
                data: {
                    sliders,
                    settings: settingsObj,
                    posts,
                    agendas,
                    videos
                }
            });
        } catch (err) {
            next(err);
        }
    }

    async getSharedData(req, res, next) {
        try {
            const { tenantId } = req.params;
            if (!tenantId) return res.status(400).json({ status: 'fail', message: 'tenantId is required' });

            const [settings, pages, links] = await Promise.all([
                prisma.public_settings.findMany({ where: { tenant_id: tenantId } }),
                prisma.public_pages.findMany({ where: { tenant_id: tenantId, is_active: true } }),
                prisma.public_links.findMany({ where: { tenant_id: tenantId, is_active: true } })
            ]);

            const settingsObj = {};
            settings.forEach(row => { settingsObj[row.key] = row.value; });

            res.json({
                status: 'success',
                data: { settings: settingsObj, pages, links }
            });
        } catch (err) { next(err); }
    }
}

module.exports = new LandingController();
