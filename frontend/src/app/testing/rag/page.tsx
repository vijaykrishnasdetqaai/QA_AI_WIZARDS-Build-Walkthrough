/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import {
    Database, Search, Cpu, Zap, BarChart, AlertTriangle, CheckCircle2,
    Terminal, Users, Sparkles, Wand2, Eye, MessageSquare, Repeat,
    ListChecks, Bug, Layout, Code, Map, Shield, ActivitySquare,
    BrainCircuit, RefreshCw, FileText, Layers, Lock, ShieldAlert,
    ArrowRight, Gauge, Activity
} from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function RAGTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(99,102,241,0.1)] text-[#818cf8] border-[#818cf8]">
                    📚 RAG Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    RAG (Retrieval-Augmented Generation) <br /> <span className="neon-text" style={{ textShadow: '0 0 10px #818cf8, 0 0 20px #818cf8' }}>Complete E2E Guide (2026 Updated)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Deep dive into validating the retrieval and generation pipeline. Ensure enterprise AI reliability, accuracy, and security across the entire RAG lifecycle.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* 1️⃣ What is RAG? */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[#818cf8]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><Database className="text-[#818cf8]" /> 1️⃣ What is RAG?</h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                        <strong>Retrieval-Augmented Generation (RAG)</strong> is an architectural pattern that allows LLMs to retrieve relevant data from external knowledge bases (like Vector Databases) before generating a response.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-black/40 rounded-xl border border-[var(--glass-border)] text-[10px] font-bold uppercase tracking-widest text-center">
                        <div className="flex flex-col items-center gap-2 text-[#818cf8]">
                            <div className="p-3 glass rounded-lg mb-1"><Layers /></div>
                            User Question
                        </div>
                        <ArrowRight className="hidden md:block text-gray-600" />
                        <div className="flex flex-col items-center gap-2 text-cyan-400">
                            <div className="p-3 glass rounded-lg mb-1"><Search /></div>
                            Retriever
                        </div>
                        <ArrowRight className="hidden md:block text-gray-600" />
                        <div className="flex flex-col items-center gap-2 text-purple-400">
                            <div className="p-3 glass rounded-lg mb-1"><BrainCircuit /></div>
                            LLM Generation
                        </div>
                        <ArrowRight className="hidden md:block text-gray-600" />
                        <div className="flex flex-col items-center gap-2 text-green-400">
                            <div className="p-3 glass rounded-lg mb-1"><CheckCircle2 /></div>
                            Final Answer
                        </div>
                    </div>
                </div>

                {/* 2️⃣ Why RAG Testing is Critical */}
                <h2 className="text-2xl font-bold mb-6">2️⃣ Why RAG Testing is Critical in 2026?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="glass p-6 rounded-2xl border border-[var(--glass-border)] transition-all hover:border-[#818cf8]/50">
                        <h3 className="text-lg font-bold mb-3 mt-0 flex items-center gap-2 text-[#818cf8]"><Activity className="w-5 h-5" /> Hallucination Prevention</h3>
                        <p className="text-sm text-[var(--text-secondary)] m-0">Without testing, systems may retrieve irrelevant docs and force the LLM to hallucinate or invent technical facts that don't exist.</p>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-[var(--glass-border)] transition-all hover:border-[#818cf8]/50">
                        <h3 className="text-lg font-bold mb-3 mt-0 flex items-center gap-2 text-[#818cf8]"><Lock className="w-5 h-5" /> Data Sovereignty</h3>
                        <p className="text-sm text-[var(--text-secondary)] m-0">Ensures that sensitive enterprise data is only retrieved within the correct permission scope and tenant boundaries.</p>
                    </div>
                </div>

                {/* 🔍 3️⃣ The 3 Layers of RAG Testing */}
                <h2 className="text-2xl font-bold mb-8">🔍 3️⃣ The 3 Major Testing Layers</h2>
                <div className="space-y-6 mb-12">
                    <div className="glass-card p-6 border-t-2 border-[#818cf8]">
                        <h4 className="flex items-center gap-2 text-lg font-bold mb-3 mt-0"><Search className="text-[#818cf8] w-5 h-5" /> Layer 1: Retrieval Testing</h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">Focuses on finding the needle in the haystack. Did the system fetch the most relevant pieces of information?</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {['Precision@K', 'Recall@K', 'MRR', 'Similarity Score'].map((m) => (
                                <div key={m} className="bg-white/5 p-2 rounded text-[10px] font-bold text-center border border-[var(--glass-border)]">{m}</div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card p-6 border-t-2 border-purple-500">
                        <h4 className="flex items-center gap-2 text-lg font-bold mb-3 mt-0"><Sparkles className="text-purple-500 w-5 h-5" /> Layer 2: Generation Testing</h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">Focuses on the final output. Is the answer faithful to the retrieved documents, correctly cited, and safe?</p>
                        <div className="flex gap-4">
                            <span className="text-[10px] font-bold text-green-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Faithfulness</span>
                            <span className="text-[10px] font-bold text-blue-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Citation Match</span>
                        </div>
                    </div>
                </div>

                {/* 🎯 4️⃣ Real-Time Scenarios */}
                <h2 className="text-2xl font-bold mb-6">🎯 4️⃣ Real-Time Enterprise Scenarios</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                        { title: 'Legal AI', icon: FileText, desc: 'Question: "Penalty for X?" Validating if the system retrieved the correct law section and not an outdated version.' },
                        { title: 'Healthcare Support', icon: ActivitySquare, desc: 'Question: "Symptoms of Y?" Ensuring reliable sources are used and no harmful advice is generated.' },
                        { title: 'Fintech Support', icon: Shield, desc: 'Question: "2026 Policy?" Verifying cross-tenant security so User A cannot see User B\'s balance docs.' },
                    ].map((s, i) => (
                        <div key={i} className="glass-card p-6 bg-gradient-to-b from-white/5 to-transparent">
                            <s.icon className="w-8 h-8 mb-4 text-[#818cf8]" />
                            <h4 className="font-bold mb-2 mt-0">{s.title}</h4>
                            <p className="text-xs text-[var(--text-secondary)] m-0 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 🔐 5️⃣ RAG Security */}
                <div className="glass-card p-8 mb-12 bg-red-950/10 border-red-500/20">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 mt-0 text-red-500"><Lock /> 5️⃣ RAG Security Risks</h2>
                    <ul className="space-y-4 m-0 p-0 list-none">
                        <li className="flex gap-4 items-start p-4 bg-black/40 rounded-xl border border-red-500/10">
                            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <div>
                                <h5 className="font-bold m-0 mb-1 text-sm">Indirect Prompt Injection</h5>
                                <p className="text-[10px] text-[var(--text-secondary)] m-0">A retrieved document could contain hidden instructions that hijack the LLM's goal once it reads the text.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start p-4 bg-black/40 rounded-xl border border-red-500/10">
                            <ShieldAlert className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <div>
                                <h5 className="font-bold m-0 mb-1 text-sm">Cross-Tenant Exposure</h5>
                                <p className="text-[10px] text-[var(--text-secondary)] m-0">Testing retrieval filters to ensure multiple customers' private data never overlaps in the Vector DB.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 📊 6️⃣ Metrics */}
                <h2 className="text-2xl font-bold mb-6">📊 6️⃣ RAG Evaluation Metrics</h2>
                <div className="overflow-hidden glass-card p-0 mb-12">
                    <table className="w-full text-left m-0 border-collapse">
                        <thead>
                            <tr className="bg-[rgba(129,140,248,0.05)] text-[#818cf8]">
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Category</th>
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Metric</th>
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">What it measures</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs text-[var(--text-secondary)]">
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold text-white uppercase italic">Retrieval</td>
                                <td className="p-4 font-bold">Recall@K</td>
                                <td className="p-4">Percentage of correct documents retrieved in top results.</td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold text-white uppercase italic">Generation</td>
                                <td className="p-4 font-bold">Faithfulness</td>
                                <td className="p-4 text-[#818cf8]">How much of the answer is derived strictly from the source.</td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold text-white uppercase italic">Security</td>
                                <td className="p-4 font-bold">Injection Score</td>
                                <td className="p-4 text-red-400">Resistance to malicious document content.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white uppercase italic">Perf</td>
                                <td className="p-4 font-bold">TTFT</td>
                                <td className="p-4">Time to First Token (Latency).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 🛠 7️⃣ Tools */}
                <h2 className="text-2xl font-bold mb-6 text-center">🛠 7️⃣ RAG Testing Ecosystem (2026)</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { name: 'RAGAS', desc: 'Eval Framework' },
                        { name: 'TruLens', desc: 'Tracing & Eval' },
                        { name: 'DeepEval', desc: 'Unit Testing LLMs' },
                        { name: 'Arize AI', desc: 'Observability' },
                    ].map((tool, i) => (
                        <div key={i} className="glass p-4 rounded-xl text-center border border-[var(--glass-border)]">
                            <h5 className="font-bold text-[#818cf8] m-0 mb-1 text-xs">{tool.name}</h5>
                            <span className="text-[10px] text-[var(--text-secondary)] uppercase">{tool.desc}</span>
                        </div>
                    ))}
                </div>

                {/* 🔄 8️⃣ Testing Lifecycle */}
                <h2 className="text-2xl font-bold mb-6">🔄 8️⃣ RAG Testing Lifecycle</h2>
                <div className="space-y-3 mb-12">
                    {[
                        '1. Data Ingestion Validation',
                        '2. Embedding Quality Check',
                        '3. Vector DB Indexing Validation',
                        '4. Retrieval Accuracy (Precision/Recall)',
                        '5. Context Window Optimization',
                        '6. Prompt Template Evaluation',
                        '7. Generation Integrity (Faithfulness)',
                        '8. End-to-End Performance & Security',
                    ].map((step, i) => (
                        <div key={i} className="flex items-center gap-4 p-3 glass rounded-xl border border-[var(--glass-border)]">
                            <div className="w-8 h-8 rounded-full bg-[#818cf8]/10 text-[#818cf8] flex items-center justify-center font-bold text-xs">{i + 1}</div>
                            <span className="text-sm font-semibold">{step}</span>
                        </div>
                    ))}
                </div>

                {/* 🧠 9️⃣ Advanced Enterprise RAG */}
                <div className="glass-card p-10 mb-12 border-dashed border-[#818cf8]/40">
                    <h2 className="text-2xl font-bold mt-0 mb-8 text-center flex items-center justify-center gap-3"><Sparkles strokeWidth={3} className="text-[#818cf8]" /> 9️⃣ Advanced Enterprise Validation</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="flex items-center gap-2 text-md font-bold mb-4 mt-0"><RefreshCw className="w-4 h-4 text-[#818cf8]" /> Chunking & Overlap</h4>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed m-0">Testing if the document split size (512 vs 1024 tokens) and context overlap are optimal. Poor chunking leads to "Information Loss" during retrieval.</p>
                        </div>
                        <div>
                            <h4 className="flex items-center gap-2 text-md font-bold mb-4 mt-0"><RefreshCw className="w-4 h-4 text-[#818cf8]" /> Hybrid Search Accuracy</h4>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed m-0">Validating the blend between Keyword (BM25) and Semantic (Vector) search. Essential for finding specific SKU numbers or exact names.</p>
                        </div>
                    </div>
                </div>

                {/* 🚀 🔟 Careers & Projects */}
                <h2 className="text-2xl font-bold mb-10 text-center">🚀 10️⃣ RAG Career Builder Projects</h2>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="glass-card p-6 border-t-4 border-t-green-500">
                        <Badge className="mb-4 bg-green-500/10 text-green-500 border-green-500">Green Tier</Badge>
                        <p className="text-xs text-[var(--text-secondary)]">Build a citation validator for PDF-based chatbots.</p>
                    </div>
                    <div className="glass-card p-6 border-t-4 border-t-[#818cf8]">
                        <Badge className="mb-4 bg-[#818cf8]/10 text-[#818cf8] border-[#818cf8]">Pro Tier</Badge>
                        <p className="text-xs text-[var(--text-secondary)]">Create a RAG retrieval precision dashboard for Pinecone/Milvus DB.</p>
                    </div>
                    <div className="glass-card p-6 border-t-4 border-t-purple-600">
                        <Badge className="mb-4 bg-purple-600/10 text-purple-400 border-purple-600">Legend Tier</Badge>
                        <p className="text-xs text-[var(--text-secondary)]">Implement an automated Multi-Tenant Security Validation System.</p>
                    </div>
                </div>

                {/* 🏁 Final Summary */}
                <div className="mt-16 glass p-10 rounded-3xl border border-[#818cf8]/20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#818cf8]/10 blur-3xl -mr-16 -mt-16" />
                    <h2 className="text-3xl font-bold mb-4 mt-0">🏁 Final Summary</h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed m-0">
                        RAG Testing is the ultimate safeguard for enterprise AI. By rigorously validating every step—from retrieval precision to generation faithfulness—we transform temperamental LLMs into reliable, high-trust business intelligence tools for the 2026 digital landscape.
                    </p>
                </div>

            </div>
        </div>
    );
}
