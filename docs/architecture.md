# Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENTS                              │
│  Mobile │ Tablet │ Laptop │ Desktop │ Ultra-wide         │
└─────────────────────┬───────────────────────────────────┘
                      │ HTTPS
┌─────────────────────▼───────────────────────────────────┐
│              FRONTEND (Next.js 16)                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│  │  Pages   │ │Components│ │  Hooks   │ │  3D Scene  │ │
│  │ (14 pgs) │ │ (Atomic) │ │ (Auth,   │ │ (R3F +     │ │
│  │ App      │ │ Atoms    │ │  Theme,  │ │  Three.js) │ │
│  │ Router   │ │ Molecules│ │  Search) │ │            │ │
│  │          │ │ Organisms│ │          │ │            │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘ │
│  Port 3000                                               │
└─────────────────────┬───────────────────────────────────┘
                      │ REST /api/v1/*
┌─────────────────────▼───────────────────────────────────┐
│              BACKEND (Express + TypeScript)               │
│  ┌──────────────────────────────────────────────────┐   │
│  │              MIDDLEWARE LAYER                     │   │
│  │  Helmet │ CORS │ Rate Limit │ Auth │ Validation  │   │
│  └──────────────────────┬───────────────────────────┘   │
│  ┌──────────────────────▼───────────────────────────┐   │
│  │              MODULE LAYER                         │   │
│  │  Auth │ Blog │ Category │ Roadmap │ Admin        │   │
│  │  Comment │ Contact │ Analytics                    │   │
│  │  [Controller → Service → Repository]              │   │
│  └──────────────────────┬───────────────────────────┘   │
│  Port 4000              │                                │
└─────────────────────────┼───────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼                               ▼
┌──────────────────┐          ┌──────────────────┐
│   PostgreSQL 16  │          │    Redis 7       │
│   Primary DB     │          │    Cache Layer   │
│   - Users        │          │    - Sessions    │
│   - Blogs        │          │    - API Cache   │
│   - Categories   │          │                  │
│   - Roadmaps     │          │                  │
│   - Comments     │          │                  │
│   - Notifications│          │                  │
│   - Analytics    │          │                  │
└──────────────────┘          └──────────────────┘
```

## Design Patterns

| Pattern | Usage |
|---------|-------|
| **Atomic Design** | Frontend components: Atoms → Molecules → Organisms → Templates |
| **Clean Architecture** | Backend: Controller → Service → Repository (Prisma) |
| **SOLID** | Single responsibility per module, interfaces for services |
| **Repository Pattern** | Prisma client abstracts database layer |
| **Middleware Chain** | Express middleware for cross-cutting concerns |
| **JWT + Refresh** | Short-lived access tokens + long-lived refresh tokens |
| **API Versioning** | All routes under `/api/v1/` for backward compatibility |

## Data Flow

1. **Client** sends request to Next.js
2. **Next.js** handles SSR/SSG or proxies API calls
3. **Express** validates input via Zod, authenticates via JWT
4. **Service** contains business logic
5. **Prisma** executes database operations
6. **Response** flows back through middleware (error handling, response formatting)
