/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import {
    ShieldCheck, Activity, Zap, BarChart,
    RefreshCw, Terminal, Layers, Search,
    Info, CheckCircle2, AlertTriangle,
    ArrowRight, Lock, TrendingUp, DollarSign,
    GitBranch, Server, Shield, Cpu
} from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function AIDevSecOpsTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[#10b981]">
                    🚀 AI DevSecOps Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    AI DevSecOps Testing <br /> <span className="neon-text">Complete E2E Module (2026 Updated)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Master the integration of AI security and validation into modern CI/CD pipelines. Ensure quality, security, and stability from development to production.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* 1️⃣ What is AI DevSecOps? */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[#10b981]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><ShieldCheck className="text-[#10b981]" /> 1️⃣ What is AI DevSecOps?</h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                        <strong>DevSecOps</strong> = Development + Security + Operations. <strong>AI DevSecOps</strong> applies these principles to AI systems (LLMs, RAG, MAS) by building, securing, testing, deploying, and monitoring them continuously.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[var(--glass-border)]">
                            <h4 className="flex items-center gap-2 mb-2 text-[var(--neon-cyan)] font-bold m-0 text-base">Key Focus</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">Securing the AI lifecycle through automated gates and continuous observability.</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[var(--glass-border)]">
                            <h4 className="flex items-center gap-2 mb-2 text-[var(--neon-purple)] font-bold m-0 text-base">Automation</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">Every code commit triggers security scans, model validation, and regression tests.</p>
                        </div>
                    </div>
                </div>

                {/* 2️⃣ Why AI DevSecOps Testing is Important */}
                <h2 className="text-2xl font-bold mb-6">🧠 2️⃣ Why AI DevSecOps Testing is Important (2026)</h2>
                <p className="text-[var(--text-secondary)] mb-8">
                    AI systems are dynamic and probabilistic. Standard testing isn't enough to prevent data leakage, model drift, or prompt injection in production.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                        { title: 'Safe Deployment', desc: 'Preventing unsafe or biased models from reaching users.' },
                        { title: 'Continuous Security', desc: 'Real-time protection against injection and exfiltration.' },
                        { title: 'Drift Detection', desc: 'Monitoring accuracy/performance shifts post-deployment.' },
                        { title: 'Cost Optimization', desc: 'Preventing token explosion and inefficient API usage.' },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-6 flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-[#10b981] shrink-0" />
                            <div>
                                <h4 className="font-bold m-0 mb-1">{item.title}</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🔄 3️⃣ AI DevSecOps Lifecycle */}
                <h2 className="text-2xl font-bold mb-8 text-center">🔄 3️⃣ AI DevSecOps Lifecycle</h2>
                <div className="relative mb-16 px-4">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--glass-border)] -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {[
                            { name: 'Dev', icon: GitBranch },
                            { name: 'Train', icon: Cpu },
                            { name: 'Security', icon: Shield },
                            { name: 'CI/CD', icon: RefreshCw },
                            { name: 'Deploy', icon: Server },
                            { name: 'Monitor', icon: Activity },
                            { name: 'Drift', icon: TrendingUp },
                            { name: 'Improve', icon: Zap },
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center group">
                                <div className="w-12 h-12 rounded-full bg-black border border-[var(--glass-border)] flex items-center justify-center mb-3 group-hover:border-[#10b981] transition-colors shadow-lg shadow-black/50">
                                    <step.icon className="w-6 h-6 text-[#10b981]" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">{step.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔍 4️⃣ What Do We Test? */}
                <h2 className="text-2xl font-bold mb-6">🔍 4️⃣ Core Testing Areas</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="glass-card p-5 border-l-4 border-l-blue-400">
                            <h4 className="font-bold mb-2 mt-0 flex items-center gap-2"><Lock className="w-4 h-4 text-blue-400" /> Code & Model Security</h4>
                            <p className="text-xs text-[var(--text-secondary)] m-0">Secrets scanning, dependency checks, and adversarial model validation (Prompt injection/Jailbreak resistance).</p>
                        </div>
                        <div className="glass-card p-5 border-l-4 border-l-purple-400">
                            <h4 className="font-bold mb-2 mt-0 flex items-center gap-2"><Layers className="w-4 h-4 text-purple-400" /> RAG & Data Integrity</h4>
                            <p className="text-xs text-[var(--text-secondary)] m-0">Vector DB isolation, document sanitization, and metadata filter validation to prevent data leakage.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="glass-card p-5 border-l-4 border-l-yellow-400">
                            <h4 className="font-bold mb-2 mt-0 flex items-center gap-2"><Activity className="w-4 h-4 text-yellow-400" /> Monitoring & Drift</h4>
                            <p className="text-xs text-[var(--text-secondary)] m-0">Real-time alerts for performance drops, input/output drift, and cost spikes in production pipelines.</p>
                        </div>
                        <div className="glass-card p-5 border-l-4 border-l-green-400">
                            <h4 className="font-bold mb-2 mt-0 flex items-center gap-2"><Zap className="w-4 h-4 text-green-400" /> Performance & Scale</h4>
                            <p className="text-xs text-[var(--text-secondary)] m-0">Load testing concurrent AI inferences, GPU utilization, and token usage optimization.</p>
                        </div>
                    </div>
                </div>

                {/* 📊 Metrics */}
                <h2 className="text-2xl font-bold mb-6">📊 AI DevSecOps Metrics</h2>
                <div className="overflow-hidden glass-card p-0 mb-12 border border-[var(--glass-border)]">
                    <table className="w-full text-left m-0 border-collapse">
                        <thead>
                            <tr className="bg-[rgba(16,185,129,0.05)] text-[#10b981]">
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Category</th>
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Metric</th>
                                <th className="p-4 font-bold border-b border-[var(--glass-border)]">Description</th>
                            </tr>
                        </thead>
                        <tbody className="text-[var(--text-secondary)] text-sm">
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold">Security</td>
                                <td className="p-4">Injection Block Rate</td>
                                <td className="p-4">% of adversarial prompts successfully filtered.</td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold">Quality</td>
                                <td className="p-4">Drift Score</td>
                                <td className="p-4">Statistical deviation of model output over time.</td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold">Efficiency</td>
                                <td className="p-4">Token per Request</td>
                                <td className="p-4">Average cost normalized by task complexity.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Ops</td>
                                <td className="p-4">P99 Latency</td>
                                <td className="p-4">Time to generate full AI response for 99% of users.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 🛠 Tools */}
                <h2 className="text-2xl font-bold mb-6">🛠 Essential Tools (2026 Landscape)</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12 text-center text-sm font-bold">
                    <div className="glass-card p-6 border-b-4 border-b-blue-500">
                        <span className="block mb-4 text-blue-400">CI/CD</span>
                        <div className="space-y-2">
                            <div className="p-2 bg-white/5 rounded">GitHub Actions</div>
                            <div className="p-2 bg-white/5 rounded">GitLab CI</div>
                        </div>
                    </div>
                    <div className="glass-card p-6 border-b-4 border-b-purple-500">
                        <span className="block mb-4 text-purple-400">OBSERVABILITY</span>
                        <div className="space-y-2">
                            <div className="p-2 bg-white/5 rounded">Arize AI</div>
                            <div className="p-2 bg-white/5 rounded">WhyLabs</div>
                        </div>
                    </div>
                    <div className="glass-card p-6 border-b-4 border-b-green-500">
                        <span className="block mb-4 text-green-400">GUARDRAILS</span>
                        <div className="space-y-2">
                            <div className="p-2 bg-white/5 rounded">OpenAI Safety</div>
                            <div className="p-2 bg-white/5 rounded">LangChain Guard</div>
                        </div>
                    </div>
                </div>

                {/* 🚀 Advanced Concepts */}
                <h2 className="text-2xl font-bold mb-6">🚀 Advanced Enterprise AI Ops</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {[
                        { title: 'Automated Red Team in CI', desc: 'Every build automatically triggers a suite of jailbreak and injection attacks.' },
                        { title: 'Drift Auto-Remediation', desc: 'System triggers model fine-tuning or RAG re-indexing if accuracy drops below threshold.' },
                        { title: 'Cost Guardrails & Quotas', desc: 'Preventing "Agent Loops" from exhausting API budgets through real-time circuit breakers.' },
                        { title: 'AI Zero-Trust Architecture', desc: 'Implementing granular identity and access management for AI agent tool-calling.' },
                    ].map((concept, i) => (
                        <div key={i} className="bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)] p-5 rounded-xl">
                            <h4 className="font-bold text-[var(--neon-cyan)] mb-2 mt-0">{concept.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">{concept.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 🎯 Project Ideas */}
                <h2 className="text-2xl font-bold mb-8 text-center text-[#10b981]">🎯 Career Projects (E2E)</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="glass-card p-6 border-t-4 border-t-green-500 hover:scale-[1.02] transition-transform">
                        <Badge className="mb-3 bg-green-500/10 text-green-500 border-green-500">Beginner</Badge>
                        <ul className="text-xs text-[var(--text-secondary)] m-0 p-0 list-disc list-inside space-y-2">
                            <li>Prompt Regression Pipeline</li>
                            <li>API Security Scanner</li>
                            <li>Token Usage Monitor</li>
                        </ul>
                    </div>
                    <div className="glass-card p-6 border-t-4 border-t-yellow-500 hover:scale-[1.02] transition-transform">
                        <Badge className="mb-3 bg-yellow-500/10 text-yellow-500 border-yellow-500">Intermediate</Badge>
                        <ul className="text-xs text-[var(--text-secondary)] m-0 p-0 list-disc list-inside space-y-2">
                            <li>AI Security Gate in CI/CD</li>
                            <li>Drift Detection Alert System</li>
                            <li>Multi-Agent Validation Suite</li>
                        </ul>
                    </div>
                    <div className="glass-card p-6 border-t-4 border-t-red-500 hover:scale-[1.02] transition-transform">
                        <Badge className="mb-3 bg-red-500/10 text-red-500 border-red-500">Advanced</Badge>
                        <ul className="text-xs text-[var(--text-secondary)] m-0 p-0 list-disc list-inside space-y-2">
                            <li>Autonomous Security Agent</li>
                            <li>AI Observability Dashboard</li>
                            <li>Zero-Trust AI Deployment</li>
                        </ul>
                    </div>
                </div>

                {/* 🏁 Final Summary */}
                <div className="glass-card p-8 bg-gradient-to-r from-emerald-500/10 to-[var(--neon-cyan)]/10 border-emerald-500/30 text-center">
                    <h2 className="text-2xl font-bold mt-0 mb-4">🏁 Final Summary</h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto m-0">
                        AI DevSecOps Testing is the backbone of production-ready AI. It ensures security is never an afterthought and model quality is maintained at scale through full automation.
                    </p>
                </div>
            </div>
        </div>
    );
}
