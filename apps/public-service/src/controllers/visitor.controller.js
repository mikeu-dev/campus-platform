const prisma = require('../lib/prisma');

class VisitorController {
    async track(req, res, next) {
        try {
            const { tenantId, route } = req.body;
            const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            const userAgent = req.headers['user-agent'];

            if (!tenantId) {
                return res.status(400).json({ status: 'fail', message: 'tenantId is required' });
            }

            await prisma.public_visitors.create({
                data: {
                    tenant_id: tenantId,
                    ip_address: ipAddress,
                    user_agent: userAgent,
                    route: route || '/'
                }
            });
            res.status(204).send();
        } catch (err) { next(err); }
    }

    async getStats(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const { days = 7 } = req.query;
            const daysInt = parseInt(days);

            // Use $queryRaw for interval and complex grouping
            const result = await prisma.$queryRaw`
                SELECT 
                    route, 
                    COUNT(*)::int as visit_count,
                    COUNT(DISTINCT ip_address)::int as unique_visitors
                FROM public_visitors 
                WHERE tenant_id = ${tenantId}::uuid AND visited_at > NOW() - (interval '1 day' * ${daysInt})
                GROUP BY route
                ORDER BY visit_count DESC
            `;

            const dailyStats = await prisma.$queryRaw`
                SELECT 
                    DATE(visited_at) as date,
                    COUNT(*)::int as visit_count
                FROM public_visitors
                WHERE tenant_id = ${tenantId}::uuid AND visited_at > NOW() - (interval '1 day' * ${daysInt})
                GROUP BY DATE(visited_at)
                ORDER BY date ASC
            `;

            res.json({
                status: 'success',
                data: {
                    byRoute: result,
                    daily: dailyStats
                }
            });
        } catch (err) { next(err); }
    }
}

module.exports = new VisitorController();
