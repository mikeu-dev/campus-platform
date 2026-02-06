const db = require('../config/db');
const { z } = require('zod');

const documentSchema = z.object({
    applicant_id: z.string().uuid(),
    document_type: z.string().min(1),
    file_url: z.string().url(),
});

class DocumentController {
    async upload(req, res, next) {
        try {
            const data = documentSchema.parse(req.body);
            const result = await db.query(
                `INSERT INTO pmb_documents (applicant_id, document_type, file_url)
                 VALUES ($1, $2, $3) RETURNING *`,
                [data.applicant_id, data.document_type, data.file_url]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status, notes } = req.body;
            const result = await db.query(
                `UPDATE pmb_documents SET status = $1, notes = $2, updated_at = NOW()
                 WHERE id = $3 RETURNING *`,
                [status, notes, id]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Document not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const result = await db.query('DELETE FROM pmb_documents WHERE id = $1 RETURNING *', [id]);
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Document not found' });
            res.json({ status: 'success', message: 'Document deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new DocumentController();
