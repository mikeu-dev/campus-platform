const request = require('supertest');
const app = require('../src/app');
const prisma = require('../src/lib/prisma');

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

// Mock Prisma
jest.mock('../src/lib/prisma', () => {
    const mockPrisma = {
        lecturers: {
            findMany: jest.fn(),
            count: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        }
    };
    mockPrisma.$transaction = jest.fn((arg) => {
        if (Array.isArray(arg)) return Promise.all(arg);
        return arg(mockPrisma);
    });
    return mockPrisma;
});

describe('Lecturer Management API', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET /api/v1/lecturers', () => {
        it('should return paginated list of lecturers', async () => {
            prisma.lecturers.count.mockResolvedValue(1);
            prisma.lecturers.findMany.mockResolvedValue([
                { id: 'l1', name: 'Lecturer 1', platform_lecturer_number: 'NIDN1' }
            ]);

            const res = await request(app).get('/api/v1/lecturers');

            expect(res.statusCode).toBe(200);
            expect(res.body.status).toBe('success');
            expect(res.body.data).toHaveLength(1);
            expect(res.body.meta).toBeDefined();
        });

        it('should filter lecturers by search term', async () => {
            prisma.lecturers.count.mockResolvedValue(1);
            prisma.lecturers.findMany.mockResolvedValue([
                { id: 'l1', name: 'Lecturer 1' }
            ]);

            const res = await request(app).get('/api/v1/lecturers?search=Lecturer');

            expect(res.statusCode).toBe(200);

            // Verify findMany was called with search term
            const findManyArgs = prisma.lecturers.findMany.mock.calls[0][0];
            expect(JSON.stringify(findManyArgs.where)).toContain('contains');
            expect(JSON.stringify(findManyArgs.where)).toContain('Lecturer');
        });
    });

    describe('POST /api/v1/lecturers', () => {
        it('should create a new lecturer', async () => {
            prisma.lecturers.create.mockResolvedValue({
                id: 'l2', name: 'New Lecturer', platform_lecturer_number: 'NIDN2'
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
            prisma.lecturers.findFirst.mockResolvedValue({ id: 'l1' });
            prisma.lecturers.update.mockResolvedValue({
                id: 'l1', name: 'Updated Name', platform_lecturer_number: 'NIDN1'
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
            prisma.lecturers.findFirst.mockResolvedValue(null);

            const res = await request(app)
                .put('/api/v1/lecturers/l999')
                .send({ name: 'Updated Name' });

            expect(res.statusCode).toBe(404);
        });
    });

    describe('DELETE /api/v1/lecturers/:id', () => {
        it('should delete a lecturer', async () => {
            prisma.lecturers.findFirst.mockResolvedValue({ id: 'l1' });
            prisma.lecturers.delete.mockResolvedValue({ id: 'l1' });

            const res = await request(app).delete('/api/v1/lecturers/l1');

            expect(res.statusCode).toBe(200);
            expect(res.body.message).toBe('Lecturer deleted successfully');
        });

        it('should return 404 if lecturer not found', async () => {
            prisma.lecturers.findFirst.mockResolvedValue(null);

            const res = await request(app).delete('/api/v1/lecturers/l999');

            expect(res.statusCode).toBe(404);
        });
    });
});
