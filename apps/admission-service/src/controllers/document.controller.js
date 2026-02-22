const prisma = require('../lib/prisma');
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
            const result = await prisma.pmb_documents.create({
                data: {
                    applicant_id: data.applicant_id,
                    document_type: data.document_type,
                    file_url: data.file_url
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status, notes } = req.body;

            const exists = await prisma.pmb_documents.findUnique({ where: { id } });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Document not found' });

            const result = await prisma.pmb_documents.update({
                where: { id },
                data: {
                    status,
                    notes,
                    updated_at: new Date()
                }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            const exists = await prisma.pmb_documents.findUnique({ where: { id } });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Document not found' });

            await prisma.pmb_documents.delete({ where: { id } });
            res.json({ status: 'success', message: 'Document deleted' });
        } catch (err) { next(err); }
    }
}

module.exports = new DocumentController();
