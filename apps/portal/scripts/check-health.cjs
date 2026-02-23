/**
 * Standalone Health Checker CLI
 * Usage: node scripts/check-health.js
 */
const http = require('http');
const https = require('https');

// Configuration - Fallback to localhost if ENV not set
// In production, user can provide URLs via env or edit this list
const SERVICES = [
    { name: 'Identity ', url: process.env.PUBLIC_IDENTITY_API_URL || 'http://localhost:3001' },
    { name: 'Academic ', url: process.env.PUBLIC_ACADEMIC_API_URL || 'http://localhost:3002/api/v1' },
    { name: 'Learning ', url: process.env.PUBLIC_LEARNING_API_URL || 'http://localhost:3003/api/v1' },
    { name: 'Public   ', url: process.env.PUBLIC_PUBLIC_API_URL || 'http://localhost:3004/api/v1' },
    { name: 'Admission', url: process.env.PUBLIC_ADMISSION_API_URL || 'http://localhost:3005/api/v1' }
];

const TIMEOUT = 10000;

async function checkUrl(name, baseUrl) {
    // Normalize URL and ensure it doesn't end with a slash before adding /health
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const url = `${cleanBaseUrl}/health`;

    return new Promise((resolve) => {
        const client = url.startsWith('https') ? https : http;
        const start = Date.now();

        const req = client.get(url, {
            timeout: TIMEOUT,
            headers: { 'Accept': 'application/json', 'User-Agent': 'CampusHealthCheck/1.0' }
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                const duration = Date.now() - start;
                let detail = '';
                try {
                    const body = JSON.parse(data);
                    detail = body.database ? `DB: ${body.database}` : (body.status || 'OK');
                    if (body.error) detail += ` (${body.error})`;
                } catch {
                    detail = res.statusCode === 200 ? 'OK' : `HTTP ${res.statusCode}`;
                }

                if (res.statusCode === 200) {
                    resolve({ name, url, status: 'UP', detail, duration });
                } else {
                    resolve({ name, url, status: 'DOWN', detail, duration });
                }
            });
        });

        req.on('error', (err) => {
            const duration = Date.now() - start;
            let detail = err.message;
            if (err.code === 'ECONNREFUSED') detail = 'Connection Refused (Server Down?)';
            if (err.code === 'ENOTFOUND') detail = 'Domain Not Found (DNS Issue?)';
            if (err.code === 'ETIMEDOUT') detail = 'Connection Timed Out';

            resolve({ name, url, status: 'DOWN', detail: detail || 'Network Error', duration });
        });

        req.on('timeout', () => {
            req.destroy();
            resolve({ name, url, status: 'ABORTED', detail: `TIMEOUT (> ${TIMEOUT}ms)`, duration: TIMEOUT });
        });
    });
}

async function run() {
    console.log('\n=== Campus Platform Service Health Check ===');
    console.log(`Time: ${new Date().toLocaleString()}\n`);

    const results = await Promise.all(SERVICES.map(s => checkUrl(s.name, s.url)));

    results.forEach(r => {
        const statusColor = r.status === 'UP' ? '\x1b[32m' : '\x1b[31m'; // Green or Red
        const reset = '\x1b[0m';
        console.log(`${r.name} | [${statusColor}${r.status}${reset}] | ${r.duration.toString().padStart(4)}ms | ${r.detail.padEnd(15)} | ${r.url}`);
    });

    console.log('\n============================================\n');
}

run();
