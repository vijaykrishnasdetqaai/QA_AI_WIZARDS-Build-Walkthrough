# Testing Checklist

## Backend Tests (Jest + Supertest)

- [x] Health check endpoint returns 200
- [x] Registration validates input (email, password strength)
- [x] Login validates input
- [x] Blog creation requires authentication
- [x] Invalid JWT tokens are rejected
- [x] Unknown routes return 404
- [x] Rate limit headers are present
- [ ] Full registration → login → profile flow
- [ ] Blog CRUD operations with valid JWT
- [ ] Role-based access (admin vs user)
- [ ] Comment creation and deletion
- [ ] Category CRUD (admin only)
- [ ] Refresh token rotation

## Frontend E2E Tests (Cypress)

- [x] Home page loads with 3D hero
- [x] All 14 pages navigate correctly
- [x] 404 page for non-existent routes
- [x] Responsive on 5 viewports (375px → 2560px)
- [x] Mobile hamburger menu works
- [x] Login form fields and validation
- [x] Register form fields and validation
- [x] Password visibility toggle
- [x] Login ↔ Register navigation
- [x] Blog search functionality
- [x] Blog category filter
- [x] Contact form submission
- [x] Skip-to-content accessibility link
- [x] ARIA labels on navigation
- [x] Heading hierarchy (h1 present)
- [x] Form label associations

## Device Testing Matrix

| Device | Viewport | Status |
|--------|----------|--------|
| Mobile (iPhone) | 375×812 | ✅ Tested in Cypress |
| Tablet (iPad) | 768×1024 | ✅ Tested in Cypress |
| Laptop | 1280×720 | ✅ Tested in Cypress |
| Desktop | 1920×1080 | ✅ Tested in Cypress |
| Ultra-wide | 2560×1440 | ✅ Tested in Cypress |
| iOS Safari | Manual | 🔲 Pending |
| Android Chrome | Manual | 🔲 Pending |
