'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lock, ArrowRight } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const courses = [
    { title: 'AI Fundamentals Masterclass', category: 'AI', level: 'Beginner', modules: 12, duration: '24 hours', status: 'coming-soon' },
    { title: 'Cloud Architecture Professional', category: 'Cloud', level: 'Intermediate', modules: 16, duration: '32 hours', status: 'coming-soon' },
    { title: 'DevOps Pipeline Engineering', category: 'DevOps', level: 'Intermediate', modules: 14, duration: '28 hours', status: 'coming-soon' },
    { title: 'Advanced Test Automation', category: 'Testing', level: 'Advanced', modules: 10, duration: '20 hours', status: 'coming-soon' },
    { title: 'Kubernetes Deep Dive', category: 'DevOps', level: 'Advanced', modules: 18, duration: '36 hours', status: 'coming-soon' },
    { title: 'GenAI Application Builder', category: 'AI', level: 'Intermediate', modules: 15, duration: '30 hours', status: 'coming-soon' },
];

export default function Courses() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">📚 Courses</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Expert-Led <span className="neon-text">Courses</span></h1>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Comprehensive courses designed to take your skills to the next level.</p>
                </motion.div>

                <div className="glass-card p-8 md:p-12 text-center mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center mx-auto mb-6">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Courses <span className="neon-text">Coming Soon</span></h2>
                    <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-6">
                        We&apos;re building world-class courses with hands-on labs, certificates, and expert mentorship.
                        Join the waitlist to get early access.
                    </p>
                    <button className="neon-btn px-8 py-3 rounded-xl inline-flex items-center gap-2">
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {courses.map((course) => (
                        <Card key={course.title} className="relative overflow-hidden">
                            <div className="absolute top-4 right-4">
                                <Lock className="w-4 h-4 text-[var(--text-secondary)]" />
                            </div>
                            <Badge className="mb-3">{course.category}</Badge>
                            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                            <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)] mb-4">
                                <span>📊 {course.level}</span>
                                <span>📦 {course.modules} modules</span>
                                <span>⏱ {course.duration}</span>
                            </div>
                            <div className="text-xs text-[var(--neon-purple)] font-semibold uppercase tracking-wide">Coming Soon</div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
