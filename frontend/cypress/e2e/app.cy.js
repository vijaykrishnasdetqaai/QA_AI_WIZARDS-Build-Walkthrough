describe('QA_AI_WIZARDS E2E Tests', () => {
    // ===========================
    // Navigation & Responsiveness
    // ===========================
    describe('Navigation', () => {
        it('should load the home page with 3D hero', () => {
            cy.visit('/');
            cy.contains('Master the Future of').should('be.visible');
            cy.contains('Technology').should('be.visible');
            cy.contains('Explore Roadmaps').should('be.visible');
            cy.contains('Join Community').should('be.visible');
        });

        it('should navigate to all main pages', () => {
            const pages = [
                { path: '/about', heading: 'QA_AI_WIZARDS' },
                { path: '/blog', heading: 'Insights' },
                { path: '/roadmaps', heading: 'Mastery' },
                { path: '/courses', heading: 'Courses' },
                { path: '/resources', heading: 'Resources' },
                { path: '/community', heading: 'Community' },
                { path: '/contact', heading: 'Contact' },
                { path: '/login', heading: 'Welcome Back' },
                { path: '/register', heading: 'Create Account' },
                { path: '/privacy-policy', heading: 'Privacy' },
                { path: '/terms', heading: 'Terms' },
            ];

            pages.forEach(({ path, heading }) => {
                cy.visit(path);
                cy.contains(heading).should('be.visible');
            });
        });

        it('should show 404 for non-existent routes', () => {
            cy.visit('/non-existent-page', { failOnStatusCode: false });
            cy.contains('404').should('be.visible');
            cy.contains('Page Not Found').should('be.visible');
        });
    });

    // ===========================
    // Responsive Design
    // ===========================
    describe('Responsive Design', () => {
        const viewports = [
            { name: 'Mobile', width: 375, height: 812 },
            { name: 'Tablet', width: 768, height: 1024 },
            { name: 'Laptop', width: 1280, height: 720 },
            { name: 'Desktop', width: 1920, height: 1080 },
            { name: 'Ultra-wide', width: 2560, height: 1440 },
        ];

        viewports.forEach(({ name, width, height }) => {
            it(`should render correctly on ${name} (${width}x${height})`, () => {
                cy.viewport(width, height);
                cy.visit('/');
                cy.contains('Master the Future of').should('be.visible');
                cy.get('nav').should('be.visible');
            });
        });

        it('should show mobile menu on small screens', () => {
            cy.viewport(375, 812);
            cy.visit('/');
            cy.get('[aria-label="Open menu"]').should('be.visible').click();
            cy.contains('Home').should('be.visible');
            cy.contains('About').should('be.visible');
            cy.contains('Blog').should('be.visible');
        });
    });

    // ===========================
    // Auth Flow
    // ===========================
    describe('Authentication Flow', () => {
        it('should show login form with all fields', () => {
            cy.visit('/login');
            cy.get('#login-email').should('be.visible');
            cy.get('#login-password').should('be.visible');
            cy.contains('Sign In').should('be.visible');
            cy.contains('Forgot password?').should('be.visible');
        });

        it('should show register form with all fields', () => {
            cy.visit('/register');
            cy.get('#reg-first').should('be.visible');
            cy.get('#reg-last').should('be.visible');
            cy.get('#reg-email').should('be.visible');
            cy.get('#reg-password').should('be.visible');
            cy.get('#reg-confirm').should('be.visible');
            cy.contains('Create Account').should('be.visible');
        });

        it('should toggle password visibility', () => {
            cy.visit('/login');
            cy.get('#login-password').should('have.attr', 'type', 'password');
            cy.get('[aria-label="Show password"]').click();
            cy.get('#login-password').should('have.attr', 'type', 'text');
        });

        it('should navigate between login and register', () => {
            cy.visit('/login');
            cy.contains('Sign Up').click();
            cy.url().should('include', '/register');
            cy.contains('Sign In').click();
            cy.url().should('include', '/login');
        });
    });

    // ===========================
    // Blog
    // ===========================
    describe('Blog', () => {
        it('should display blog posts with search', () => {
            cy.visit('/blog');
            cy.get('[aria-label="Search articles"]').should('be.visible');
            cy.contains('Getting Started with Large Language Models').should('be.visible');
        });

        it('should filter by category', () => {
            cy.visit('/blog');
            cy.contains('button', 'AI').click();
            cy.contains('Getting Started with Large Language Models').should('be.visible');
        });

        it('should search articles', () => {
            cy.visit('/blog');
            cy.get('[aria-label="Search articles"]').type('Kubernetes');
            cy.contains('Kubernetes in Production').should('be.visible');
        });
    });

    // ===========================
    // Accessibility
    // ===========================
    describe('Accessibility', () => {
        it('should have skip-to-content link', () => {
            cy.visit('/');
            cy.get('.skip-link').should('exist');
        });

        it('should have proper ARIA labels on navigation', () => {
            cy.visit('/');
            cy.get('[aria-label="Main navigation"]').should('exist');
            cy.get('[aria-label="QA AI Wizards Home"]').should('exist');
        });

        it('should have proper heading hierarchy', () => {
            cy.visit('/');
            cy.get('h1').should('have.length.at.least', 1);
        });

        it('should have labels on form inputs', () => {
            cy.visit('/contact');
            cy.get('label[for="contact-name"]').should('exist');
            cy.get('label[for="contact-email"]').should('exist');
            cy.get('label[for="contact-subject"]').should('exist');
            cy.get('label[for="contact-message"]').should('exist');
        });
    });

    // ===========================
    // Contact Form
    // ===========================
    describe('Contact Form', () => {
        it('should submit contact form', () => {
            cy.visit('/contact');
            cy.get('#contact-name').type('Test User');
            cy.get('#contact-email').type('test@example.com');
            cy.get('#contact-subject').type('Test Subject');
            cy.get('#contact-message').type('This is a test message');
            cy.contains('Send Message').click();
            cy.contains('Message Sent').should('be.visible');
        });
    });
});
