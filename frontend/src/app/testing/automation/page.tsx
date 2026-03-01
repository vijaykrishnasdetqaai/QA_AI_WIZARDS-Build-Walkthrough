/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Settings, Zap, ShieldCheck, Cog, CheckCircle2, Box, Cpu } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function AutomationTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(0,240,255,0.1)] text-[var(--neon-cyan)] border-[var(--neon-cyan)]">
                    🤖 Automation Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Automation Testing <br /> <span className="neon-text">Complete E2E Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Learn how to use software tools to run tests automatically. Save time, increase accuracy, and master the transition from classic tools to modern AI-powered testing.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Intro */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[var(--neon-purple)]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><Cog className="text-[var(--neon-purple)]" /> 1️⃣ What is Automation Testing?</h2>
                    <p className="m-0 text-[var(--text-secondary)]">
                        Automation Testing uses special software to <strong>run test cases, check results, and report bugs automatically</strong> instead of manual steps.
                        <br /><br />
                        <strong>Example:</strong> Instead of manually logging in and typing credentials each time, automation runs the login test with a script in seconds.
                    </p>
                </div>

                {/* Why & When NOT to */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2"><Zap className="text-yellow-400 w-5 h-5" /> 2️⃣ Why Use Automation?</h2>
                        <ul className="space-y-3 relative ml-3 list-none p-0 m-0">
                            {[
                                'Faster test execution',
                                'Reuse tests many times',
                                'Fewer human errors',
                                'Helps with regression testing',
                                'Supports continuous delivery (CI/CD)'
                            ].map((step, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--neon-cyan)] flex-shrink-0 mt-0.5" />
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card p-8 bg-[rgba(255,0,0,0.02)] border-red-900/30">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2 text-red-400">3️⃣ When NOT to Automate</h2>
                        <ul className="space-y-3 relative ml-3 list-none p-0 m-0">
                            {[
                                'Frequent requirement changes',
                                'One-time small tests',
                                'Tests that are extremely hard to script',
                                'Early project phase where features aren’t stable'
                            ].map((step, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                    <span className="text-red-400 font-bold">❌</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Automation Types */}
                <h2 className="text-2xl font-bold mb-6">4️⃣ Types of Automation Testing</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                    {[
                        { title: 'Regression', desc: 'Re-run old tests automatically after code changes.' },
                        { title: 'Smoke', desc: 'Basic critical path tests on every new build.' },
                        { title: 'API', desc: 'Backend testing (endpoints, data, status codes).' },
                        { title: 'UI', desc: 'User interface testing (buttons, layouts, flows).' },
                        { title: 'Performance', desc: 'Load & stress testing with virtual users.' },
                    ].map((type) => (
                        <div key={type.title} className="glass border border-[var(--glass-border)] rounded-xl p-5 hover:border-[var(--neon-purple)] transition-colors">
                            <h4 className="font-bold text-[var(--text-primary)] mb-2 mt-0">📌 {type.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] m-0">{type.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Frameworks & Classic Tools */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2"><Box className="text-[var(--neon-cyan)] w-5 h-5" /> 5️⃣ Automation Frameworks</h2>
                        <div className="space-y-4">
                            <div>
                                <strong className="block mb-1 text-[var(--neon-cyan)]">Data-Driven</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Test data kept outside scripts and fed at runtime.</p>
                            </div>
                            <div>
                                <strong className="block mb-1 text-[var(--neon-cyan)]">Keyword-Driven</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Tests built with keywords like "Click", "Enter Text" without complex coding.</p>
                            </div>
                            <div>
                                <strong className="block mb-1 text-[var(--neon-cyan)]">Hybrid</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Combination of both Data & Keyword driven.</p>
                            </div>
                            <div>
                                <strong className="block mb-1 text-[var(--neon-cyan)]">BDD (Behavior Driven)</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Given-When-Then style (plain English test logic like Cucumber).</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0">6️⃣ Classic Automation Tools</h2>

                        <div className="mb-4">
                            <h3 className="text-sm font-bold text-[var(--neon-purple)] mb-2 uppercase tracking-wider">🖥 UI & Functional</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Selenium</Badge>
                                <Badge>Appium</Badge>
                                <Badge>Cypress</Badge>
                                <Badge>Playwright</Badge>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h3 className="text-sm font-bold text-[var(--neon-purple)] mb-2 uppercase tracking-wider">🧪 API Automation</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Postman</Badge>
                                <Badge>RestAssured</Badge>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-[var(--neon-purple)] mb-2 uppercase tracking-wider">🔄 CI Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Jenkins</Badge>
                                <Badge>GitHub Actions</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern & AI Tools */}
                <h2 className="text-2xl font-bold mb-6">🚀 Evolution of Automation (2024–2026)</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="glass-card p-6 border-t-2 border-t-[var(--neon-cyan)]">
                        <h3 className="text-lg font-bold mb-4 mt-0">7️⃣ Modern Tools</h3>

                        <strong className="block text-sm mb-2 text-[var(--text-primary)]">No-Code / Low-Code</strong>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)] mb-4">
                            <li>✔ <strong>TestProject</strong> – record & play</li>
                            <li>✔ <strong>Katalon Studio</strong> – all-in-one suite</li>
                            <li>✔ <strong>Ranorex</strong> – desktop & mobile support</li>
                        </ul>

                        <strong className="block text-sm mb-2 text-[var(--text-primary)]">Cross-Platform Cloud Exec</strong>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)] m-0">
                            <li>✔ <strong>BrowserStack</strong> – multi-device lab</li>
                            <li>✔ <strong>LambdaTest</strong> – cloud test execution</li>
                        </ul>
                    </div>

                    <div className="glass-card p-6 border-t-2 border-t-[var(--neon-purple)] bg-[rgba(168,85,247,0.03)]">
                        <h3 className="text-lg font-bold mb-4 mt-0 flex items-center gap-2"><Cpu className="text-[var(--neon-purple)]" /> 8️⃣ AI-Powered Testing</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">AI reduces manual scripting, self-heals broken locators, and improves reliability.</p>

                        <ul className="space-y-2 text-sm text-[var(--text-primary)] mb-4 font-medium">
                            <li>🧠 <strong>Mabl</strong> – Auto detects changes & self-heals</li>
                            <li>🧠 <strong>Testim</strong> – AI based intelligent locators</li>
                            <li>🧠 <strong>Functionize</strong> – AI powered web testing</li>
                            <li>🧠 <strong>AI Assistants (ChatGPT)</strong> for test case generation</li>
                        </ul>

                        <div className="bg-black/30 p-3 rounded-lg text-xs text-[var(--text-secondary)]">
                            <strong>AI tools can:</strong> Suggest test cases, self-heal selectors when UI changes, and analyze logs/outcomes intelligently.
                        </div>
                    </div>
                </div>

                {/* Test Flow & Skills */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    <div className="glass-card p-6 lg:col-span-1">
                        <h2 className="text-lg font-bold mt-0 mb-4">9️⃣ Basic Skills Needed</h2>
                        <ul className="space-y-2 text-sm text-[var(--text-secondary)] m-0 p-0 list-none">
                            <li className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2">✅ Basic programming (Java/JS/Python)</li>
                            <li className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2">✅ HTML / CSS / DOM</li>
                            <li className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2">✅ SQL basics</li>
                            <li className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2">✅ Git & Version Control</li>
                            <li className="flex items-center gap-2 border-b border-[var(--glass-border)] pb-2">✅ CI/CD pipelines basics</li>
                            <li className="flex items-center gap-2">✅ API testing fundamentals</li>
                        </ul>
                    </div>

                    <div className="glass-card p-6 lg:col-span-2">
                        <h2 className="text-lg font-bold mt-0 mb-4 flex items-center gap-2"><Settings className="text-[var(--neon-cyan)]" /> 🔟 Automation Test Flow (Real Project)</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
                            {[
                                '1. Identify tests to automate', '2. Setup environment & stack', '3. Create automation scripts',
                                '4. Push to Git', '5. Integrate in CI/CD pipeline', '6. Run on every PR/build',
                                '7. Report & analyze failures', '8. Maintain scripts'
                            ].map((step, i) => (
                                <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[var(--glass-border)] rounded-xl flex items-center justify-center p-3">
                                    {step}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Ideas & Summary */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">1️⃣1️⃣ Real Project Ideas</h2>
                        <div className="space-y-4">
                            <div className="glass p-5 rounded-xl border-l-2 border-l-green-400">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">Beginner</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Automate login & logout flows, simple Form-fill tests, basic Smoke sequence.</p>
                            </div>
                            <div className="glass p-5 rounded-xl border-l-2 border-l-blue-400">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">Intermediate</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Automate API tests bound to a Jenkins pipeline. E-commerce workflow (search, cart, checkout via UI).</p>
                            </div>
                            <div className="glass p-5 rounded-xl border-l-2 border-l-[var(--neon-purple)]">
                                <h4 className="font-bold text-[var(--neon-purple)] m-0 mb-2">Advanced</h4>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Implement AI self-healing selectors. Setup massive Cross-browser/Device capabilities. Real-time CI/CD Performance automation.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mt-0 mb-4">1️⃣2️⃣ Best Practices</h2>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)] m-0 p-0 list-inside list-disc">
                                <li>Pick highly stable features to automate</li>
                                <li>Keep scripts highly modular and reusable</li>
                                <li>Implement solid visual reporting (Allure, HTML)</li>
                                <li>Always run tests fully within CI/CD boundaries</li>
                                <li>Adopt AI tooling to minimize massive maintenance</li>
                            </ul>
                        </div>

                        <div className="glass-card p-6 bg-gradient-to-br from-[rgba(0,240,255,0.05)] to-[rgba(168,85,247,0.05)]">
                            <h2 className="text-lg font-bold mt-0 mb-2">📌 Summary</h2>
                            <p className="text-sm text-[var(--text-secondary)] m-0">
                                Automation Testing helps teams <em>test faster, more accurately, and efficiently at scale</em>. In 2026, combining <strong>classic robust tools + cloud device platforms + new AI-powered healing tools</strong> forms an unbeatable testing stack.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
