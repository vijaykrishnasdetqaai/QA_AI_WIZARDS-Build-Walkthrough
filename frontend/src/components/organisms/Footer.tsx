'use client';

import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
    Platform: [
        { label: 'Blog', href: '/blog' },
        { label: 'Roadmaps', href: '/roadmaps' },
        { label: 'Courses', href: '/courses' },
        { label: 'Resources', href: '/resources' },
        { label: 'Community', href: '/community' },
    ],
    Company: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
    ],
    Expertise: [
        { label: 'AI & Machine Learning', href: '/roadmaps' },
        { label: 'Cloud Computing', href: '/roadmaps' },
        { label: 'DevOps Engineering', href: '/roadmaps' },
        { label: 'Software Testing', href: '/roadmaps' },
    ],
};

const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className="border-t border-[var(--glass-border)] mt-20" role="contentinfo">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="sm:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold neon-text">QA_AI_WIZARDS</span>
                        </Link>
                        <p className="text-[var(--text-secondary)] text-sm max-w-xs mb-6">
                            Mastering AI, Cloud, DevOps & Software Testing. Your gateway to becoming a world-class tech professional.
                        </p>
                        <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--neon-cyan)]" /> contact@qaawizards.com</p>
                            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-[var(--neon-cyan)]" /> +1 (555) 000-0000</p>
                            <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[var(--neon-cyan)]" /> San Francisco, CA</p>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="font-semibold text-sm mb-4 text-[var(--text-primary)]">{title}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--text-secondary)]">
                        © {new Date().getFullYear()} QA_AI_WIZARDS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] transition-all"
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
