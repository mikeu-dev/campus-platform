const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/lib/prisma');

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

// Mock Prisma
jest.mock('../src/lib/prisma', () => {
    const mockPrisma = {
        classes: {
            findUnique: jest.fn(),
        },
        students: {
            findMany: jest.fn(),
        },
        enrollments: {
            findMany: jest.fn(),
        },
        attendances: {
            findMany: jest.fn(),
            upsert: jest.fn(),
        }
    };
    mockPrisma.$transaction = jest.fn((arg) => {
        if (Array.isArray(arg)) return Promise.all(arg);
        return arg(mockPrisma);
    });
    return mockPrisma;
});

describe('Attendance Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/classes/:classId/students', () => {
        it('should return list of students in class', async () => {
            prisma.enrollments.findMany.mockResolvedValue([
                {
                    students: { id: 's1', name: 'John Doe', platform_student_number: '123' }
                }
            ]);

            const res = await request(app).get('/api/v1/classes/cl1/students');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].name).toBe('John Doe');
        });
    });

    describe('GET /api/v1/classes/:classId/attendance', () => {
        it('should return attendance records for class', async () => {
            prisma.attendances.findMany.mockResolvedValue([
                {
                    id: 'a1',
                    status: 'hadir',
                    students: { name: 'John Doe', platform_student_number: '123' }
                }
            ]);

            const res = await request(app).get('/api/v1/classes/cl1/attendance?meeting=1');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].status).toBe('hadir');

            const findManyArgs = prisma.attendances.findMany.mock.calls[0][0];
            expect(findManyArgs.where.meeting_number).toBeDefined();
        });
    });

    describe('POST /api/v1/attendance/batch', () => {
        it('should record batch attendance', async () => {
            // Mock transaction to return something
            prisma.$transaction.mockImplementation(async (arg) => {
                if (Array.isArray(arg)) return Promise.all(arg);
                await arg(prisma);
                return [{ id: 'a1' }, { id: 'a2' }];
            });
            prisma.attendances.upsert.mockResolvedValue({ id: 'a1' });

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
            expect(prisma.$transaction).toHaveBeenCalled();
            expect(prisma.attendances.upsert).toHaveBeenCalledTimes(2);
        });

        it('should handle errors in transaction', async () => {
            prisma.$transaction.mockRejectedValue(new Error('DB Error'));

            const res = await request(app)
                .post('/api/v1/attendance/batch')
                .send({
                    class_id: 'cl1',
                    meeting_number: 1,
                    attendances: [{ student_id: 's1', status: 'hadir' }]
                });

            expect(res.statusCode).toBe(500);
        });
    });
});
