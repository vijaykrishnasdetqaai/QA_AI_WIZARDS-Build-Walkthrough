/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Cog, CheckCircle2, Box, Cpu, FileJson, Gauge, ServerCrash, Clock, ActivitySquare } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function PerformanceTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(234,88,12,0.1)] text-[#f97316] border-[#f97316]">
                    🚀 Performance Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Performance Testing <br /> <span className="neon-text" style={{ textShadow: '0 0 10px #f97316, 0 0 20px #f97316' }}>Complete E2E Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Ensure your system never breaks under pressure. Learn to test speed, stability, and scalability using classic tools, modern cloud platforms, and AI observability.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Intro */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[#f97316]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><Gauge className="text-[#f97316]" /> 1️⃣ What is Performance Testing?</h2>
                    <div className="space-y-4 text-[var(--text-secondary)]">
                        <p className="m-0">
                            Performance Testing checks how fast a system works, how stable it is under heavy load, how many concurrent users it can handle, and precisely when it fundamentally breaks.
                        </p>
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[var(--glass-border)] text-sm font-mono text-gray-300">
                            <strong>Scenario:</strong> <br />
                            ✅ If 10 users login ➔ works perfectly fine.<br />
                            ❌ If 10,000 users login ➔ system slows to a crawl or crashes.<br />
                            <em>That is a massive performance problem.</em>
                        </div>
                        <p className="m-0 text-sm italic">
                            <strong>Focus:</strong> It mainly targets Backend APIs, Application Servers, and Databases.
                        </p>
                    </div>
                </div>

                {/* Why & Types */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2 text-white">2️⃣ Why it's critical in 2026</h2>
                        <ul className="space-y-3 relative ml-3 list-none p-0 m-0 text-sm">
                            {[
                                'Rise of complex Microservices',
                                'Global Cloud-based deployments',
                                'Apps handling Millions of simultaneous users',
                                'Real-time immediate payment gateways'
                            ].map((step, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                    <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-sm text-red-200">
                            <strong>Example:</strong> During a prime Amazon sale, if the database crashes due to load, the company loses millions in revenue severely damaging the brand.
                        </div>
                    </div>

                    <div className="glass-card p-0 overflow-hidden">
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 border-b border-[var(--glass-border)]">
                            <h2 className="text-xl font-bold m-0 flex items-center gap-2"><ActivitySquare className="text-green-400 w-5 h-5" /> 4️⃣ Performance Metrics</h2>
                        </div>
                        <table className="w-full text-sm text-left m-0">
                            <thead className="bg-[#1a1a2e] text-[#f97316]">
                                <tr>
                                    <th className="p-3 border-b border-[var(--glass-border)]">Metric</th>
                                    <th className="p-3 border-b border-[var(--glass-border)]">Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-[#00f0ff] font-bold">Response Time</td><td className="p-3 text-[var(--text-secondary)]">How fast the system replies (e.g. 500ms)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-green-400 font-bold">Throughput</td><td className="p-3 text-[var(--text-secondary)]">Amount of requests processed per second</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-yellow-400 font-bold">TPS</td><td className="p-3 text-[var(--text-secondary)]">Transactions Per Second (end-to-end flows)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-red-400 font-bold">Error Rate</td><td className="p-3 text-[var(--text-secondary)]">% of failed/dropped requests</td></tr>
                                <tr><td className="p-3 text-purple-400 font-bold">CPU/RAM</td><td className="p-3 text-[var(--text-secondary)]">Hardware Resource usage percentages</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Types Breakdown */}
                <h2 className="text-2xl font-bold mb-6">3️⃣ Core Types of Performance Testing</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    {[
                        { title: 'Load Testing', desc: 'Check system under normal expected peak user load (e.g. exactly 5,000 users).', color: '#00f0ff' },
                        { title: 'Stress Testing', desc: 'Push system beyond limits to find the absolute breaking point (e.g. 50,000 users).', color: '#f87171' },
                        { title: 'Spike Testing', desc: 'Simulate a sudden, massive increase in traffic (e.g. 0 to 20,000 in 10s).', color: '#fbbf24' },
                        { title: 'Soak (Endurance)', desc: 'Run a standard load for an extended duration (e.g. 8 solid hours) to find memory leaks.', color: '#a855f7' },
                        { title: 'Scalability', desc: 'Check how well the cloud infrastructure auto-scales up and down based on rules.', color: '#4ade80' },
                    ].map((type) => (
                        <div key={type.title} className="glass border border-[var(--glass-border)] rounded-xl p-5 hover:border-[var(--neon-orange)] transition-colors" style={{ '--tw-border-opacity': 1, borderColor: `rgba(255,255,255,0.1)` } as any}>
                            <h4 className="font-bold mb-2 mt-0" style={{ color: type.color }}>{type.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">{type.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Real Flow & Tools */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-8 bg-[rgba(0,0,0,0.3)] border-gray-700">
                        <h2 className="text-xl font-bold mb-6 mt-0">6️⃣ Real Project Flow</h2>
                        <div className="space-y-2 text-sm text-[var(--text-secondary)] list-decimal pl-4">
                            <p className="m-0 mb-1">1. Understand Business requirements & SLA</p>
                            <p className="m-0 mb-1">2. Identify critical bottlenecks (DB, network)</p>
                            <p className="m-0 mb-1">3. Define user load target & distribution</p>
                            <p className="m-0 mb-1">4. Create test scripts</p>
                            <p className="m-0 mb-1">5. Configure load testing profile/engine</p>
                            <p className="m-0 mb-1 text-[#f97316] font-bold">6. Execute the performance run</p>
                            <p className="m-0 mb-1 text-green-400 font-bold">7. Monitor server observability dashboards</p>
                            <p className="m-0 mb-1">8. Analyze reports & share recommendations</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">🛠 Evolution of Tools</h2>
                        <div className="space-y-4">
                            <div className="glass p-5 rounded-xl border-l-[3px] border-l-gray-400">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">7️⃣ Classic Arsenal</h4>
                                <div className="flex gap-2 mb-1"><Badge color="#fff">JMeter</Badge><Badge color="#fff">LoadRunner</Badge><Badge color="#fff">Gatling</Badge></div>
                                <p className="text-xs text-[var(--text-secondary)] m-0">Industry standard, highly reliable, massively adopted globally.</p>
                            </div>
                            <div className="glass p-5 rounded-xl border-l-[3px] border-l-[#00f0ff]">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">8️⃣ Modern Cloud Era</h4>
                                <div className="flex gap-2 mb-1"><Badge color="#00f0ff">k6 (Grafana)</Badge><Badge color="#00f0ff">BlazeMeter</Badge><Badge color="#00f0ff">Locust</Badge></div>
                                <p className="text-xs text-[var(--text-secondary)] m-0">Developer friendly, code-native, and scales automatically via cloud runners.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI & Observability */}
                <div className="glass-card p-8 mb-12 border border-[#a855f7]/30 bg-[rgba(168,85,247,0.03)]">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-3"><Cpu className="text-[#a855f7]" /> 9️⃣ AI & Deep Observability (2026 Shift)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                You no longer just look at "Pass/Fail". You must observe the entire architecture reacting dynamically using AI.
                            </p>
                            <ul className="space-y-2 text-sm text-[var(--text-primary)] mb-4 font-medium">
                                <li>🧠 <strong>AI Anomaly Detection</strong> spots strange usage automatically.</li>
                                <li>📊 <strong>Deep System Monitoring</strong> inside containers.</li>
                                <li>🚨 <strong>Smart Predictive Alerts</strong> before the crash happens.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center">
                            <strong className="block text-sm mb-2 text-[#a855f7]">Top Integrations Required:</strong>
                            <div className="flex flex-wrap gap-2">
                                <Badge color="#4338ca">Datadog</Badge>
                                <Badge color="#0ea5e9">New Relic</Badge>
                                <Badge color="#10b981">Dynatrace</Badge>
                                <Badge color="#f59e0b">Grafana Ecosystem</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scenarios & CI/CD */}
                <div className="grid lg:grid-cols-2 gap-6 mb-12">

                    <div className="glass-card p-6">
                        <h2 className="text-xl font-bold mt-0 mb-4">🔟 Scenario Profiles</h2>

                        <div className="mb-4 pb-4 border-b border-[var(--glass-border)]">
                            <strong className="text-[#00f0ff] block mb-1">Example: Big E-commerce Checkout</strong>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-none p-0">
                                <li><strong>Simulate:</strong> 2,000 users ordering concurrently.</li>
                                <li><strong>Target SLA:</strong> Payments succeed, zero DB deadlocks, NO 504 Gateway errors.</li>
                            </ul>
                        </div>

                        <div>
                            <strong className="text-[#f97316] block mb-1">Example: Real-Time Banking Login</strong>
                            <ul className="text-sm text-[var(--text-secondary)] m-0 list-none p-0">
                                <li><strong>Load:</strong> Consistent 10,000 users.</li>
                                <li><strong>Spike:</strong> Simulated Black Friday Traffic block.</li>
                                <li><strong>Target SLA:</strong> Token gen &lt; 1s, secure connections hold.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-t-4 border-t-green-500">
                        <h2 className="text-xl font-bold mt-0 mb-4">1️⃣1️⃣ Strict CI/CD Integration</h2>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">In 2026, performance testing is not an afterthought, it is automated inside the pipeline.</p>
                        <div className="bg-black/40 rounded p-4 font-mono text-xs text-gray-300">
                            <span className="text-purple-400">DEV PUSHES CODE</span> <br />
                            &nbsp;&nbsp;➔ CI runs fast headless K6 smoke test <br />
                            &nbsp;&nbsp;➔ Evaluate: (Response Time &gt; 300ms SLA?) <br />
                            &nbsp;&nbsp;➔ <span className="text-red-400 font-bold">YES = BUILD FAILS IMMEDIATELY</span> <br />
                            &nbsp;&nbsp;➔ <span className="text-green-400 font-bold">NO = DEPLOYED TO NEXT RING</span>
                        </div>
                    </div>

                </div>

                {/* Project Ideas */}
                <div className="glass-card p-8 mb-12 bg-gradient-to-r from-[rgba(234,88,12,0.03)] to-[rgba(168,85,247,0.03)] border-[#f97316]/30">
                    <h2 className="text-2xl font-bold mt-0 mb-6 text-center">1️⃣3️⃣ Career Builder Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-green-400">
                            <h4 className="text-center font-bold text-green-400 m-0 mb-3">Beginner</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Test a simple Open API with JMeter</li>
                                <li>Generate 100 concurrent virtual users</li>
                                <li>Measure & graph response times</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-yellow-400">
                            <h4 className="text-center font-bold text-yellow-400 m-0 mb-3">Intermediate</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Build an E-commerce payload using modern <strong>K6</strong></li>
                                <li>Integrate tests deeply into GitHub Actions</li>
                                <li>Construct a basic Grafana tracking dashboard</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-[#f97316]">
                            <h4 className="text-center font-bold text-[#f97316] m-0 mb-3">Advanced</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Microservices distributed cloud load validation</li>
                                <li>Database connection pooling tuning analysis</li>
                                <li>Cloud auto-scaling trigger validation mapping</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Best Practices & Interview */}
                <h2 className="text-2xl font-bold mb-6 text-center">1️⃣4️⃣ Best Practices & Interview Focus</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-6">
                        <h3 className="text-[#00f0ff] font-bold mt-0 mb-3">Non-Negotiable Rules</h3>
                        <ul className="text-sm text-[var(--text-secondary)] space-y-2 m-0 p-0 list-inside list-disc">
                            <li>Always define strict SLAs (Service Level Agreements) first.</li>
                            <li>Only test highly critical business path APIs.</li>
                            <li>Test incredibly realistic randomized user behavior, not perfectly linear robots.</li>
                            <li>Always analyze where the true Bottleneck is (DB connections vs CPU bound vs Network).</li>
                        </ul>
                    </div>

                    <div className="glass-card p-6">
                        <h3 className="text-[#a855f7] font-bold mt-0 mb-3">Ache the Interview</h3>
                        <ul className="text-sm text-[var(--text-secondary)] space-y-2 m-0 p-0 list-decimal pl-4 font-semibold">
                            <li>Exactly what is the difference between Load vs Stress vs Spike?</li>
                            <li>What is Throughput versus TPS?</li>
                            <li>How do you practically analyze a dense performance report?</li>
                            <li>How exactly do you integrate performance smoke tests within a CI/CD build chain?</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
