/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import {
    Database, ShieldCheck, Activity, Zap, BarChart,
    AlertTriangle, CheckCircle2, ShieldAlert, Gauge,
    Terminal, Search, Layers, Lock, Cpu, RefreshCw,
    ArrowRight, Info, Shield
} from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function VectorDBTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(168,85,247,0.1)] text-[var(--neon-purple)] border-[var(--neon-purple)]">
                    🧠 Vector Database Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Vector Database Testing <br /> <span className="neon-text">Complete E2E Module (2026 Updated)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Master the essentials of validating vector databases for RAG and AI systems. From embedding validation to performance benchmarking and security.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* 1️⃣ What is a Vector Database? */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[var(--neon-purple)]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><Database className="text-[var(--neon-purple)]" /> 1️⃣ What is a Vector Database?</h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                        A <strong>Vector Database</strong> stores data as <strong>embeddings (vectors)</strong> instead of normal rows & columns. These vectors represent meaning of text, images, audio, etc.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[var(--glass-border)]">
                            <div className="flex items-center gap-2 mb-2 text-[var(--neon-cyan)] font-bold">
                                <Database className="w-5 h-5" /> Normal DB
                            </div>
                            <p className="text-sm text-[var(--text-secondary)] m-0">Stores data in rows and columns. Ideal for structured data like name, age, city.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[var(--glass-border)]">
                            <div className="flex items-center gap-2 mb-2 text-[var(--neon-purple)] font-bold">
                                <Cpu className="w-5 h-5" /> Vector DB
                            </div>
                            <p className="text-sm text-[var(--text-secondary)] m-0">Stores multidimensional numerical arrays. Ideal for semantic search and AI retrieval.</p>
                        </div>
                    </div>
                </div>

                {/* 2️⃣ Popular Vector Databases */}
                <h2 className="text-2xl font-bold mb-6">🏗 2️⃣ Popular Vector Databases (2026)</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {['Pinecone', 'Weaviate', 'Milvus', 'Qdrant', 'Chroma', 'Elastic (Vector search)'].map((db, i) => (
                        <div key={i} className="glass-card p-4 text-center border border-[var(--glass-border)] hover:border-[var(--neon-cyan)] transition-all">
                            <span className="font-bold">{db}</span>
                        </div>
                    ))}
                </div>

                {/* 3️⃣ Why Vector DB Testing is Important? */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">🧠 3️⃣ Why Vector DB Testing is Important?</h2>
                    <p className="text-[var(--text-secondary)]">Vector DB is the core of RAG systems. If retrieval fails, the entire AI response fails.</p>
                    <ul className="grid md:grid-cols-2 gap-3 list-none p-0">
                        {[
                            'Wrong document retrieval', 'Poor similarity search', 'Incorrect ranking',
                            'Data leakage', 'Slow response', 'High infrastructure cost'
                        ].map((issue, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                <AlertTriangle className="w-4 h-4 text-red-400" /> ❌ {issue}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4️⃣ What Do We Test in Vector Databases? */}
                <h2 className="text-2xl font-bold mb-6">🔍 4️⃣ What Do We Test in Vector Databases?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                        <div className="glass-card p-6 border-l-4 border-l-cyan-400">
                            <h3 className="text-lg font-bold mb-2 mt-0 flex items-center gap-2"><Zap className="text-cyan-400 w-5 h-5" /> Embedding Validation</h3>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-disc list-inside">
                                <li>Correct dimension (e.g., 1536)</li>
                                <li>No corrupted or null vectors</li>
                                <li>Consistency across models</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6 border-l-4 border-l-purple-400">
                            <h3 className="text-lg font-bold mb-2 mt-0 flex items-center gap-2"><Layers className="text-purple-400 w-5 h-5" /> Index Testing</h3>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-disc list-inside">
                                <li>HNSW / IVF index health</li>
                                <li>Search speed optimization</li>
                                <li>Recall rate validation</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6 border-l-4 border-l-pink-400">
                            <h3 className="text-lg font-bold mb-2 mt-0 flex items-center gap-2"><Search className="text-pink-400 w-5 h-5" /> Similarity Search</h3>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-disc list-inside">
                                <li>Top-K relevance check</li>
                                <li>Correct ranking order</li>
                                <li>Distance score logic (Cosine/L2)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="glass-card p-6 border-l-4 border-l-green-400">
                            <h3 className="text-lg font-bold mb-2 mt-0 flex items-center gap-2"><Activity className="text-green-400 w-5 h-5" /> CRUD Operations</h3>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-disc list-inside">
                                <li>Vector inserts/updates</li>
                                <li>Bulk upload performance</li>
                                <li>Metadata filtering accuracy</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6 border-l-4 border-l-orange-400">
                            <h3 className="text-lg font-bold mb-2 mt-0 flex items-center gap-2"><Gauge className="text-orange-400 w-5 h-5" /> Performance Testing</h3>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-disc list-inside">
                                <li>Query latency (ms)</li>
                                <li>Concurrent user handling</li>
                                <li>Memory & GPU utilization</li>
                            </ul>
                        </div>
                        <div className="glass-card p-6 border-l-4 border-l-blue-400">
                            <h3 className="text-lg font-bold mb-2 mt-0 flex items-center gap-2"><Lock className="text-blue-400 w-5 h-5" /> Security Testing</h3>
                            <ul className="text-sm text(--text-secondary) m-0 list-disc list-inside">
                                <li>Multi-tenant isolation</li>
                                <li>Metadata injection protection</li>
                                <li>Encryption & Access control</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 📊 Metrics Table */}
                <h2 className="text-2xl font-bold mb-6">📊 Similarity Search Metrics</h2>
                <div className="overflow-hidden glass-card p-0 mb-12 border border-[var(--glass-border)]">
                    <table className="w-full text-left m-0 border-collapse">
                        <thead>
                            <tr className="bg-[rgba(255,255,255,0.05)] text-[var(--neon-cyan)]">
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Metric</th>
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Meaning</th>
                            </tr>
                        </thead>
                        <tbody className="text-[var(--text-secondary)]">
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-mono">Precision@K</td>
                                <td className="p-4">How many retrieved docs are relevant in the top K.</td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-mono">Recall@K</td>
                                <td className="p-4">Total relevant documents retrieved from the DB.</td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-mono">MRR</td>
                                <td className="p-4">Mean Reciprocal Rank - accuracy of ranking.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-mono">Cosine Similarity</td>
                                <td className="p-4">Distance score between input query and result.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 🧪 Test Scenarios */}
                <h2 className="text-2xl font-bold mb-6">🧪 Real-Time Test Scenarios</h2>
                <div className="space-y-6 mb-12">
                    {[
                        { title: 'RAG Document Retrieval', desc: 'Verify if "What is refund policy?" retrieves specific policy chunks vs generic HR docs.', icon: Info },
                        { title: 'Multi-Tenant SaaS Isolation', desc: 'Ensure Company A cannot access Company B embeddings even with identical query strings.', icon: ShieldCheck },
                        { title: 'Embedding Model Upgrade', desc: 'Validate if old vectors remain compatible when switching from OpenAI to Anthropic embeddings.', icon: RefreshCw },
                    ].map((scenario, i) => (
                        <div key={i} className="glass-card p-6 flex gap-4 items-start">
                            <div className="p-3 rounded-lg bg-[rgba(0,240,255,0.1)] border border-[var(--neon-cyan)]/20">
                                <scenario.icon className="w-6 h-6 text-[var(--neon-cyan)]" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1 mt-0">{scenario.title}</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">{scenario.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🛠 Tools */}
                <h2 className="text-2xl font-bold mb-6">🛠 Tools for Vector Testing (2026)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-6">
                        <h4 className="text-[var(--neon-purple)] font-bold mb-3 mt-0">Frameworks</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge color="#a855f7">LangChain</Badge>
                            <Badge color="#a855f7">LlamaIndex</Badge>
                            <Badge color="#a855f7">Arize AI</Badge>
                            <Badge color="#a855f7">Weights & Biases</Badge>
                        </div>
                    </div>
                    <div className="glass-card p-6">
                        <h4 className="text-[var(--neon-cyan)] font-bold mb-3 mt-0">Load Testing</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge color="#00f0ff">k6</Badge>
                            <Badge color="#00f0ff">JMeter</Badge>
                            <Badge color="#00f0ff">Locust</Badge>
                        </div>
                    </div>
                </div>

                {/* 🚀 Advanced Concepts */}
                <h2 className="text-2xl font-bold mb-6 text-center">🚀 Advanced Enterprise Testing</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                        { title: 'Hybrid Search Testing', desc: 'Keyword + Vector search combined validation for ranking accuracy.' },
                        { title: 'Chunking Strategy', desc: 'Validating context preservation and information loss during PDF/Text splitting.' },
                        { title: 'Embedding Drift', desc: 'Detecting shifts in semantic representation over time as data changes.' },
                        { title: 'Failover & Backup', desc: 'Validating node recovery, replication, and backup restore success.' },
                    ].map((concept, i) => (
                        <div key={i} className="bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)] p-5 rounded-xl">
                            <h4 className="font-bold text-[var(--neon-pink)] mb-2 mt-0 font-sm">{concept.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">{concept.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 🚦 Lifecycle */}
                <div className="glass-card p-8 mb-12 bg-black/20 text-center">
                    <h2 className="text-2xl font-bold mt-0 mb-6">🔄 Vector DB Testing Lifecycle</h2>
                    <div className="flex flex-wrap justify-center gap-3 text-xs">
                        {[
                            'Ingestion', 'Validation', 'Index Config', 'Retrieval',
                            'Metadata', 'Security', 'Load', 'Monitoring'
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="bg-[var(--neon-purple)] px-3 py-1 rounded-full font-bold">{i + 1}. {step}</span>
                                {i < 7 && <ArrowRight className="w-3 h-3 text-gray-500" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🎯 Project Ideas */}
                <h2 className="text-2xl font-bold mb-8 text-center">🎯 Project Ideas (E2E)</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-card p-6 border-t-4 border-t-green-500 hover:-translate-y-1 transition-transform">
                        <Badge className="mb-3 bg-green-500/10 text-green-500">Beginner</Badge>
                        <ul className="text-xs text-[var(--text-secondary)] m-0 p-0 list-disc list-inside space-y-2">
                            <li>Semantic Search Validator</li>
                            <li>Top-K Accuracy Tool</li>
                            <li>Vector Dimension Checker</li>
                        </ul>
                    </div>
                    <div className="glass-card p-6 border-t-4 border-t-yellow-500 hover:-translate-y-1 transition-transform">
                        <Badge className="mb-3 bg-yellow-500/10 text-yellow-500">Intermediate</Badge>
                        <ul className="text-xs text-[var(--text-secondary)] m-0 p-0 list-disc list-inside space-y-2">
                            <li>Retrieval Eval Dashboard</li>
                            <li>Multi-Tenant Security Scraper</li>
                            <li>Performance Benchmark Suite</li>
                        </ul>
                    </div>
                    <div className="glass-card p-6 border-t-4 border-t-red-500 hover:-translate-y-1 transition-transform">
                        <Badge className="mb-3 bg-red-500/10 text-red-500">Advanced</Badge>
                        <ul className="text-xs text-[var(--text-secondary)] m-0 p-0 list-disc list-inside space-y-2">
                            <li>Vector Drift Detection</li>
                            <li>Hybrid Search Evaluator</li>
                            <li>Auto-Regression for Vectors</li>
                        </ul>
                    </div>
                </div>

                {/* 🏁 Final Summary */}
                <div className="glass-card p-8 bg-gradient-to-r from-[var(--neon-purple)]/10 to-[var(--neon-cyan)]/10 border-[var(--neon-purple)]/30 text-center">
                    <h2 className="text-2xl font-bold mt-0 mb-4">🏁 Final Summary</h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto m-0">
                        Vector Database Testing ensures correct storage, high recall, and secure isolation. In 2026, it is a critical skill for AI QA engineers and RAG developers.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Scale({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h18" />
        </svg>
    );
}
