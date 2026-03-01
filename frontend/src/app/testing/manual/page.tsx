'use client';

import { motion } from 'framer-motion';
import { FileSearch, CheckCircle2, ShieldAlert, FileText, ArrowRight, Video, FileBadge } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function ManualTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(168,85,247,0.1)] text-[var(--neon-purple)] border-[var(--neon-purple)]">
                    🧪 Software Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Manual Software Testing <br /> <span className="neon-text">End-to-End Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    The complete, modern guide to mastering manual testing. Learn how to think like a user, break software intelligently, and ensure flawless quality before release.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Intro */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[var(--neon-cyan)]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><FileSearch className="text-[var(--neon-cyan)]" /> 1️⃣ What is Manual Testing?</h2>
                    <p className="m-0 text-[var(--text-secondary)]">
                        Manual Testing is the process of testing software manually like a real user to find bugs before software goes live. It does not use automation tools.
                        <br /><br />
                        <strong>Imagine:</strong> You open an app like WhatsApp and check steps one by one to see if messages send correctly — that is Manual Testing.
                    </p>
                </div>

                {/* SDLC & STLC Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0">2️⃣ SDLC (Software Development Life Cycle)</h2>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">Software is not created randomly — it goes through strict phases:</p>
                        <ol className="space-y-3 relative border-l border-[var(--glass-border)] ml-3">
                            {['Requirement Analysis', 'Design & Prototyping', 'Coding / Development', 'Testing / QA', 'Deployment', 'Maintenance'].map((step, i) => (
                                <li key={step} className="pl-6 relative">
                                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--neon-cyan)]"></span>
                                    <span className="font-medium text-[var(--text-primary)]">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0">3️⃣ STLC (Software Testing Life Cycle)</h2>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">Testing has its own structured life cycle:</p>
                        <div className="space-y-3">
                            {[
                                { phase: 'Requirement Analysis', desc: 'Understand what to test' },
                                { phase: 'Test Planning', desc: 'Decide scope & effort' },
                                { phase: 'Test Case Design', desc: 'Write test steps' },
                                { phase: 'Environment Setup', desc: 'Setup physical/virtual testing place' },
                                { phase: 'Test Execution', desc: 'Run tests' },
                                { phase: 'Test Closure', desc: 'Final reporting & metrics' },
                            ].map((item) => (
                                <div key={item.phase} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--glass-border)]">
                                    <span className="font-semibold text-sm text-[var(--neon-purple)]">{item.phase}</span>
                                    <span className="text-sm text-[var(--text-secondary)]">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Concepts */}
                <h2 className="text-2xl font-bold mb-6">4️⃣ Types & Levels of Testing</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-bold mb-4 text-[var(--neon-cyan)]">Functional vs Non-Functional</h3>
                        <div className="space-y-4">
                            <div>
                                <strong className="block mb-1">Functional Testing:</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Checks WHAT the software does (e.g., Can the user login? Does the checkout work?).</p>
                            </div>
                            <div>
                                <strong className="block mb-1">Non-Functional Testing:</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Checks HOW WELL the software performs (e.g., Speed, Security, Usability, Load capacity).</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-bold mb-4 text-[var(--neon-purple)]">Testing Levels</h3>
                        <ul className="space-y-2 m-0 text-sm">
                            <li className="flex justify-between border-b border-[var(--glass-border)] pb-2"><strong className="text-[var(--text-primary)]">Unit Testing</strong> <span className="text-[var(--text-secondary)]">By Developers</span></li>
                            <li className="flex justify-between border-b border-[var(--glass-border)] pb-2"><strong className="text-[var(--text-primary)]">Integration</strong> <span className="text-[var(--text-secondary)]">Modules combined</span></li>
                            <li className="flex justify-between border-b border-[var(--glass-border)] pb-2"><strong className="text-[var(--text-primary)]">System</strong> <span className="text-[var(--text-secondary)]">Full E2E check</span></li>
                            <li className="flex justify-between"><strong className="text-[var(--text-primary)]">UAT</strong> <span className="text-[var(--text-secondary)]">By Clients/End-users</span></li>
                        </ul>
                    </div>
                </div>

                {/* Terminologies Matrix */}
                <h2 className="text-2xl font-bold mb-6">5️⃣ Important Testing Concepts</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    {[
                        { title: 'Black Box', desc: 'Tester does not see code.' },
                        { title: 'White Box', desc: 'Tester sees code (Devs).' },
                        { title: 'Smoke', desc: 'Basic critical features check after build.' },
                        { title: 'Sanity', desc: 'Deep check of specific new bug fix.' },
                        { title: 'Regression', desc: 'Ensure old features still work after changes.' },
                        { title: 'Exploratory', desc: 'Explore randomly without strict test cases.' },
                    ].map((concept) => (
                        <div key={concept.title} className="glass border border-[var(--glass-border)] rounded-xl p-5 hover:border-[var(--neon-cyan)] transition-colors">
                            <h4 className="font-bold text-[var(--text-primary)] mb-2 mt-0">{concept.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">{concept.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bug Life Cycle & Documentation */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8 bg-[rgba(168,85,247,0.02)]">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><ShieldAlert className="text-[var(--neon-purple)] w-5 h-5" /> Bug Life Cycle</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['New', 'Assigned', 'Open', 'Fixed', 'Retest', 'Closed'].map((status, i) => (
                                <div key={status} className="flex items-center">
                                    <Badge color={i === 5 ? '#10b981' : '#a855f7'}>{status}</Badge>
                                    {i < 5 && <ArrowRight className="w-4 h-4 mx-1 text-[var(--text-secondary)]" />}
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] italic">* If a bug returns during Retest, it goes to REOPENED status.*</p>

                        <div className="mt-6 border-t border-[var(--glass-border)] pt-4">
                            <h3 className="text-sm font-bold mb-3">Severity vs Priority</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between bg-[rgba(0,0,0,0.2)] p-2 rounded"><span className="text-red-400 font-medium">Severity</span> <span className="text-[var(--text-secondary)]">How big is the technical impact?</span></div>
                                <div className="flex justify-between bg-[rgba(0,0,0,0.2)] p-2 rounded"><span className="text-orange-400 font-medium">Priority</span> <span className="text-[var(--text-secondary)]">How soon must it be fixed?</span></div>
                                <p className="text-xs mt-2 text-[var(--text-secondary)]"><strong>Example:</strong> Login broken = High Sev + High Prio. Small typo on legal page = Low Sev + Low Prio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 bg-[rgba(0,240,255,0.02)]">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><FileText className="text-[var(--neon-cyan)] w-5 h-5" /> Test Case Example & Docs</h2>
                        <ul className="space-y-3 m-0 text-sm list-none p-0 mb-6">
                            <li><strong className="text-[var(--neon-cyan)]">Test Plan:</strong> Goals, scope, risks, priority.</li>
                            <li><strong className="text-[var(--neon-cyan)]">Test Case:</strong> Step-by-step test document.</li>
                            <li><strong className="text-[var(--neon-cyan)]">Test Scenario:</strong> High-level idea of a test.</li>
                            <li><strong className="text-[var(--neon-cyan)]">RTM:</strong> Requirement Traceability Matrix connects Req -&gt; Test Case -&gt; Bug.</li>
                        </ul>

                        <div className="bg-black/40 rounded-lg p-4 font-mono text-sm border border-[var(--glass-border)]">
                            <div className="text-[var(--neon-purple)] font-bold mb-2">TC_001_LOGIN_VALID</div>
                            <p className="text-gray-400 m-0 mb-1">1. Go to login page</p>
                            <p className="text-gray-400 m-0 mb-1">2. Enter correct username</p>
                            <p className="text-gray-400 m-0 mb-1">3. Enter correct password</p>
                            <p className="text-gray-400 m-0 mb-2">4. Click login button</p>
                            <div className="text-[var(--neon-cyan)] mt-2">Expected: User dashboards loads successfully.</div>
                        </div>
                    </div>
                </div>

                {/* Real Time Project Flow */}
                <div className="glass-card p-8 mb-12">
                    <h2 className="text-2xl font-bold mt-0 mb-6 text-center">🏢 Real-Time Project Flow – E2E (E-Commerce App)</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm">
                        {[
                            '1. Get requirements (BA)', '2. Analyze requirements', '3. Prepare test plan',
                            '4. Write test cases', '5. Setup test environment', '6. Smoke test build',
                            '7. Execute functional tests', '8. Report bugs (Jira)', '9. Retest & regression',
                            '10. Final report & closure'
                        ].map((step, i) => (
                            <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl flex items-center justify-center p-4 hover:border-[var(--neon-cyan)] transition-colors">
                                {step}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Ideas & Tools */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><CheckCircle2 className="text-[var(--neon-cyan)]" /> Project Ideas for Practice</h2>
                        <div className="space-y-4">
                            <div className="glass p-5 rounded-xl">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">Beginner</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Login validation, Registration email verification, Search feature, Profile edits.</p>
                            </div>
                            <div className="glass p-5 rounded-xl">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">Intermediate</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">E-commerce cart logic, Payment workflow simulation, Filtering & Sorting logic.</p>
                            </div>
                            <div className="glass p-5 rounded-xl border border-[var(--neon-purple)]">
                                <h4 className="font-bold text-[var(--neon-purple)] m-0 mb-2">Advanced</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Cross-device responsive testing, API manual testing (Postman), Basic security validations.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><FileBadge className="text-[var(--neon-purple)]" /> Top Interview Focus & Tools</h2>
                        <div className="glass-card p-6 h-[calc(100%-2.5rem)]">
                            <h4 className="font-bold text-[var(--text-primary)] m-0 mb-3">Modern Tools (2026 Focus)</h4>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <Badge>Jira</Badge>
                                <Badge>TestRail</Badge>
                                <Badge>Xray</Badge>
                                <Badge>Zephyr</Badge>
                                <Badge color="#00f0ff">Azure DevOps</Badge>
                            </div>

                            <h4 className="font-bold text-[var(--text-primary)] m-0 mb-3">Be ready to explain:</h4>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)] m-0 p-0 list-inside list-disc">
                                <li>Bug Life Cycle (in detail)</li>
                                <li>Severity vs Priority (with examples)</li>
                                <li>Smoke vs Sanity</li>
                                <li>How RTM guarantees coverage</li>
                                <li>Agile standard ceremonies (Sprints, Standups)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
