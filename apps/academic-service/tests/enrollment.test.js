const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/lib/prisma');

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

// Mock Prisma
jest.mock('../src/lib/prisma', () => {
    const mockPrisma = {
        classes: {
            findMany: jest.fn(),
            count: jest.fn(),
        },
        enrollments: {
            create: jest.fn(),
            findMany: jest.fn(),
            findFirst: jest.fn(),
        }
    };
    mockPrisma.$transaction = jest.fn((arg) => {
        if (Array.isArray(arg)) return Promise.all(arg);
        return arg(mockPrisma);
    });
    return mockPrisma;
});

describe('Enrollment Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/classes (Filtering)', () => {
        it('should filter classes by semester and year', async () => {
            prisma.classes.count.mockResolvedValue(1);
            prisma.classes.findMany.mockResolvedValue([
                {
                    id: 'cl1', semester: 'GANJIL', year: 2023,
                    course: { name: 'CS101', code: 'CS101', credits: 3 },
                    lecturer: { name: 'Dr. John' }
                }
            ]);

            const res = await request(app).get('/api/v1/classes?semester=GANJIL&year=2023');

            expect(res.statusCode).toBe(200);

            const findManyArgs = prisma.classes.findMany.mock.calls[0][0];
            const where = findManyArgs.where;

            expect(where.semester).toBe('GANJIL');
            expect(String(where.year)).toBe('2023');
        });
    });

    describe('POST /api/v1/enrollments', () => {
        it('should enroll a student in a class', async () => {
            // Mock enrollment existence check
            prisma.enrollments.findFirst.mockResolvedValue(null);
            // Mock enrollment create
            prisma.enrollments.create.mockResolvedValue({
                id: 'e1', class_id: 'cl1', student_id: 's1', status: 'enrolled'
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
            prisma.enrollments.findFirst.mockResolvedValue({ id: 'e1' });

            const res = await request(app)
                .post('/api/v1/enrollments')
                .send({
                    class_id: '123e4567-e89b-12d3-a456-426614174000',
                    student_id: '123e4567-e89b-12d3-a456-426614174001'
                });

            expect(res.statusCode).toBe(400);
            expect(res.body.message).toMatch(/Already enrolled/i);
        });
    });

    describe('GET /api/v1/students/me/enrollments', () => {
        it('should return student enrollments', async () => {
            prisma.enrollments.findMany.mockResolvedValue([
                {
                    id: 'e1',
                    class: {
                        course: { name: 'CS101' }
                    }
                }
            ]);

            const res = await request(app).get('/api/v1/enrollments/my');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].course_name).toBe('CS101');
        });
    });
});
