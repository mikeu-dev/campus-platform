const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

// Mock auth middleware
jest.mock('../src/middlewares/auth.middleware', () => ({
    verifyToken: (req, res, next) => {
        req.user = {
            sub: 'test-user-id',
            tenant_id: 'test-tenant-id',
            roles: ['admin'] // Simulate admin role for these tests
        };
        next();
    }
}));

// Mock DB
jest.mock('../src/config/db', () => ({
    query: jest.fn(),
}));

describe('Lecturer Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/lecturers', () => {
        it('should return paginated list of lecturers', async () => {
            db.query.mockResolvedValueOnce({ rows: [{ count: 1 }] }); // Count query
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'l1', name: 'Lecturer 1', platform_lecturer_number: 'NIDN1' }]
            }); // Data query

            const res = await request(app).get('/api/v1/lecturers');

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('success');
            expect(res.body.data).toHaveLength(1);
            expect(res.body.meta).toBeDefined();
        });

        it('should filter lecturers by search term', async () => {
            db.query.mockResolvedValueOnce({ rows: [{ count: 1 }] }); // Count
            db.query.mockResolvedValueOnce({ rows: [{ id: 'l1', name: 'Lecturer 1' }] }); // Data

            const res = await request(app).get('/api/v1/lecturers?search=Lecturer');

            expect(res.statusCode).toBe(200);
            const countCall = db.query.mock.calls[0];
            const dataCall = db.query.mock.calls[1];

            // Check if search parameter was added to query
            expect(countCall[1]).toContain('%Lecturer%');
            expect(dataCall[1]).toContain('%Lecturer%');
        });
    });

    describe('POST /api/v1/lecturers', () => {
        it('should create a new lecturer', async () => {
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'l2', name: 'New Lecturer', platform_lecturer_number: 'NIDN2' }]
            });

            const res = await request(app)
                .post('/api/v1/lecturers')
                .send({
                    user_id: '123e4567-e89b-12d3-a456-426614174000', // Valid UUID
                    name: 'New Lecturer',
                    lecturer_number: 'NIDN2'
                });

            expect(res.statusCode).toBe(201);
            expect(res.body.data.name).toBe('New Lecturer');
        });
    });

    describe('PUT /api/v1/lecturers/:id', () => {
        it('should update lecturer details', async () => {
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'l1', name: 'Updated Name', platform_lecturer_number: 'NIDN1' }]
            });

            const res = await request(app)
                .put('/api/v1/lecturers/l1')
                .send({
                    name: 'Updated Name'
                });

            expect(res.statusCode).toBe(200);
            expect(res.body.data.name).toBe('Updated Name');
        });

        it('should return 404 if lecturer not found', async () => {
            db.query.mockResolvedValueOnce({ rows: [] });

            const res = await request(app)
                .put('/api/v1/lecturers/l999')
                .send({ name: 'Updated Name' });

            expect(res.statusCode).toBe(404);
        });
    });

    describe('DELETE /api/v1/lecturers/:id', () => {
        it('should delete a lecturer', async () => {
            db.query.mockResolvedValueOnce({ rows: [{ id: 'l1' }], rowCount: 1 });

            const res = await request(app).delete('/api/v1/lecturers/l1');

            expect(res.statusCode).toBe(200);
            expect(res.body.message).toBe('Lecturer deleted successfully');
        });

        it('should return 404 if lecturer not found', async () => {
            db.query.mockResolvedValueOnce({ rows: [], rowCount: 0 });

            const res = await request(app).delete('/api/v1/lecturers/l999');

            expect(res.statusCode).toBe(404);
        });
    });
});
