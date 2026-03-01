/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import {
    Database, DatabaseZap, ShieldCheck, Network, FolderSync, Cpu, Layers, FileJson,
    TerminalSquare, RefreshCw, CheckCircle2, AlertTriangle, Bug, TableProperties
} from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function DatabaseTestingPage() {
    return (
        <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(59,130,246,0.1)] text-[#3b82f6] border-[#3b82f6]">
                    🗄️ Database Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Database Testing <br /> <span className="neon-text" style={{ textShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6' }}>Complete E2E Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Master the backbone of modern apps. Learn SQL basics for QA, validate CRUD operations, guarantee data integrity, and confidently ensure UI payload matches DB reality.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Intro & Why */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-8 border-l-4 border-l-[#3b82f6]">
                        <h2 className="flex items-center gap-3 text-2xl font-bold mb-4 mt-0"><Database className="text-[#3b82f6]" /> 1️⃣ What is Database Testing?</h2>
                        <div className="space-y-4 text-[var(--text-secondary)]">
                            <p className="m-0 text-sm">
                                Database Testing strictly verifies that data is accurately stored, updated, and deleted without any silent corruption or structural mismatch between the UI inputs and the DB state.
                            </p>
                            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[var(--glass-border)] text-sm font-mono text-gray-300">
                                <strong>Example Workflow:</strong> <br />
                                User registers on website ➔ QA directly queries the DB ➔ <br />
                                <em>Is the exact user data row safely recorded in the `users` table?</em>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 border border-red-900/40 bg-[rgba(255,0,0,0.02)]">
                        <h2 className="text-xl font-bold mb-6 mt-0 flex items-center gap-2 text-red-400"><AlertTriangle className="w-5 h-5 text-red-400" /> 3️⃣ Why it's Critical (2026 Reality)</h2>
                        <ul className="space-y-3 relative ml-3 list-none p-0 m-0 text-sm text-[var(--text-secondary)]">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>Massive shifts toward complex Microservices.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>Heavy reliance on automated real-time API integrations.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>If the database is wrong ➔ the entire system is critically wrong.</span>
                            </li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-900/30 text-xs text-red-200 rounded border border-red-500/30">
                            <strong>Catastrophe:</strong> User transfers $10,000 via UI. Code bug deducts $100,000 in the DB. <em>(Instant Financial Disaster)</em>
                        </div>
                    </div>
                </div>

                {/* Database Types */}
                <h2 className="text-2xl font-bold mb-6">4️⃣ Types of Databases</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="glass-card p-6 border-t-[3px] border-t-[#00f0ff] bg-gradient-to-b from-[rgba(0,240,255,0.03)] to-transparent">
                        <h3 className="font-bold text-white mt-0 mb-3 flex items-center gap-2"><TableProperties className="w-5 h-5 text-[#00f0ff]" /> Relational DB (RDBMS)</h3>
                        <p className="text-sm text-[var(--text-secondary)] m-0 mb-4">Highly structured data securely stored in strict relational tables with interconnected rows and columns.</p>
                        <div className="flex gap-2">
                            <Badge color="#0ea5e9">PostgreSQL</Badge>
                            <Badge color="#f59e0b">MySQL</Badge>
                            <Badge color="#ef4444">Oracle DB</Badge>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-t-[3px] border-t-[#10b981] bg-gradient-to-b from-[rgba(16,185,129,0.03)] to-transparent">
                        <h3 className="font-bold text-white mt-0 mb-3 flex items-center gap-2"><FileJson className="w-5 h-5 text-[#10b981]" /> NoSQL Database</h3>
                        <p className="text-sm text-[var(--text-secondary)] m-0 mb-4">Highly flexible, unstructured scaling data storage utilizing JSON document collections.</p>
                        <div className="flex gap-2">
                            <Badge color="#10b981">MongoDB</Badge>
                            <Badge color="#f59e0b">DynamoDB</Badge>
                            <Badge color="#3b82f6">Cassandra</Badge>
                        </div>
                    </div>
                </div>

                {/* Test Types */}
                <div className="glass-card p-8 mb-12 border border-[#3b82f6]/30 bg-gradient-to-r from-[rgba(59,130,246,0.03)] to-transparent">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-3"><Layers className="text-[#3b82f6]" /> 5️⃣ DB Testing Architectures</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-4 rounded-xl">
                            <h4 className="font-bold text-[#00f0ff] m-0 mb-2">Structural Testing</h4>
                            <p className="text-xs text-gray-400 m-0">Validate exact table layouts, strict column variables, and overall schema map precision.</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl">
                            <h4 className="font-bold text-[#a855f7] m-0 mb-2">Functional Testing</h4>
                            <p className="text-xs text-gray-400 m-0">Validate SQL Stored Procedures and automated Triggers execute correctly.</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl">
                            <h4 className="font-bold text-[#f97316] m-0 mb-2">Data Validation</h4>
                            <p className="text-xs text-gray-400 m-0">Verify payload data physically entered in the UI exactly mirrors DB physical rows.</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl">
                            <h4 className="font-bold text-[#10b981] m-0 mb-2">Performance Tuning</h4>
                            <p className="text-xs text-gray-400 m-0">Massive queries execute rapidly without stalling application threads.</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl">
                            <h4 className="font-bold text-red-400 m-0 mb-2">Security Auditing</h4>
                            <p className="text-xs text-gray-400 m-0">Unauthorized users cannot bypass APIs to access raw encrypted data stores.</p>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl">
                            <h4 className="font-bold text-yellow-500 m-0 mb-2">ETL Testing</h4>
                            <p className="text-xs text-gray-400 m-0">Extract, Transform, & Load. Flawless data migration into massive warehouses.</p>
                        </div>
                    </div>
                </div>

                {/* Basic SQL & CRUD */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-6">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><TerminalSquare className="w-5 h-5 text-[#00f0ff]" /> 6️⃣ Core SQL For Modern QA</h2>
                        <div className="space-y-4">
                            <div className="bg-black/50 p-3 rounded border border-gray-700">
                                <span className="text-xs font-bold text-[#00f0ff] block mb-1">SELECT (Fetch Data)</span>
                                <code className="text-sm text-gray-300 font-mono">SELECT * FROM users;</code>
                            </div>
                            <div className="bg-black/50 p-3 rounded border border-gray-700">
                                <span className="text-xs font-bold text-green-400 block mb-1">INSERT (Create Data)</span>
                                <code className="text-sm text-gray-300 font-mono">INSERT INTO users (name, email) VALUES ('Vijay', 'v@test.com');</code>
                            </div>
                            <div className="bg-black/50 p-3 rounded border border-gray-700">
                                <span className="text-xs font-bold text-yellow-400 block mb-1">UPDATE (Modify Data)</span>
                                <code className="text-sm text-gray-300 font-mono">UPDATE users SET name='Vijay QA' WHERE id=101;</code>
                            </div>
                            <div className="bg-black/50 p-3 rounded border border-gray-700">
                                <span className="text-xs font-bold text-red-400 block mb-1">DELETE (Remove Data)</span>
                                <code className="text-sm text-gray-300 font-mono">DELETE FROM users WHERE email='v@test.com';</code>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card p-6 border-l-4 border-l-[#a855f7]">
                            <h3 className="font-bold text-white mt-0 mb-3 flex items-center gap-2"><RefreshCw className="w-5 h-5 text-[#a855f7]" /> 7️⃣ Master CRUD Validations</h3>
                            <p className="text-sm text-[var(--text-secondary)] m-0 mb-3">CRUD (Create, Read, Update, Delete) is the absolute core of all API and Database Testing.</p>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1 m-0 list-none p-0">
                                <li><strong className="text-white">✔ C:</strong> Submit signup via UI ➔ Query DB ➔ Record exists perfectly.</li>
                                <li><strong className="text-white">✔ R:</strong> Ensure API heavily protected GET fetching reads actual data.</li>
                                <li><strong className="text-white">✔ U:</strong> Change Profile Name ➔ Query DB ➔ Record mathematically updated.</li>
                                <li><strong className="text-white">✔ D:</strong> Hard delete account ➔ Query DB ➔ Record completely vanished.</li>
                            </ul>
                        </div>

                        <div className="glass-card p-6 border-l-4 border-l-red-500 bg-[rgba(255,0,0,0.02)]">
                            <h3 className="font-bold text-red-400 mt-0 mb-3 flex items-center gap-2"><Bug className="w-5 h-5" /> 1️⃣1️⃣ UI vs DB Mismatch Bug</h3>
                            <p className="text-sm text-gray-300 m-0 mb-3">
                                User physically enters name = <strong>"Vijay"</strong> in the UI text box.<br />
                                UI saves successfully and shows <strong>"Vijay"</strong>.
                            </p>
                            <div className="bg-black/50 p-2 rounded text-xs font-mono text-gray-400 mb-2 border border-gray-700">
                                &gt; SELECT name FROM users WHERE id=101;<br />
                                &gt; RESULT: "Vijay Kumar"
                            </div>
                            <Badge color="#f87171">❌ CRITICAL FATAL: Data Payload Corrupted By Application Code in Transit.</Badge>
                        </div>
                    </div>

                </div>

                {/* Data Integrity & Flow */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-6">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400" /> 8️⃣ Strict Data Integrity</h2>
                        <ul className="text-sm text-[var(--text-secondary)] space-y-3 m-0 p-0 list-inside list-disc">
                            <li><strong>Primary Key (PK):</strong> Force mathematical uniqueness. No duplicates ever allowed.</li>
                            <li><strong>Foreign Key (FK) Integrity:</strong> An Order DB row CANNOT reference a User ID that does not exist.</li>
                            <li><strong>NOT NULL Variables:</strong> Mandatory required app fields cannot physically be skipped.</li>
                            <li><strong>Default Enums:</strong> Standardized states insert directly (e.g. status='PENDING').</li>
                        </ul>
                    </div>

                    <div className="glass-card p-6 border-t-[3px] border-t-yellow-400">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><Cpu className="w-5 h-5 text-yellow-400" /> 1️⃣2️⃣ Real Project Banking Flow</h2>
                        <ol className="text-sm text-white space-y-2 m-0 list-decimal pl-4 font-medium">
                            <li>Execute $500 Transfer physically in UI.</li>
                            <li>Capture unique transaction hash/ID.</li>
                            <li>Access backend using pgAdmin interface.</li>
                            <li>Query UI ID matching `transaction_ledger` DB.</li>
                            <li>Validate amount deducted perfectly minus fees.</li>
                            <li>Validate receiver `balance` strictly updated.</li>
                        </ol>
                    </div>

                </div>

                {/* Automation & Tools */}
                <div className="glass-card p-8 mb-12 border border-[#3b82f6]/30 bg-[rgba(59,130,246,0.03)]">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-3"><DatabaseZap className="text-[#3b82f6]" /> 1️⃣4️⃣ DB Automation Dominance (2026)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                Manual SQL queries are too slow. Modern QA engineers automate SQL queries directly inside Cypress, Selenium, or RestAssured test frameworks.
                            </p>
                            <div className="bg-black/50 p-4 rounded-xl border border-gray-700 text-sm font-mono text-gray-300">
                                <span className="text-[#a855f7]">1. Web UI Action:</span> Click Submit button.<br />
                                <span className="text-[#3b82f6]">2. Automation:</span> Script fires backend JDBC.<br />
                                <span className="text-green-400">3. Execute:</span> Database read immediately.<br />
                                <span className="text-yellow-400">4. Assert:</span> Expect UI value == DB returned value.
                            </div>
                        </div>
                        <div>
                            <strong className="block text-sm mb-3 text-white">Top DB Tools You Need:</strong>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs text-gray-400 block mb-1">Standard UI Query Browsers:</span>
                                    <div className="flex gap-2">
                                        <Badge color="#4338ca">DBeaver</Badge>
                                        <Badge color="#0ea5e9">pgAdmin 4</Badge>
                                        <Badge color="#f59e0b">MySQL Workbench</Badge>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block mb-1">Code/Data Comparison:</span>
                                    <div className="flex gap-2">
                                        <Badge color="#10b981">DBUnit</Badge>
                                        <Badge color="#ef4444">Redgate Data</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Ideas */}
                <div className="glass-card p-8 mb-12 bg-gradient-to-r from-[rgba(59,130,246,0.03)] to-[rgba(168,85,247,0.03)] border-[#3b82f6]/30">
                    <h2 className="text-2xl font-bold mt-0 mb-6 text-center">1️⃣5️⃣ DB Career Maker Projects</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-green-400">
                            <h4 className="text-center font-bold text-green-400 m-0 mb-3">Beginner</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Create basic SQL queries on mock E-commerce data.</li>
                                <li>Manually validate physical CRUD forms.</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-yellow-400">
                            <h4 className="text-center font-bold text-yellow-400 m-0 mb-3">Intermediate</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Automate DB connection in RestAssured API suites.</li>
                                <li>Write SQL JOINs to validate Foreign Keys.</li>
                            </ul>
                        </div>
                        <div className="bg-black/40 p-5 rounded-xl border-t-2 border-red-500">
                            <h4 className="text-center font-bold text-red-400 m-0 mb-3">Advanced</h4>
                            <ul className="text-sm text-gray-300 space-y-2 m-0 pl-4">
                                <li>Deep Microservice sync db validations across distributed clouds.</li>
                                <li>Strict ETL massive migration verification scripts.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
