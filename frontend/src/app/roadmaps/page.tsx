'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Cloud, Code, TestTube, ArrowRight, CheckCircle } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const roadmaps = [
    {
        slug: 'ai-machine-learning',
        icon: Brain,
        title: 'AI & Machine Learning',
        desc: 'From Python basics to deploying production ML models and LLMs.',
        color: '#00f0ff',
        steps: ['Python & Math Foundations', 'Machine Learning Basics', 'Deep Learning & Neural Networks', 'NLP & LLMs', 'MLOps & Deployment', 'Advanced: GenAI & Agents'],
        duration: '6-9 months',
        level: 'Beginner → Expert',
    },
    {
        slug: 'cloud-computing',
        icon: Cloud,
        title: 'Cloud Computing',
        desc: 'Master AWS, Azure, and GCP from fundamentals to architecture.',
        color: '#a855f7',
        steps: ['Cloud Fundamentals', 'AWS Core Services', 'Networking & Security', 'Serverless Architecture', 'Multi-Cloud Strategy', 'Solutions Architecture'],
        duration: '4-6 months',
        level: 'Beginner → Expert',
    },
    {
        slug: 'devops-engineering',
        icon: Code,
        title: 'DevOps Engineering',
        desc: 'CI/CD, containers, orchestration, and infrastructure automation.',
        color: '#10b981',
        steps: ['Linux & Scripting', 'Git & CI/CD Pipelines', 'Docker & Containers', 'Kubernetes', 'Terraform & IaC', 'Monitoring & SRE'],
        duration: '5-7 months',
        level: 'Beginner → Expert',
    },
    {
        slug: 'software-testing',
        icon: TestTube,
        title: 'Software Testing',
        desc: 'Manual testing to advanced automation with AI-driven QA.',
        color: '#f59e0b',
        steps: ['Testing Fundamentals', 'Test Automation (Selenium/Cypress)', 'API Testing', 'Performance Testing', 'Security Testing', 'AI-Powered Testing'],
        duration: '4-6 months',
        level: 'Beginner → Expert',
    },
];

export default function Roadmaps() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">🗺️ Learning Roadmaps</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Your Path to <span className="neon-text">Mastery</span></h1>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Structured, step-by-step learning paths designed by industry experts.</p>
                </motion.div>

                <div className="space-y-6 md:space-y-8">
                    {roadmaps.map((roadmap, i) => (
                        <motion.div key={roadmap.slug} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="glass-card p-6 md:p-8 lg:p-10">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${roadmap.color}15`, border: `1px solid ${roadmap.color}30` }}>
                                                <roadmap.icon className="w-6 h-6" style={{ color: roadmap.color }} />
                                            </div>
                                            <div>
                                                <h2 className="text-xl md:text-2xl font-bold">{roadmap.title}</h2>
                                                <div className="flex gap-3 text-xs text-[var(--text-secondary)]">
                                                    <span>⏱ {roadmap.duration}</span>
                                                    <span>📊 {roadmap.level}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[var(--text-secondary)] mb-6">{roadmap.desc}</p>
                                        <Link href={`/roadmaps/${roadmap.slug}`} className="neon-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm">
                                            Start Learning <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-3">LEARNING PATH</h3>
                                        <div className="space-y-2">
                                            {roadmap.steps.map((step, j) => (
                                                <div key={j} className="flex items-center gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)]">
                                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${roadmap.color}20`, color: roadmap.color }}>
                                                        {j + 1}
                                                    </div>
                                                    <span className="text-sm">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
