'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import ThemeToggle from '../atoms/ThemeToggle';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/roadmaps', label: 'Roadmaps' },
    { href: '/courses', label: 'Courses' },
    { href: '/resources', label: 'Resources' },
    { href: '/community', label: 'Community' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass" role="banner">
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <nav className="container-custom flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group" aria-label="QA AI Wizards Home">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] transition-shadow duration-300">
                        <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-base md:text-lg font-bold neon-text">QA_AI_WIZARDS</span>
                        <p className="text-[10px] text-[var(--text-secondary)] leading-none hidden lg:block">Mastering AI, Cloud, DevOps & Testing</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? 'text-[var(--neon-cyan)] bg-[rgba(0,240,255,0.1)]'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.05)]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2 md:gap-3">
                    <ThemeToggle />
                    <Link
                        href="/login"
                        className="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium glass neon-border text-[var(--text-primary)] hover:bg-[rgba(0,240,255,0.1)] transition-all"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="hidden md:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold neon-btn"
                    >
                        Sign Up
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden glass border-t border-[var(--glass-border)]"
                    >
                        <div className="container-custom py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${pathname === link.href
                                            ? 'text-[var(--neon-cyan)] bg-[rgba(0,240,255,0.1)]'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[rgba(255,255,255,0.05)]'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex gap-2 mt-3 pt-3 border-t border-[var(--glass-border)]">
                                <Link href="/login" onClick={() => setIsOpen(false)} className="flex-1 text-center py-3 rounded-xl glass neon-border text-sm font-medium">Login</Link>
                                <Link href="/register" onClick={() => setIsOpen(false)} className="flex-1 text-center py-3 rounded-xl neon-btn text-sm">Sign Up</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
