const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/lib/prisma');

// Mock auth middleware
jest.mock('../src/middlewares/auth.middleware', () => ({
    verifyToken: (req, res, next) => {
        req.user = {
            sub: 'test-user-id',
            tenant_id: 'test-tenant-id',
            roles: ['student', 'admin']
        };
        next();
    },
    isAdmin: (req, res, next) => {
        if (!req.user || !req.user.roles || !req.user.roles.includes('admin')) {
            return res.status(403).json({ status: 'fail', message: 'Admin access required' });
        }
        next();
    }
}));

// Mock Prisma
jest.mock('../src/lib/prisma', () => {
    const mockModel = () => ({
        findUnique: jest.fn(),
        findFirst: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        upsert: jest.fn(),
        count: jest.fn(),
    });

    const mockPrisma = {
        students: mockModel(),
        student_profiles: mockModel(),
    };
    mockPrisma.$transaction = jest.fn((arg) => {
        if (Array.isArray(arg)) return Promise.all(arg);
        return arg(mockPrisma);
    });
    return mockPrisma;
});

describe('Student Profile API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/students/me/profile', () => {
        it('should return student profile', async () => {
            // Mock student finds
            prisma.students.findFirst.mockResolvedValue({ id: 'student-id', name: 'Test Student' });
            prisma.students.findUnique.mockResolvedValue({ id: 'student-id', name: 'Test Student' });

            // Mock profile find
            prisma.student_profiles.findFirst.mockResolvedValue({ phone_1: '08123456789' });

            const res = await request(app).get('/api/v1/students/me/profile');

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('success');
            expect(res.body.data.name).toBe('Test Student');
            expect(res.body.data.phone_1).toBe('08123456789');
        });

        it('should return 404 if student not found', async () => {
            prisma.students.findFirst.mockResolvedValue(null);

            const res = await request(app).get('/api/v1/students/me/profile');

            expect(res.statusCode).toBe(404);
        });
    });

    describe('PUT /api/v1/students/me/profile', () => {
        it('should update profile', async () => {
            // Mock student find
            const studentMock = { id: 'student-id', name: 'Test Student' };
            prisma.students.findFirst.mockResolvedValue(studentMock);
            prisma.students.findUnique.mockResolvedValue(studentMock);

            // Transaction Mocks
            prisma.students.update.mockResolvedValue(studentMock);

            prisma.student_profiles.findFirst.mockResolvedValue({ id: 'profile-id' }); // Existing profile
            prisma.student_profiles.update.mockResolvedValue({ id: 'profile-id', phone_1: '08123456789' });

            const res = await request(app)
                .put('/api/v1/students/me/profile')
                .send({
                    phone_1: '08123456789',
                });

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('success');
        });
    });

    describe('Admin Routes', () => {
        describe('GET /api/v1/students', () => {
            it('should return list of students', async () => {
                prisma.students.count.mockResolvedValue(1);
                prisma.students.findMany.mockResolvedValue([
                    { id: 's1', name: 'Student 1' }
                ]);

                const res = await request(app).get('/api/v1/students');
                expect(res.statusCode).toBe(200);
                expect(res.body.data).toHaveLength(1);
            });

            it('should filter students by status', async () => {
                prisma.students.count.mockResolvedValue(1);
                prisma.students.findMany.mockResolvedValue([
                    { id: 's1', name: 'Student 1', status: 'active' }
                ]);

                const res = await request(app).get('/api/v1/students?status=active');
                expect(res.statusCode).toBe(200);

                const findManyArgs = prisma.students.findMany.mock.calls[0][0];
                expect(findManyArgs.where.status).toBe('active');
            });
        });

        describe('DELETE /api/v1/students/:id', () => {
            it('should delete student by id', async () => {
                prisma.students.findFirst.mockResolvedValue({ id: 's1' });
                prisma.students.delete.mockResolvedValue({ id: 's1' });

                const res = await request(app).delete('/api/v1/students/s1');
                expect(res.statusCode).toBe(200);
                expect(res.body.message).toBe('Student deleted successfully');
            });
        });

        describe('GET /api/v1/students/:id/profile', () => {
            it('should return student profile by id', async () => {
                prisma.students.findFirst.mockResolvedValue({ id: 's1', name: 'Student 1' });
                prisma.student_profiles.findFirst.mockResolvedValue({ phone_1: '123' });

                const res = await request(app).get('/api/v1/students/s1/profile');
                expect(res.statusCode).toBe(200);
                expect(res.body.data.name).toBe('Student 1');
            });
        });

        describe('PUT /api/v1/students/:id/profile', () => {
            it('should update student profile by id', async () => {
                const studentMock = { id: 's1', name: 'Student 1' };
                // Ensure findFirst AND findUnique return student
                prisma.students.findFirst.mockResolvedValue(studentMock);
                prisma.students.findUnique.mockResolvedValue(studentMock);

                prisma.students.update.mockResolvedValue(studentMock);

                prisma.student_profiles.findFirst.mockResolvedValue(null); // No existing profile
                prisma.student_profiles.create.mockResolvedValue({ id: 'p1', phone_1: '999' });

                const res = await request(app)
                    .put('/api/v1/students/s1/profile')
                    .send({ phone_1: '999' });

                expect(res.statusCode).toBe(200);
                expect(res.body.status).toBe('success');
            });
        });
    });
});
