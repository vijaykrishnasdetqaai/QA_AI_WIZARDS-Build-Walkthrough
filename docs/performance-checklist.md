# Performance Checklist

## ✅ Implemented

- [x] **Static Generation** — Next.js SSG for non-dynamic pages
- [x] **Code Splitting** — Dynamic imports for 3D hero (React Three Fiber)
- [x] **Tree Shaking** — Only importing used Lucide icons
- [x] **Font Optimization** — Google Fonts via next/font (no layout shift)
- [x] **Database Indexes** — On frequently queried fields (slug, status, authorId)
- [x] **API Pagination** — All list endpoints paginated (default 10, max 50)
- [x] **Image Placeholders** — Gradient placeholders while loading
- [x] **Skeleton Components** — Glass-card based loading states
- [x] **Minimal Bundle** — Component-based architecture reduces bundle size
- [x] **DPR Optimization** — Canvas DPR capped at 1.5 for 3D performance

## 🔲 Production Recommendations

- [ ] Enable CDN for static assets (Vercel, CloudFront, Cloudflare)
- [ ] Configure Redis caching for API responses
- [ ] Enable Next.js Image Optimization in production
- [ ] Add service worker for offline support
- [ ] Implement stale-while-revalidate caching strategy
- [ ] Configure gzip/brotli compression
- [ ] Add resource hints (preconnect, prefetch, preload)
- [ ] Monitor with Lighthouse CI in pipeline
- [ ] Set up APM (Application Performance Monitoring)
- [ ] Database connection pooling with PgBouncer
