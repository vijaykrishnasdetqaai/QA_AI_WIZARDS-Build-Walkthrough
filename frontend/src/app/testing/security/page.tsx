/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import {
    ShieldAlert, ShieldCheck, KeyRound, Lock, UserX, GlobeLock, SmartphoneNfc,
    Database, AlertTriangle, Bug, TerminalSquare, Search, Fingerprint, RefreshCcw, CheckCircle2
} from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function SecurityTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(239,68,68,0.1)] text-[#ef4444] border-[#ef4444]">
                    🔐 Security Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Security Testing <br /> <span className="neon-text" style={{ textShadow: '0 0 10px #ef4444, 0 0 20px #ef4444' }}>Complete E2E Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Defend applications against modern cyber threats. Master authentication, authorization, OWASP Top 10 vulnerabilities, and standard security auditing practices for Web, Mobile, and API systems.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Intro */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-8 border-l-4 border-l-[#ef4444] bg-gradient-to-r from-[rgba(239,68,68,0.03)] to-transparent">
                        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><ShieldAlert className="text-[#ef4444]" /> 1️⃣ What is Security Testing?</h2>
                        <div className="space-y-4 text-[var(--text-secondary)]">
                            <p className="m-0 text-sm">
                                Security Testing ensures that confidential data is isolated, the strict integrity of the system is maintained, and unauthorized entities (hackers) cannot exploit logic gaps or vulnerabilities to extract data or bypass access rules.
                            </p>
                            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[var(--glass-border)] text-sm font-mono text-gray-300">
                                <strong>Critical Violation:</strong> <br />
                                If User A modifies a URL parameter from `id=101` to `id=102` and successfully views User B's banking details... <em>This is a fatal Information Disclosure breach.</em>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border border-yellow-900/40 bg-[rgba(234,179,8,0.02)]">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2 text-yellow-500"><GlobeLock className="w-5 h-5 text-yellow-500" /> 2️⃣ Why it's Critical in 2026</h2>
                        <ul className="space-y-3 relative ml-3 list-none p-0 m-0 text-sm text-[var(--text-secondary)]">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>Modern apps instantly handle biometrics, massive cloud data lakes, and public Open-APIs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>Breaches result in catastrophic legal penalties (GDPR/CCPA) and permanent loss of public brand trust.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>Equifax, Facebook, and massive global corporations have suffered catastrophic fallout from improperly tested auth rules.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Security Types */}
                <h2 className="text-2xl font-bold mb-6">3️⃣ Core Types of Security Audits</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {[
                        { tag: 'Vulnerability Scan', desc: 'Running massive automated scanners against code syntax to identify known CVE gaps.', color: 'border-blue-500' },
                        { tag: 'Penetration Testing', desc: 'Simulating a targeted, malicious real-world "White Hat" hacker attack on specific endpoints.', color: 'border-red-500' },
                        { tag: 'Risk Assessment', desc: 'Identifying internal business logic risks, like weak password policies or untracked sensitive data.', color: 'border-yellow-500' },
                        { tag: 'Security Auditing', desc: 'A strict, deep compliance checklist verified line-by-line (e.g. PCI-DSS compliance).', color: 'border-green-500' },
                        { tag: 'Ethical Hacking', desc: 'Hiring heavily certified offensive engineers (CEH) to aggressively break the deployed system.', color: 'border-purple-500' },
                    ].map((el, i) => (
                        <div key={i} className={`bg-black/40 p-5 rounded-xl border-t-2 ${el.color}`}>
                            <h4 className="font-bold text-white mt-0 mb-2">{el.tag}</h4>
                            <p className="text-xs text-gray-400 m-0">{el.desc}</p>
                        </div>
                    ))}
                </div>

                {/* OWASP */}
                <div className="glass-card p-8 mb-12 border border-[#ef4444]/30 bg-[rgba(239,68,68,0.03)]">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-3"><AlertTriangle className="text-[#ef4444]" /> 4️⃣ The OWASP Top Web Risks</h2>
                    <p className="text-sm text-[var(--text-secondary)] mb-6">The Open Web Application Security Project strictly defines the most severe globally recorded vulnerabilities. Every QA must memorize these.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="glass p-3 border-l-2 border-l-red-500"><strong className="text-white text-sm">1. Broken Access Control:</strong> <span className="text-xs text-gray-400 block">Users bypassing restricted URL routing rules.</span></div>
                        <div className="glass p-3 border-l-2 border-l-orange-500"><strong className="text-white text-sm">2. Cryptographic Failures:</strong> <span className="text-xs text-gray-400 block">Storing raw API keys or passwords in plaintext.</span></div>
                        <div className="glass p-3 border-l-2 border-l-yellow-500"><strong className="text-white text-sm">3. Injection (SQLi):</strong> <span className="text-xs text-gray-400 block">Injecting raw malicious DB commands via UI inputs.</span></div>
                        <div className="glass p-3 border-l-2 border-l-blue-500"><strong className="text-white text-sm">4. Insecure Design:</strong> <span className="text-xs text-gray-400 block">Fundamentally weak architectural decisions.</span></div>
                        <div className="glass p-3 border-l-2 border-l-purple-500"><strong className="text-white text-sm">5. Security Config Failure:</strong> <span className="text-xs text-gray-400 block">Leaving default admin passwords on production DBs.</span></div>
                        <div className="glass p-3 border-l-2 border-l-green-500"><strong className="text-white text-sm">6. XSS (Cross-Site Scripting):</strong> <span className="text-xs text-gray-400 block">Executing malicious JS payloads inside another user's browser view.</span></div>
                        <div className="glass p-3 border-l-2 border-l-cyan-500"><strong className="text-white text-sm">7. Auth Failures:</strong> <span className="text-xs text-gray-400 block">Weak token TTL expiration allowing prolonged hijacked sessions.</span></div>
                    </div>
                </div>

                {/* Auth Testing */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-6 border-l-4 border-l-[#3b82f6]">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><KeyRound className="w-5 h-5 text-[#3b82f6]" /> 5️⃣ Authentication Testing</h2>
                        <p className="text-xs text-blue-300 font-mono mb-4 bg-blue-900/20 p-2 rounded">"Identifying who the user actually is."</p>
                        <div className="space-y-3">
                            <ul className="text-sm text-[var(--text-secondary)] list-inside list-disc m-0 p-0">
                                <li>Strict Login success / Failure validations.</li>
                                <li>Validating rigorous password hash encryption formats.</li>
                                <li>Account locking behavior after 5 consecutive failed attempts.</li>
                                <li>Strict OTP (One Time Pass) generation and precise expiry thresholds.</li>
                                <li>Strict JWT session timeout termination rules.</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Users circumventing the password field solely by pressing Enter on empty values.</div>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-l-4 border-l-[#a855f7]">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><Lock className="w-5 h-5 text-[#a855f7]" /> 6️⃣ Authorization Testing</h2>
                        <p className="text-xs text-purple-300 font-mono mb-4 bg-purple-900/20 p-2 rounded">"What is the authenticated user allowed to do?"</p>
                        <div className="space-y-3">
                            <ul className="text-sm text-[var(--text-secondary)] list-inside list-disc m-0 p-0">
                                <li>Normal free-tier users restricted from rendering Admin UI portals.</li>
                                <li>Preventing manual URL parameter manipulation for elevation of privilege.</li>
                                <li>API backend rejecting non-Admin tokens targeting administrative endpoints.</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Standard user manually mutating URL schema to `/admin/dashboard` gracefully bypassing middleware protections.</div>
                        </div>
                    </div>

                </div>

                {/* Domain specific security */}
                <h2 className="text-2xl font-bold mb-6">7️⃣ Domain Specific Cyber Validation</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">

                    <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
                        <h3 className="font-bold text-white mt-0 mb-4 flex items-center gap-2"><TerminalSquare className="w-5 h-5 text-[#00f0ff]" /> Web Application Protocol</h3>
                        <ul className="text-xs text-gray-300 space-y-3 list-none p-0 m-0">
                            <li><strong className="block text-red-400">SQL Injection:</strong> Testing malicious payloads like `' OR 1=1 --` against login inputs to bypass authentication.</li>
                            <li><strong className="block text-orange-400">XSS (Cross-Site Scripting):</strong> Sinking `&lt;script&gt;alert('Hack')&lt;/script&gt;` into User Profile comment blocks to observe payload execution.</li>
                            <li><strong className="block text-yellow-400">CSRF:</strong> Verifying Cross-Site Request Forgery tokens strictly invalidate cross-origin malicious embedded form actions.</li>
                            <li><strong className="block text-green-400">HTTPS Strictness:</strong> Confirming total isolation of insecure HTTP protocols and mixed content errors.</li>
                        </ul>
                    </div>

                    <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
                        <h3 className="font-bold text-white mt-0 mb-4 flex items-center gap-2"><SmartphoneNfc className="w-5 h-5 text-[#a855f7]" /> Mobile Architecture Security</h3>
                        <ul className="text-xs text-gray-300 space-y-3 list-none p-0 m-0">
                            <li><strong className="block text-purple-400">Root/Jailbreak Sensors:</strong> Banking app must violently crash or lock if detecting Rooted OS states.</li>
                            <li><strong className="block text-pink-400">Keychain Encryption:</strong> Verifying local device caching is strictly fully encrypted and masked.</li>
                            <li><strong className="block text-indigo-400">Static AST Scans:</strong> Validating zero hardcoded AWS or API secret keys exist inside compiled `.apk` binary files.</li>
                            <li><strong className="block text-blue-400">Biometric Fallbacks:</strong> Ensuring Fingerprint/FaceID scanners strictly hook into OS-level secure enclaves without local cache bypass logic.</li>
                        </ul>
                    </div>

                </div>

                {/* Automation & Tools */}
                <div className="glass-card p-8 mb-12 border border-[#f59e0b]/30 bg-[rgba(245,158,11,0.03)]">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-3"><Search className="text-[#f59e0b]" /> 1️⃣2️⃣ Essential Security Tooling (2026)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <strong className="block text-sm mb-3 text-white">Manual / Tactical Break Scanners</strong>
                            <div className="space-y-3">
                                <div className="flex gap-2">
                                    <Badge color="#f97316">Burp Suite Pro</Badge>
                                    <Badge color="#0ea5e9">OWASP ZAP</Badge>
                                </div>
                                <p className="text-xs text-gray-400 m-0">Invaluable for intercepting active HTTP requests, forging payloads, sniffing API traffic, and executing automated SQLi injection spider crawling.</p>
                                <div className="flex gap-2 mt-3">
                                    <Badge color="#ef4444">Metasploit</Badge>
                                    <Badge color="#10b981">Nmap (Network Mapping)</Badge>
                                </div>
                            </div>
                        </div>
                        <div>
                            <strong className="block text-sm mb-3 text-white">Enterprise Cloud Observability & Auditing</strong>
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <Badge color="#a855f7">Qualys</Badge>
                                    <Badge color="#3b82f6">Tenable Suite</Badge>
                                </div>
                                <p className="text-xs text-gray-400 m-0">Continuous massive infrastructure vulnerability scanners hooking directly into cloud deployments (AWS, GCP) and container repositories (Docker) alerting on CVE weaknesses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Real Time Flow */}
                <div className="glass-card p-8 mb-12 border-t-4 border-t-red-500 bg-black/60">
                    <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><RefreshCcw className="w-5 h-5 text-red-500" /> 1️⃣3️⃣ Real-Time Target Objective: Banking Application</h2>
                    <div className="p-4 bg-[rgba(255,0,0,0.03)] rounded font-mono text-sm space-y-2">
                        <div className="flex gap-3"><span className="text-gray-500">1.</span><span className="text-gray-300">Validate baseline JWT login tokenization formats & hashing rules.</span></div>
                        <div className="flex gap-3"><span className="text-gray-500">2.</span><span className="text-gray-300">Manipulate local JWT claims locally, re-sign, and test for backend strict rejection.</span></div>
                        <div className="flex gap-3"><span className="text-gray-500">3.</span><span className="text-gray-300">Force application session idle timeout limit trigger (TTL max bounds).</span></div>
                        <div className="flex gap-3"><span className="text-gray-500">4.</span><span className="text-gray-300">Inject heavily mutated SQL escape clauses into the unified search bar parameters.</span></div>
                        <div className="flex gap-3"><span className="text-gray-500">5.</span><span className="text-gray-300">Execute ZAP unauthenticated spider scan over public UI routes.</span></div>
                        <div className="flex gap-3"><span className="text-green-500">6.</span><span className="text-gray-400">Generate compliance metrics report with distinct Severity grading (Blocker, High).</span></div>
                    </div>
                </div>

            </div>
        </div>
    );
}
