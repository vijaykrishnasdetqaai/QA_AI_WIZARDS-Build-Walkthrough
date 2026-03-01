/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Server, ShieldCheck, Zap, Cog, CheckCircle2, Box, Cpu, FileJson, Key, LayoutTemplate } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function ApiTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(255,0,255,0.1)] text-[#ff00ff] border-[#ff00ff]">
                    🔌 API Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    API Testing <br /> <span className="neon-text" style={{ textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff' }}>Complete E2E Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Master the backend. Learn how to validate communication between services, understand HTTP methods, secure endpoints, and automate your API tests with modern tools.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Intro */}
                <div className="glass-card p-8 mb-10 border-l-4 border-l-[#ff00ff]">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><Server className="text-[#ff00ff]" /> 1️⃣ What is an API? & What is API Testing?</h2>
                    <div className="space-y-4 text-[var(--text-secondary)]">
                        <p className="m-0">
                            API stands for <strong>Application Programming Interface</strong>. It acts as the messenger between the frontend UI and the backend database.
                        </p>
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[var(--glass-border)] text-sm font-mono">
                            <strong>Example:</strong> You open the Amazon app ➔ click "Search" ➔ Frontend sends an API request to the server ➔ Server returns the product list.
                        </div>
                        <p className="m-0">
                            <strong>API Testing</strong> means testing the backend directly without the UI. We check if the Request, Response, Status Code, Data, Security, and Performance are completely correct.
                        </p>
                    </div>
                </div>

                {/* Why & Types of APIs */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2"><Zap className="text-yellow-400 w-5 h-5" /> 3️⃣ Why is it Important?</h2>
                        <ul className="space-y-3 relative ml-3 list-none p-0 m-0 text-sm">
                            {[
                                'Faster than UI testing',
                                'Finds deep backend bugs early',
                                'Highly stable tests (less flaky)',
                                'Absolutely required for Microservices',
                                'Heavily used in CI/CD pipelines'
                            ].map((step, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                    <CheckCircle2 className="w-5 h-5 text-[#ff00ff] flex-shrink-0 mt-0.5" />
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-center font-bold text-white mt-6 pt-4 border-t border-[var(--glass-border)]">Modern 2026 apps are all API-driven.</p>
                    </div>

                    <div className="glass-card p-8 border-t-2 border-t-[#ff00ff]">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2"><FileJson className="text-[#ff00ff] w-5 h-5" /> 4️⃣ Types of APIs</h2>
                        <div className="space-y-4">
                            <div>
                                <strong className="block mb-1 text-white">REST API (Most Popular)</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Uses JSON format. Standard for web apps.</p>
                            </div>
                            <div>
                                <strong className="block mb-1 text-white">SOAP API</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Uses strictly XML format. Common in legacy banking.</p>
                            </div>
                            <div>
                                <strong className="block mb-1 text-white">GraphQL API</strong>
                                <p className="text-sm text-[var(--text-secondary)] m-0">Client specifically decides exactly what data fields to fetch.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* HTTP Methods & Status Codes */}
                <h2 className="text-2xl font-bold mb-6">5️⃣ Core HTTP Concepts (Interview Heavy)</h2>
                <div className="grid lg:grid-cols-2 gap-6 mb-12">

                    <div className="glass-card p-0 overflow-hidden">
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 border-b border-[var(--glass-border)]">
                            <h3 className="m-0 text-lg font-bold">HTTP Methods</h3>
                        </div>
                        <table className="w-full text-sm text-left m-0">
                            <thead className="bg-[#1a1a2e] text-[#a855f7]">
                                <tr>
                                    <th className="p-3 border-b border-[var(--glass-border)]">Method</th>
                                    <th className="p-3 border-b border-[var(--glass-border)]">Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-[#00f0ff] font-bold">GET</td><td className="p-3 text-[var(--text-secondary)]">Fetch data (e.g. <code>GET /users</code>)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-green-400 font-bold">POST</td><td className="p-3 text-[var(--text-secondary)]">Create data (e.g. <code>POST /login</code>)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-yellow-400 font-bold">PUT</td><td className="p-3 text-[var(--text-secondary)]">Update full data body</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-orange-400 font-bold">PATCH</td><td className="p-3 text-[var(--text-secondary)]">Update partial data fields</td></tr>
                                <tr><td className="p-3 text-red-400 font-bold">DELETE</td><td className="p-3 text-[var(--text-secondary)]">Delete data (e.g. <code>DELETE /order/101</code>)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="glass-card p-0 overflow-hidden">
                        <div className="bg-[rgba(255,255,255,0.03)] p-4 border-b border-[var(--glass-border)]">
                            <h3 className="m-0 text-lg font-bold">Status Codes</h3>
                        </div>
                        <table className="w-full text-sm text-left m-0">
                            <thead className="bg-[#1a1a2e] text-[#00f0ff]">
                                <tr>
                                    <th className="p-3 border-b border-[var(--glass-border)]">Code</th>
                                    <th className="p-3 border-b border-[var(--glass-border)]">Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-green-400 font-bold">200 / 201</td><td className="p-3 text-[var(--text-secondary)]">Success / Created Successfully</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-yellow-400 font-bold">400</td><td className="p-3 text-[var(--text-secondary)]">Bad Request (Invalid body/params)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-orange-400 font-bold">401</td><td className="p-3 text-[var(--text-secondary)]">Unauthorized (Missing/Invalid Token)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-red-400 font-bold">403</td><td className="p-3 text-[var(--text-secondary)]">Forbidden (Token valid, lack permissions)</td></tr>
                                <tr className="border-b border-[var(--glass-border)]"><td className="p-3 text-red-500 font-bold">404</td><td className="p-3 text-[var(--text-secondary)]">Not Found (Wrong Endpoint)</td></tr>
                                <tr><td className="p-3 text-purple-400 font-bold">500</td><td className="p-3 text-[var(--text-secondary)]">Server Error (Backend crashed)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Breakdown & Flow */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-8 bg-[rgba(0,0,0,0.3)] border-gray-700">
                        <h2 className="text-xl font-bold mb-6 mt-0">7️⃣ Anatomy of an API Request</h2>
                        <div className="bg-black border border-gray-700 p-4 rounded-lg font-mono text-sm break-all mb-4">
                            <span className="text-[#00f0ff]">https://</span><span className="text-white">api.shop.com</span>
                            <span className="text-[#ff00ff]">/users</span><span className="text-yellow-400">?id=101</span>
                        </div>
                        <ul className="space-y-2 text-sm list-none p-0 m-0">
                            <li><strong className="text-white bg-black px-2 py-0.5 rounded">Base URL</strong> ➔ api.shop.com</li>
                            <li><strong className="text-[#ff00ff] bg-black px-2 py-0.5 rounded">Endpoint</strong> ➔ /users</li>
                            <li><strong className="text-yellow-400 bg-black px-2 py-0.5 rounded">Query Param</strong> ➔ id=101</li>
                            <li className="pt-2"><strong className="text-gray-400">Headers:</strong> Metadata like Content-Type: application/json</li>
                            <li><strong className="text-gray-400">Body:</strong> The actual JSON payload</li>
                            <li><strong className="text-gray-400">Auth:</strong> Bearer tokens or API Keys</li>
                        </ul>
                    </div>

                    <div className="glass-card p-8">
                        <h2 className="text-xl font-bold mb-6 mt-0">9️⃣ API Testing Process flow</h2>
                        <div className="space-y-2 text-sm text-[var(--text-secondary)] list-decimal pl-4">
                            <p className="m-0 mb-1">1. Understand API docs (Swagger / OpenAPI)</p>
                            <p className="m-0 mb-1">2. Identify endpoints & prepare data</p>
                            <p className="m-0 mb-1">3. Send request & validate status code</p>
                            <p className="m-0 mb-1">4. Validate response JSON schema & exact Body</p>
                            <p className="m-0 mb-1">5. Validate response headers</p>
                            <p className="m-0 mb-1 text-[#ff00ff] font-bold">6. Automate tests</p>
                            <p className="m-0 mb-1 text-[#ff00ff] font-bold">7. Add to CI/CD pipelines</p>
                        </div>
                    </div>
                </div>

                {/* Tools & Auth */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">🔟 API Tools Hierarchy</h2>
                        <div className="space-y-4">
                            <div className="glass p-5 rounded-xl border-l-[3px] border-l-gray-400">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">Manual / Hybrid Tools</h4>
                                <div className="flex gap-2 mb-1"><Badge color="#ff6c37">Postman</Badge><Badge color="#6cb52d">SoapUI</Badge></div>
                                <p className="text-xs text-[var(--text-secondary)] m-0">Most popular for creating collections & basic automation.</p>
                            </div>
                            <div className="glass p-5 rounded-xl border-l-[3px] border-l-green-400">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">Code Automation Tools</h4>
                                <div className="flex gap-2 mb-1"><Badge>RestAssured</Badge><Badge>Karate</Badge><Badge>Newman</Badge></div>
                                <p className="text-xs text-[var(--text-secondary)] m-0">Java/JS based execution tailored for CI pipelines.</p>
                            </div>
                            <div className="glass p-5 rounded-xl border-l-[3px] border-l-[#ff00ff] bg-[rgba(255,0,255,0.02)]">
                                <h4 className="font-bold text-[var(--text-primary)] m-0 mb-2">AI-Powered Testing (2026 Trend)</h4>
                                <p className="text-xs text-[var(--text-secondary)] m-0">AI test case generation, auto-validation suggestions, intelligent self-healing, and deep AI bug log analysis.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="glass-card p-6 mb-6">
                            <h2 className="text-lg font-bold mt-0 mb-4 flex items-center gap-2"><Key className="text-yellow-400 w-5 h-5" /> 1️⃣1️⃣ Authentication Types</h2>
                            <ul className="space-y-3 text-sm text-[var(--text-secondary)] m-0 p-0 list-none">
                                <li><strong className="text-white">Basic Auth</strong> — Plain Username & Password</li>
                                <li><strong className="text-[#00f0ff]">Bearer Token</strong> — Secure token-based (JWT) login</li>
                                <li><strong className="text-[#ff00ff]">OAuth 2.0</strong> — Highly secure, 3rd party authorization</li>
                                <li><strong className="text-green-400">API Key</strong> — Usually passed via Headers</li>
                            </ul>
                        </div>

                        <div className="glass-card p-6 border border-red-900/50">
                            <h2 className="text-lg font-bold mt-0 mb-2 text-white">1️⃣2️⃣ What to perfectly validate?</h2>
                            <div className="flex flex-wrap gap-2 text-xs">
                                <Badge color="#fff">Status Code</Badge>
                                <Badge color="#fff">Response Time</Badge>
                                <Badge color="#fff">Body Values</Badge>
                                <Badge color="#fff">JSON Schema</Badge>
                                <Badge color="#fff">Headers</Badge>
                                <Badge color="#f87171">Error Messages</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Ideas */}
                <div className="glass-card p-8 mb-12 bg-gradient-to-r from-[rgba(0,240,255,0.03)] to-[rgba(255,0,255,0.03)] border-[#ff00ff]/30">
                    <h2 className="text-2xl font-bold mt-0 mb-6 text-center">1️⃣5️⃣ Real API Project Scenarios</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-green-400">
                            <h4 className="text-center font-bold text-green-400 m-0 mb-3">Beginner</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Test Login API flows</li>
                                <li>User CRUD operations</li>
                                <li>Validate basic error messages</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-yellow-400">
                            <h4 className="text-center font-bold text-yellow-400 m-0 mb-3">Intermediate</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>E-commerce Order API workflow</li>
                                <li>Complex API Chaining (Login ➔ Create ➔ Get ➔ Delete)</li>
                                <li>Strict Schema validation</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-[#ff00ff]">
                            <h4 className="text-center font-bold text-[#ff00ff] m-0 mb-3">Advanced</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Microservices API testing</li>
                                <li>Consumer-Driven Contract testing</li>
                                <li>Massive Load testing APIs</li>
                                <li>Security & Header testing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Best Practices */}
                <div className="glass-card p-8 text-center">
                    <h2 className="text-xl font-bold mt-0 mb-4">📌 2026 Best Practices Summary</h2>
                    <p className="text-[var(--text-secondary)] text-sm m-0 max-w-2xl mx-auto">
                        API Testing is a <strong>core skill</strong>. Modern architectures are exclusively microservice-based.
                        Always perfectly validate both the code and the body payload. Utilize Environment Variables for multiple environments, heavily secure your tokens, always test the negative Error-handling paths, and deeply integrate the tests strictly inside your CI/CD pipelines (Jenkins / GitHub Actions).
                    </p>
                </div>

            </div>
        </div>
    );
}
