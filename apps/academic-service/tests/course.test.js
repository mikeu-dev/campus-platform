const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/lib/prisma');

// Mock auth middleware
jest.mock('../src/middlewares/auth.middleware', () => ({
    verifyToken: (req, res, next) => {
        req.user = {
            sub: 'test-user-id',
            tenant_id: 'test-tenant-id',
            roles: ['admin']
        };
        next();
    }
}));

// Mock Prisma
jest.mock('../src/lib/prisma', () => {
    const mockPrisma = {
        courses: {
            findMany: jest.fn(),
            count: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findFirst: jest.fn(), // Added findFirst
        }
    };
    mockPrisma.$transaction = jest.fn((arg) => {
        if (Array.isArray(arg)) return Promise.all(arg);
        return arg(mockPrisma);
    });
    return mockPrisma;
});

describe('Course Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/courses', () => {
        it('should return paginated list of courses', async () => {
            prisma.courses.count.mockResolvedValue(1);
            prisma.courses.findMany.mockResolvedValue([
                { id: 'c1', code: 'CS101', name: 'Intro to CS', credits: 3 }
            ]);

            const res = await request(app).get('/api/v1/courses');

            expect(res.statusCode).toBe(200);
            expect(res.body.data).toHaveLength(1);
        });
    });

    describe('POST /api/v1/courses', () => {
        it('should create a new course', async () => {
            prisma.courses.create.mockResolvedValue({
                id: 'c2', code: 'CS102', name: 'Data Structures', credits: 4
            });

            const res = await request(app)
                .post('/api/v1/courses')
                .send({
                    code: 'CS102',
                    name: 'Data Structures',
                    credits: 4
                });

            expect(res.statusCode).toBe(201);
            expect(res.body.data.code).toBe('CS102');
        });
    });

    describe('PUT /api/v1/courses/:id', () => {
        it('should update course details', async () => {
            prisma.courses.findFirst.mockResolvedValue({ id: 'c1' }); // Mock verification
            prisma.courses.update.mockResolvedValue({
                id: 'c1', code: 'CS101', name: 'Intro to CS Updated', credits: 3
            });

            const res = await request(app)
                .put('/api/v1/courses/c1')
                .send({
                    name: 'Intro to CS Updated'
                });

            if (res.statusCode !== 200) console.error(res.error);
            expect(res.statusCode).toBe(200);
            expect(res.body.data.name).toBe('Intro to CS Updated');
        });

        it('should return 404 if course not found', async () => {
            prisma.courses.findFirst.mockResolvedValue(null);

            const res = await request(app)
                .put('/api/v1/courses/c999')
                .send({ name: 'Updated Name' });

            expect(res.statusCode).toBe(404);
        });
    });

    describe('DELETE /api/v1/courses/:id', () => {
        it('should delete a course', async () => {
            prisma.courses.findFirst.mockResolvedValue({ id: 'c1' }); // Mock verification
            prisma.courses.delete.mockResolvedValue({ id: 'c1' });

            const res = await request(app).delete('/api/v1/courses/c1');

            if (res.statusCode !== 200) console.error(res.error);
            expect(res.statusCode).toBe(200);
            expect(res.body.message).toBe('Course deleted successfully');
        });

        it('should return 404 if course not found', async () => {
            prisma.courses.findFirst.mockResolvedValue(null);

            const res = await request(app).delete('/api/v1/courses/c999');

            expect(res.statusCode).toBe(404);
        });
    });
});
