'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Clock, Eye, MessageSquare, ArrowRight } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const categories = ['All', 'AI', 'Cloud', 'DevOps', 'Testing', 'Tutorials', 'News'];

const blogs = [
    { id: 1, slug: 'getting-started-with-llms', title: 'Getting Started with Large Language Models in 2026', excerpt: 'A comprehensive guide to understanding and building with LLMs, from GPT to open-source alternatives.', category: 'AI', tags: ['AI', 'LLM', 'Tutorial'], readTime: 8, views: 2450, comments: 23, date: 'Feb 28, 2026', author: 'Alex Chen' },
    { id: 2, slug: 'kubernetes-production-guide', title: 'Kubernetes in Production: Best Practices', excerpt: 'Learn how to run Kubernetes clusters in production with security, monitoring, and scalability in mind.', category: 'DevOps', tags: ['Kubernetes', 'DevOps'], readTime: 12, views: 1890, comments: 18, date: 'Feb 25, 2026', author: 'Marcus Williams' },
    { id: 3, slug: 'aws-vs-azure-vs-gcp-2026', title: 'AWS vs Azure vs GCP: 2026 Comparison', excerpt: 'An in-depth comparison of the top three cloud platforms with pricing, features, and use cases.', category: 'Cloud', tags: ['AWS', 'Azure', 'GCP'], readTime: 15, views: 3200, comments: 45, date: 'Feb 22, 2026', author: 'Sarah Johnson' },
    { id: 4, slug: 'cypress-ai-testing', title: 'AI-Powered Test Automation with Cypress', excerpt: 'How to leverage AI tools to supercharge your Cypress E2E testing workflow.', category: 'Testing', tags: ['Cypress', 'Testing', 'AI'], readTime: 10, views: 1560, comments: 12, date: 'Feb 20, 2026', author: 'Priya Patel' },
    { id: 5, slug: 'terraform-infra-as-code', title: 'Infrastructure as Code with Terraform', excerpt: 'Master Terraform for managing cloud infrastructure across multiple providers.', category: 'DevOps', tags: ['Terraform', 'IaC'], readTime: 11, views: 2100, comments: 31, date: 'Feb 18, 2026', author: 'Marcus Williams' },
    { id: 6, slug: 'neural-network-fundamentals', title: 'Neural Network Fundamentals Explained', excerpt: 'Understanding the building blocks of neural networks from perceptrons to transformers.', category: 'AI', tags: ['AI', 'Neural Networks'], readTime: 14, views: 4200, comments: 56, date: 'Feb 15, 2026', author: 'Alex Chen' },
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = blogs.filter((blog) => {
        const matchCategory = activeCategory === 'All' || blog.category === activeCategory;
        const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-14">
                    <Badge className="mb-4">📰 Tech Blog</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest <span className="neon-text">Insights</span></h1>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Expert articles on AI, Cloud, DevOps, and Software Testing.</p>
                </motion.div>

                {/* Search + Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 md:mb-10">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
                        <input
                            type="search"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)] transition-colors"
                            aria-label="Search articles"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat
                                        ? 'neon-btn'
                                        : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredBlogs.map((blog, i) => (
                        <motion.div key={blog.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                            <Link href={`/blog/${blog.slug}`}>
                                <Card className="h-full flex flex-col group">
                                    <div className="h-40 md:h-48 rounded-xl mb-4 bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(168,85,247,0.1)] flex items-center justify-center">
                                        <span className="text-4xl opacity-50">📝</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Badge color={blog.category === 'AI' ? '#00f0ff' : blog.category === 'Cloud' ? '#a855f7' : blog.category === 'DevOps' ? '#10b981' : '#f59e0b'}>
                                            {blog.category}
                                        </Badge>
                                        <span className="text-xs text-[var(--text-secondary)]">{blog.date}</span>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--neon-cyan)] transition-colors line-clamp-2">{blog.title}</h2>
                                    <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1 line-clamp-2">{blog.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] pt-3 border-t border-[var(--glass-border)]">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime} min</span>
                                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {blog.views}</span>
                                        <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {blog.comments}</span>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-[var(--text-secondary)] text-lg">No articles found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
