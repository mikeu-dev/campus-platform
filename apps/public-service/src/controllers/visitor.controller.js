const db = require('../config/db');

class VisitorController {
    async track(req, res, next) {
        try {
            const { tenantId, route } = req.body;
            const ipAddress = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            const userAgent = req.headers['user-agent'];

            if (!tenantId) {
                return res.status(400).json({ status: 'fail', message: 'tenantId is required' });
            }

            await db.query(
                `INSERT INTO public_visitors (tenant_id, ip_address, user_agent, route)
                 VALUES ($1, $2, $3, $4)`,
                [tenantId, ipAddress, userAgent, route || '/']
            );
            res.status(204).send();
        } catch (err) { next(err); }
    }

    async getStats(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const { days = 7 } = req.query;

            const result = await db.query(
                `SELECT 
                    route, 
                    COUNT(*) as visit_count,
                    COUNT(DISTINCT ip_address) as unique_visitors
                 FROM public_visitors 
                 WHERE tenant_id = $1 AND visited_at > NOW() - interval '$2 days'
                 GROUP BY route
                 ORDER BY visit_count DESC`,
                [tenantId, days]
            );

            const dailyStats = await db.query(
                `SELECT 
                    DATE(visited_at) as date,
                    COUNT(*) as visit_count
                 FROM public_visitors
                 WHERE tenant_id = $1 AND visited_at > NOW() - interval '$2 days'
                 GROUP BY DATE(visited_at)
                 ORDER BY date ASC`,
                [tenantId, days]
            );

            res.json({
                status: 'success',
                data: {
                    byRoute: result.rows,
                    daily: dailyStats.rows
                }
            });
        } catch (err) { next(err); }
    }
}

module.exports = new VisitorController();
