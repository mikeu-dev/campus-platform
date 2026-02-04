const { S3Client } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({
    region: 'us-east-1',
    endpoint: process.env.MINIO_ENDPOINT || 'http://localhost:9000',
    credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY || 'minioadmin',
        secretAccessKey: process.env.MINIO_SECRET_KEY || 'minioadmin'
    },
    forcePathStyle: true
});

module.exports = s3Client;
