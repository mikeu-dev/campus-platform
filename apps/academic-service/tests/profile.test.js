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

describe('Student Profile API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/students/me/profile', () => {
        it('should return student profile', async () => {
            // Mock student find
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'student-id', name: 'Test Student' }]
            });
            // Mock profile find
            db.query.mockResolvedValueOnce({
                rows: [{ phone_1: '08123456789' }]
            });

            const res = await request(app).get('/api/v1/students/me/profile');

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('success');
            expect(res.body.data.name).toBe('Test Student');
            expect(res.body.data.phone_1).toBe('08123456789');
        });

        it('should return 404 if student not found', async () => {
            db.query.mockResolvedValueOnce({
                rows: []
            });

            const res = await request(app).get('/api/v1/students/me/profile');

            expect(res.statusCode).toBe(404);
        });
    });

    describe('PUT /api/v1/students/me/profile', () => {
        it('should update profile', async () => {
            // Mock student find
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'student-id' }]
            });

            // Mock profile check (exists)
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'profile-id' }]
            });

            // Mock update
            db.query.mockResolvedValueOnce({
                rows: [{ phone_1: '08123456789' }]
            });

            // Mock fresh student Select
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'student-id' }]
            });

            // Mock fresh profile Select
            db.query.mockResolvedValueOnce({
                rows: [{ phone_1: '08123456789' }]
            });

            const res = await request(app)
                .put('/api/v1/students/me/profile')
                .send({
                    phone_1: '08123456789',
                    father_religion: 'Islam',
                    mother_address: 'Jl. Merdeka No. 1'
                });

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('success');
        });
    });

    describe('Admin Routes', () => {
        describe('GET /api/v1/students', () => {
            it('should return list of students', async () => {
                db.query.mockResolvedValueOnce({ rows: [{ count: 1 }] }); // Count
                db.query.mockResolvedValueOnce({ rows: [{ id: 's1', name: 'Student 1' }] }); // Data

                const res = await request(app).get('/api/v1/students');
                expect(res.statusCode).toBe(200);
                expect(res.body.data).toHaveLength(1);
            });
        });

        describe('GET /api/v1/students/:id/profile', () => {
            it('should return student profile by id', async () => {
                db.query.mockResolvedValueOnce({ rows: [{ id: 's1', name: 'Student 1' }] }); // Student
                db.query.mockResolvedValueOnce({ rows: [{ phone_1: '123' }] }); // Profile

                const res = await request(app).get('/api/v1/students/s1/profile');
                expect(res.statusCode).toBe(200);
                expect(res.body.data.name).toBe('Student 1');
            });

            it('should return 404 if student not found', async () => {
                db.query.mockResolvedValueOnce({ rows: [] }); // Student

                const res = await request(app).get('/api/v1/students/s1/profile');
                expect(res.statusCode).toBe(404);
            });
        });

        describe('PUT /api/v1/students/:id/profile', () => {
            it('should update student profile by id', async () => {
                db.query.mockResolvedValueOnce({ rows: [{ id: 's1' }] }); // Verify student
                db.query.mockResolvedValueOnce({ rows: [] }); // Check profile (not exists)
                db.query.mockResolvedValueOnce({ rows: [{ id: 'p1' }] }); // Insert profile
                db.query.mockResolvedValueOnce({ rows: [{ id: 's1' }] }); // Fresh student
                db.query.mockResolvedValueOnce({ rows: [{ id: 'p1', phone_1: '999' }] }); // Fresh profile

                const res = await request(app)
                    .put('/api/v1/students/s1/profile')
                    .send({ phone_1: '999' });

                expect(res.statusCode).toBe(200);
                expect(res.body.status).toBe('success');
            });
        });
    });
});
