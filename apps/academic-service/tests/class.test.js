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
    },
    isAdmin: (req, res, next) => {
        if (!req.user || !req.user.roles || !req.user.roles.includes('admin')) {
            return res.status(403).json({ status: 'fail', message: 'Admin access required' });
        }
        next();
    }
}));

// Mock Prisma
jest.mock('../src/lib/prisma', () => ({
    classes: {
        findMany: jest.fn(),
        count: jest.fn(),
        findFirst: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    },
    $transaction: jest.fn((promises) => Promise.all(promises))
}));

describe('Class Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/classes', () => {
        it('should return paginated list of classes with course and lecturer info', async () => {
            prisma.classes.findMany.mockResolvedValue([
                {
                    id: 'cl1',
                    semester: '2023-1',
                    courses: { name: 'Intro to CS', code: 'CS100', credits: 3 },
                    lecturers: { name: 'Dr. John' }
                }
            ]);
            prisma.classes.count.mockResolvedValue(1);

            const res = await request(app).get('/api/v1/classes');

            expect(res.statusCode).toBe(200);
            expect(res.body.data[0].course_name).toBe('Intro to CS');
            expect(res.body.data[0].lecturer_name).toBe('Dr. John');
        });
    });

    describe('POST /api/v1/classes', () => {
        it('should create a new class', async () => {
            prisma.classes.create.mockResolvedValue({
                id: 'cl1', course_id: 'c1', semester: '2023-1'
            });

            const res = await request(app)
                .post('/api/v1/classes')
                .send({
                    course_id: '123e4567-e89b-12d3-a456-426614174000',
                    semester: '2023-1',
                    year: 2023
                });

            expect(res.statusCode).toBe(201);
        });
    });

    describe('PUT /api/v1/classes/:id', () => {
        it('should update class details', async () => {
            prisma.classes.findFirst.mockResolvedValue({ id: 'cl1' });
            prisma.classes.update.mockResolvedValue({
                id: 'cl1', capacity: 50
            });

            const res = await request(app)
                .put('/api/v1/classes/cl1')
                .send({
                    capacity: 50
                });

            expect(res.statusCode).toBe(200);
            expect(res.body.data.capacity).toBe(50);
        });
    });

    describe('DELETE /api/v1/classes/:id', () => {
        it('should delete a class', async () => {
            prisma.classes.findFirst.mockResolvedValue({ id: 'cl1' });
            prisma.classes.delete.mockResolvedValue({ id: 'cl1' });

            const res = await request(app).delete('/api/v1/classes/cl1');

            expect(res.statusCode).toBe(200);
        });

        it('should return 404 if class not found', async () => {
            prisma.classes.findFirst.mockResolvedValue(null);

            const res = await request(app).delete('/api/v1/classes/cl999');

            expect(res.statusCode).toBe(404);
        });
    });
});
