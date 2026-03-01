'use client';

import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Video, FileText, Wrench, Download } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const resourceCategories = [
    {
        title: 'Documentation & Guides',
        icon: BookOpen,
        resources: [
            { name: 'TensorFlow Documentation', url: '#', type: 'Docs' },
            { name: 'AWS Well-Architected Framework', url: '#', type: 'Guide' },
            { name: 'Kubernetes Official Docs', url: '#', type: 'Docs' },
            { name: 'ISTQB Syllabus', url: '#', type: 'Guide' },
        ],
    },
    {
        title: 'Video Tutorials',
        icon: Video,
        resources: [
            { name: 'Neural Networks Explained', url: '#', type: 'Video' },
            { name: 'Docker in 1 Hour', url: '#', type: 'Video' },
            { name: 'CI/CD Pipeline Setup', url: '#', type: 'Video' },
            { name: 'Cypress E2E Testing Crash Course', url: '#', type: 'Video' },
        ],
    },
    {
        title: 'Cheat Sheets',
        icon: FileText,
        resources: [
            { name: 'Python Cheat Sheet', url: '#', type: 'PDF' },
            { name: 'Git Commands Reference', url: '#', type: 'PDF' },
            { name: 'Linux Commands Cheat Sheet', url: '#', type: 'PDF' },
            { name: 'SQL Quick Reference', url: '#', type: 'PDF' },
        ],
    },
    {
        title: 'Tools & Software',
        icon: Wrench,
        resources: [
            { name: 'VS Code Extensions for DevOps', url: '#', type: 'Tool' },
            { name: 'Postman Collection Templates', url: '#', type: 'Tool' },
            { name: 'Terraform Modules Library', url: '#', type: 'Tool' },
            { name: 'Testing Framework Starter Kits', url: '#', type: 'Tool' },
        ],
    },
];

export default function Resources() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">📂 Resources</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Free <span className="neon-text">Resources</span></h1>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Curated collection of free learning resources, tools, and guides.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {resourceCategories.map((cat) => (
                        <Card key={cat.title} hover={false} className="h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(168,85,247,0.1)] flex items-center justify-center">
                                    <cat.icon className="w-5 h-5 text-[var(--neon-cyan)]" />
                                </div>
                                <h2 className="text-lg font-semibold">{cat.title}</h2>
                            </div>
                            <div className="space-y-2">
                                {cat.resources.map((res) => (
                                    <a
                                        key={res.name}
                                        href={res.url}
                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[rgba(0,240,255,0.05)] transition-all group"
                                    >
                                        <span className="text-sm group-hover:text-[var(--neon-cyan)] transition-colors">{res.name}</span>
                                        <div className="flex items-center gap-2">
                                            <Badge>{res.type}</Badge>
                                            <ExternalLink className="w-3 h-3 text-[var(--text-secondary)]" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
