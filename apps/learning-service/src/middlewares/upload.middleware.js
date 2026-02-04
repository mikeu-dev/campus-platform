const multer = require('multer');
const { Upload } = require('@aws-sdk/lib-storage');
const s3Client = require('../config/minio');

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB
});

const uploadToMinio = async (req, res, next) => {
    if (!req.file) return next();

    // Determine bucket based on context (default to materials)
    const bucketName = req.body.bucket === 'submissions' ? 'campus-submissions' : 'campus-materials';
    const fileKey = `${Date.now()}-${req.file.originalname}`;

    try {
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: bucketName,
                Key: fileKey,
                Body: req.file.buffer,
                ContentType: req.file.mimetype
            }
        });

        await upload.done();

        // Construct public URL
        const publicUrl = `${process.env.MINIO_PUBLIC_URL || 'http://localhost:9000'}/${bucketName}/${fileKey}`;

        req.fileUrl = publicUrl;
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { upload, uploadToMinio };
