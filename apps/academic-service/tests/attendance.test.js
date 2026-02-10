const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/db');

// Mock auth middleware
jest.mock('../src/middlewares/auth.middleware', () => ({
    verifyToken: (req, res, next) => {
        req.user = {
            sub: 'test-user-id',
            tenant_id: 'test-tenant-id',
            roles: ['lecturer']
        };
        next();
    }
}));

// Mock DB
jest.mock('../src/config/db', () => ({
    query: jest.fn(),
    connect: jest.fn(),
}));

describe('Attendance Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/classes/:classId/students', () => {
        it('should return list of students in class', async () => {
            db.query.mockResolvedValueOnce({
                rows: [{ id: 's1', name: 'John Doe', student_number: '123' }]
            });

            const res = await request(app).get('/api/v1/classes/cl1/students');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].name).toBe('John Doe');
        });
    });

    describe('GET /api/v1/classes/:classId/attendance', () => {
        it('should return attendance records for class', async () => {
            db.query.mockResolvedValueOnce({
                rows: [{ id: 'a1', student_name: 'John Doe', status: 'hadir' }]
            });

            const res = await request(app).get('/api/v1/classes/cl1/attendance?meeting=1');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].status).toBe('hadir');

            // Verify meeting filter
            const call = db.query.mock.calls[0];
            expect(call[0]).toContain('AND a.meeting_number = $');
        });
    });

    describe('POST /api/v1/attendance/batch', () => {
        it('should record batch attendance', async () => {
            const mockClient = {
                query: jest.fn(),
                release: jest.fn()
            };
            db.connect.mockResolvedValue(mockClient);

            const res = await request(app)
                .post('/api/v1/attendance/batch')
                .send({
                    class_id: 'cl1',
                    meeting_number: 1,
                    attendances: [
                        { student_id: 's1', status: 'hadir' },
                        { student_id: 's2', status: 'sakit' }
                    ]
                });

            expect(res.statusCode).toBe(200);
            expect(mockClient.query).toHaveBeenCalledWith('BEGIN');
            expect(mockClient.query).toHaveBeenCalledTimes(4); // BEGIN, INSERT s1, INSERT s2, COMMIT
            expect(mockClient.release).toHaveBeenCalled();
        });

        it('should rollback on error', async () => {
            const mockClient = {
                query: jest.fn(),
                release: jest.fn()
            };
            db.connect.mockResolvedValue(mockClient);
            mockClient.query.mockRejectedValueOnce(new Error('DB Error'));

            const res = await request(app)
                .post('/api/v1/attendance/batch')
                .send({
                    class_id: 'cl1',
                    meeting_number: 1,
                    attendances: [{ student_id: 's1', status: 'hadir' }]
                });

            // Depending on where error happens, it might be 500.
            // But since we mocked query to fail immediately (on BEGIN likely if it's the first call, or inside loop),
            // let's adjust mock implementation to fail on second query (INSERT)

            // Re-mock for specific sequence
            mockClient.query
                .mockResolvedValueOnce() // BEGIN
                .mockRejectedValueOnce(new Error('DB Error')); // INSERT

            const res2 = await request(app)
                .post('/api/v1/attendance/batch')
                .send({
                    class_id: 'cl1',
                    meeting_number: 1,
                    attendances: [{ student_id: 's1', status: 'hadir' }]
                });

            expect(mockClient.query).toHaveBeenCalledWith('ROLLBACK');
        });
    });
});
