# Deployment Guide

## Option 1: Docker (Recommended)

### Prerequisites
- Docker & Docker Compose installed
- At least 2GB RAM available

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/qa-ai-wizards.git
cd qa-ai-wizards

# 2. Set environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with production secrets

# 3. Start all services
docker-compose up -d --build

# 4. Run database migrations
docker exec qa_wizards_api npx prisma migrate deploy

# 5. Verify
curl http://localhost:4000/api/v1/health
# Open http://localhost:3000
```

## Option 2: Manual Deployment

### Backend

```bash
cd backend
npm ci --production
npx prisma generate
npx prisma migrate deploy
npm run build
NODE_ENV=production node dist/server.js
```

### Frontend

```bash
cd frontend
npm ci
npm run build
npm start
```

## Option 3: Cloud Platforms

### Vercel (Frontend)
1. Connect GitHub repo to Vercel
2. Set root directory to `frontend`
3. Set `NEXT_PUBLIC_API_URL` environment variable
4. Deploy

### Railway / Render (Backend)
1. Connect GitHub repo
2. Set root directory to `backend`
3. Add PostgreSQL and Redis addons
4. Set environment variables (DATABASE_URL, JWT_SECRET, etc.)
5. Deploy

### AWS (Full Stack)
1. ECR → Push Docker images
2. ECS/Fargate → Run containers
3. RDS → PostgreSQL
4. ElastiCache → Redis
5. ALB → Load balancer
6. Route 53 → DNS
7. CloudFront → CDN

## Environment Variables Required

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `REDIS_URL` | Redis connection string | `redis://host:6379` |
| `JWT_SECRET` | JWT signing secret (min 32 chars) | Random string |
| `JWT_REFRESH_SECRET` | Refresh token secret | Random string |
| `FRONTEND_URL` | Frontend URL for CORS | `https://qaawizards.com` |
| `NODE_ENV` | Environment | `production` |
| `NEXT_PUBLIC_API_URL` | API URL for frontend | `https://api.qaawizards.com/api/v1` |
