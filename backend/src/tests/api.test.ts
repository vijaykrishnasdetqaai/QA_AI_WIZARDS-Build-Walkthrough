import request from 'supertest';
import app from '../app';

describe('Health Check', () => {
    it('should return health status', async () => {
        const res = await request(app).get('/api/v1/health');
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('ok');
        expect(res.body).toHaveProperty('timestamp');
        expect(res.body).toHaveProperty('version');
    });
});

describe('Auth Routes', () => {
    describe('POST /api/v1/auth/register', () => {
        it('should validate registration input', async () => {
            const res = await request(app)
                .post('/api/v1/auth/register')
                .send({ email: 'invalid', password: '123' });
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Validation failed');
        });

        it('should reject missing fields', async () => {
            const res = await request(app)
                .post('/api/v1/auth/register')
                .send({});
            expect(res.status).toBe(400);
        });
    });

    describe('POST /api/v1/auth/login', () => {
        it('should validate login input', async () => {
            const res = await request(app)
                .post('/api/v1/auth/login')
                .send({ email: 'invalid' });
            expect(res.status).toBe(400);
        });
    });
});

describe('Blog Routes', () => {
    describe('POST /api/v1/blogs', () => {
        it('should require authentication', async () => {
            const res = await request(app)
                .post('/api/v1/blogs')
                .send({ title: 'Test', content: 'Test content' });
            expect(res.status).toBe(401);
        });

        it('should reject invalid token', async () => {
            const res = await request(app)
                .post('/api/v1/blogs')
                .set('Authorization', 'Bearer invalid-token')
                .send({ title: 'Test', content: 'Test content' });
            expect(res.status).toBe(401);
        });
    });
});

describe('404 Handler', () => {
    it('should return 404 for unknown routes', async () => {
        const res = await request(app).get('/api/v1/nonexistent');
        expect(res.status).toBe(404);
        expect(res.body.error).toBe('Route not found');
    });
});

describe('Rate Limiting', () => {
    it('should include rate limit headers', async () => {
        const res = await request(app).get('/api/v1/health');
        expect(res.headers).toHaveProperty('ratelimit-limit');
    });
});
