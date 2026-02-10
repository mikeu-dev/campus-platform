const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

// Mock auth middleware
jest.mock('../src/middlewares/auth.middleware', () => ({
    verifyToken: (req, res, next) => {
        req.user = {
            sub: 'test-user-id',
            tenant_id: 'test-tenant-id',
            roles: ['student']
        };
        next();
    }
}));

// Mock DB
jest.mock('../src/config/db', () => ({
    query: jest.fn(),
}));

describe('Enrollment Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/classes (Filtering)', () => {
        it('should filter classes by semester and year', async () => {
            db.query.mockResolvedValueOnce({ rows: [{ count: 1 }] });
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'cl1', semester: 'GANJIL', year: 2023 }]
            });

            const res = await request(app).get('/api/v1/classes?semester=GANJIL&year=2023');

            expect(res.statusCode).toBe(200);

            const countCall = db.query.mock.calls[0];
            const dataCall = db.query.mock.calls[1];

            expect(countCall[1]).toContain('GANJIL');
            expect(countCall[1]).toContain('2023');
            expect(dataCall[1]).toContain('GANJIL');
            expect(dataCall[1]).toContain('2023');
        });
    });

    describe('POST /api/v1/enrollments', () => {
        it('should enroll a student in a class', async () => {
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'e1', class_id: 'cl1', student_id: 's1', status: 'enrolled' }]
            });

            const res = await request(app)
                .post('/api/v1/enrollments')
                .send({
                    class_id: '123e4567-e89b-12d3-a456-426614174000',
                    student_id: '123e4567-e89b-12d3-a456-426614174001'
                });

            expect(res.statusCode).toBe(201);
            expect(res.body.data.status).toBe('enrolled');
        });

        it('should return 400 if already enrolled', async () => {
            const error = new Error('Duplicate key');
            error.code = '23505';
            db.query.mockRejectedValueOnce(error);

            const res = await request(app)
                .post('/api/v1/enrollments')
                .send({
                    class_id: '123e4567-e89b-12d3-a456-426614174000',
                    student_id: '123e4567-e89b-12d3-a456-426614174001'
                });

            expect(res.statusCode).toBe(400);
            expect(res.body.message).toBe('Already enrolled');
        });
    });

    describe('GET /api/v1/students/me/enrollments', () => {
        it('should return student enrollments', async () => {
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'e1', course_name: 'CS101' }]
            });

            const res = await request(app).get('/api/v1/enrollments/my');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].course_name).toBe('CS101');
        });
    });
});
