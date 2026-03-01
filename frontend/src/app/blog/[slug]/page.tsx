'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Eye, User, Calendar, ArrowRight } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function BlogDetail() {
    return (
        <div className="py-12 md:py-20">
            <article className="container-custom max-w-4xl">
                <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors mb-6">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Badge className="mb-4">AI</Badge>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Getting Started with Large Language Models in 2026</h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)] mb-8 pb-8 border-b border-[var(--glass-border)]">
                        <span className="flex items-center gap-1"><User className="w-4 h-4" /> Alex Chen</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Feb 28, 2026</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
                        <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> 2,450 views</span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <div className="glass-card p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 neon-text">Introduction</h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                                Large Language Models (LLMs) have revolutionized the tech industry. From ChatGPT to open-source alternatives
                                like LLaMA and Mistral, understanding how to work with LLMs is becoming an essential skill for every developer.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                In this comprehensive guide, we&#39;ll walk through the fundamentals of LLMs, how they work under the hood,
                                and practical steps to start building with them in your projects.
                            </p>
                        </div>

                        <div className="glass-card p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 neon-text">What are Large Language Models?</h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                                LLMs are neural networks trained on massive amounts of text data. They learn patterns in language that allow
                                them to generate human-like text, answer questions, write code, and much more.
                            </p>
                            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
                                <li>Transformer architecture with self-attention mechanisms</li>
                                <li>Pre-training on internet-scale text corpora</li>
                                <li>Fine-tuning for specific tasks and domains</li>
                                <li>Instruction tuning for conversational ability</li>
                                <li>RLHF (Reinforcement Learning from Human Feedback)</li>
                            </ul>
                        </div>

                        <div className="glass-card p-6 md:p-8 mb-8">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 neon-text">Getting Started</h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                                Here&#39;s a practical example of using an LLM API in your application:
                            </p>
                            <pre className="bg-[rgba(0,0,0,0.3)] p-4 rounded-xl overflow-x-auto text-sm text-[var(--neon-cyan)]">
                                {`import OpenAI from 'openai';

const client = new OpenAI();

const response = await client.chat.completions.create({
  model: 'gpt-4-turbo',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain transformers in ML.' }
  ],
});

console.log(response.choices[0].message.content);`}
                            </pre>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-8 border-t border-[var(--glass-border)]">
                        <Link href="/blog" className="glass-card p-4 flex items-center gap-3 group flex-1">
                            <ArrowLeft className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--neon-cyan)] transition-colors" />
                            <div>
                                <p className="text-xs text-[var(--text-secondary)]">Previous</p>
                                <p className="text-sm font-medium group-hover:text-[var(--neon-cyan)] transition-colors">All Articles</p>
                            </div>
                        </Link>
                        <Link href="/blog" className="glass-card p-4 flex items-center justify-end gap-3 group flex-1">
                            <div className="text-right">
                                <p className="text-xs text-[var(--text-secondary)]">Next</p>
                                <p className="text-sm font-medium group-hover:text-[var(--neon-cyan)] transition-colors">More Articles</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--neon-cyan)] transition-colors" />
                        </Link>
                    </div>
                </motion.div>
            </article>
        </div>
    );
}
