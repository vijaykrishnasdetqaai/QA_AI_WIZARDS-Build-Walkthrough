# 🧙 QA_AI_WIZARDS

**Mastering AI, Cloud, DevOps & Software Testing**

A premium 3D tech brand web application built with Next.js, Express, PostgreSQL, and React Three Fiber.

---

## ✨ Features

- 🎨 **3D Futuristic Design** — React Three Fiber hero with animated spheres, particles, and neon lighting
- 🌗 **Dark/Light Mode** — Seamless theme switching with glassmorphism
- 🔐 **JWT Authentication** — Register, login, refresh tokens, role-based access (Admin/User)
- 📝 **Blog System** — CRUD with markdown support, search, categories, and SEO
- 🗺️ **Learning Roadmaps** — AI, Cloud, DevOps, Testing learning paths
- 📱 **Fully Responsive** — Mobile, Tablet, Laptop, Desktop, Ultra-wide
- ♿ **WCAG 2.2 Accessible** — Semantic HTML, ARIA labels, keyboard navigation, focus management
- 🚀 **Production Ready** — Docker, CI/CD, rate limiting, security headers
- 🧪 **Fully Tested** — Jest, Supertest, Cypress E2E

## 📐 Architecture

```
qa-ai-wizards/
├── frontend/               # Next.js 16 + TypeScript + TailwindCSS 4
│   ├── src/
│   │   ├── app/            # 14 pages (App Router)
│   │   ├── components/     # Atomic design (atoms/molecules/organisms)
│   │   └── ...
│   ├── cypress/            # E2E tests
│   └── Dockerfile
├── backend/                # Express + TypeScript + Prisma
│   ├── src/
│   │   ├── modules/        # Auth, Blog, Category, Roadmap, Comment, Admin
│   │   ├── middleware/     # Auth, validation, error handling
│   │   └── config/        # Environment, database
│   ├── prisma/             # Database schema
│   └── Dockerfile
├── docker-compose.yml      # PostgreSQL, Redis, Backend, Frontend
├── .github/workflows/      # CI/CD pipeline
└── docs/                   # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 22+
- npm 10+

### Development

```bash
# Frontend
cd frontend
npm install
npm run dev          # → http://localhost:3000

# Backend
cd backend
npm install
npm run dev          # → http://localhost:4000
```

### Docker

```bash
docker-compose up --build
# Frontend: http://localhost:3000
# Backend:  http://localhost:4000
# API Health: http://localhost:4000/api/v1/health
```

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/auth/register` | ❌ | Register user |
| POST | `/api/v1/auth/login` | ❌ | Login |
| POST | `/api/v1/auth/refresh-token` | ❌ | Refresh JWT |
| POST | `/api/v1/auth/logout` | ✅ | Logout |
| GET | `/api/v1/auth/me` | ✅ | Get profile |
| GET | `/api/v1/blogs` | ❌ | List blogs |
| GET | `/api/v1/blogs/:slug` | ❌ | Get blog |
| POST | `/api/v1/blogs` | ✅ | Create blog |
| PUT | `/api/v1/blogs/:id` | ✅ | Update blog |
| DELETE | `/api/v1/blogs/:id` | ✅ | Delete blog |
| GET | `/api/v1/categories` | ❌ | List categories |
| POST | `/api/v1/categories` | 🔒 | Create category |
| GET | `/api/v1/roadmaps` | ❌ | List roadmaps |
| POST | `/api/v1/comments/:blogId` | ✅ | Add comment |
| POST | `/api/v1/contact` | ❌ | Send message |
| GET | `/api/v1/admin/stats` | 🔒 | Admin stats |
| GET | `/api/v1/admin/users` | 🔒 | List users |

✅ = Authenticated | 🔒 = Admin only

## 📱 Pages

1. Home (3D Hero + Tech Ecosystem)
2. About (Team, Mission, Values)
3. Blog (Search, Filters, Cards)
4. Blog Detail (Article + Comments)
5. Roadmaps (AI, Cloud, DevOps, Testing)
6. Courses (Coming Soon placeholder)
7. Resources (Curated free resources)
8. Community (Channels, Events)
9. Contact (Form + Info)
10. Login / Register
11. Dashboard (Protected — stats, activity)
12. Admin Panel (Protected — user management)
13. 404 Error
14. Privacy Policy
15. Terms & Conditions

## 🧪 Testing

```bash
# Backend unit/integration tests
cd backend && npm test

# Frontend E2E tests
cd frontend && npx cypress open    # Interactive
cd frontend && npx cypress run     # Headless
```

## 🔐 Security

- Helmet security headers
- CORS configuration
- Rate limiting (100 req/15min)
- JWT + Refresh token authentication
- bcrypt password hashing (12 rounds)
- Zod input validation
- SQL injection prevention (Prisma ORM)
- XSS prevention (sanitize-html)
- HTTPS ready
- Environment variables for secrets

## 📊 Performance

- Next.js static + server rendering
- Image optimization (Next/Image)
- Code splitting (dynamic imports)
- Lazy loading (3D scene)
- CDN-ready static assets
- Database indexes on frequently queried fields
- API response pagination

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Next.js | 16.1.6 |
| UI | React | 19.2.3 |
| Styling | TailwindCSS | 4.2.1 |
| 3D | React Three Fiber | Latest |
| Animations | Framer Motion | Latest |
| Backend | Express | 4.x |
| Language | TypeScript | 5.9.3 |
| ORM | Prisma | 6.x |
| Database | PostgreSQL | 16 |
| Cache | Redis | 7 |
| Auth | JWT | jsonwebtoken |
| Testing | Jest, Cypress, Supertest | Latest |
| DevOps | Docker, GitHub Actions | Latest |

## 📄 License

MIT — Free and Open Source
