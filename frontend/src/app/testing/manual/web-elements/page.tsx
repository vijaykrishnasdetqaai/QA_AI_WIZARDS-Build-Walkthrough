/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import {
    TerminalSquare, MousePointerClick, Smartphone, TableProperties, ShieldCheck,
    Eye, FileBox, Columns, CheckCircle2, AlertTriangle, Bug, SmartphoneNfc
} from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function WebMobileElementsPage() {
    return (
        <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                <Badge className="mb-4 bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[#10b981]">
                    🖼️ UI Elements Testing Module
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Web & Mobile Elements <br /> <span className="neon-text" style={{ textShadow: '0 0 10px #10b981, 0 0 20px #10b981' }}>Complete UI Guide (2026)</span>
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    The ultimate reference for UI element validation across Web and Mobile. Master the expected behaviors, spot real-time bugs, and guarantee WCAG 2.2 accessibility.
                </p>
            </motion.div>

            <div className="prose prose-invert prose-lg max-w-none">

                {/* Web Elements */}
                <div className="glass-card p-8 mb-12 border-l-4 border-l-[#10b981] bg-gradient-to-r from-[rgba(16,185,129,0.02)] to-transparent">
                    <h2 className="flex items-center gap-3 text-2xl font-bold mb-6 mt-0 text-white"><TerminalSquare className="text-[#10b981]" /> 1️⃣ Web Application Elements (Advanced Coverage)</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="bg-black/40 border border-[#10b981]/20 rounded-xl p-5 hover:border-[#10b981]/50 transition-colors">
                            <h4 className="font-bold text-white mt-0 mb-2">Toggle Switch</h4>
                            <p className="text-xs text-gray-400 mb-2">Enable/Disable settings (e.g. Notifications).</p>
                            <ul className="text-xs text-[var(--text-secondary)] list-inside list-disc m-0 p-0 space-y-1">
                                <li>Toggle immediately changes state</li>
                                <li>Saves properly after Page Refresh</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Toggle visually switches but backend is not updated.</div>
                        </div>

                        <div className="bg-black/40 border border-[#10b981]/20 rounded-xl p-5 hover:border-[#10b981]/50 transition-colors">
                            <h4 className="font-bold text-white mt-0 mb-2">Tooltip</h4>
                            <p className="text-xs text-gray-400 mb-2">Small informational hovering popup.</p>
                            <ul className="text-xs text-[var(--text-secondary)] list-inside list-disc m-0 p-0 space-y-1">
                                <li>Appears on precise hover</li>
                                <li>Disappears when cursor leaves</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Tooltip gets stuck open preventing clicks.</div>
                        </div>

                        <div className="bg-black/40 border border-[#10b981]/20 rounded-xl p-5 hover:border-[#10b981]/50 transition-colors">
                            <h4 className="font-bold text-white mt-0 mb-2">Breadcrumb</h4>
                            <p className="text-xs text-gray-400 mb-2">Navigation path (Home &gt; Shoes &gt; Nike).</p>
                            <ul className="text-xs text-[var(--text-secondary)] list-inside list-disc m-0 p-0 space-y-1">
                                <li>Links route correctly</li>
                                <li>Current page is non-clickable</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Middle link results in 404 error.</div>
                        </div>

                        <div className="bg-black/40 border border-[#10b981]/20 rounded-xl p-5 hover:border-[#10b981]/50 transition-colors">
                            <h4 className="font-bold text-white mt-0 mb-2">Carousel / Slider</h4>
                            <p className="text-xs text-gray-400 mb-2">Homepage sliding banner images.</p>
                            <ul className="text-xs text-[var(--text-secondary)] list-inside list-disc m-0 p-0 space-y-1">
                                <li>Auto-slide timing is consistent</li>
                                <li>Manual swipe/dots override auto</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Carousel freezes completely after 1st cycle.</div>
                        </div>

                        <div className="bg-black/40 border border-[#10b981]/20 rounded-xl p-5 hover:border-[#10b981]/50 transition-colors">
                            <h4 className="font-bold text-white mt-0 mb-2">Infinite Scroll</h4>
                            <p className="text-xs text-gray-400 mb-2">Social media dynamic feed loading.</p>
                            <ul className="text-xs text-[var(--text-secondary)] list-inside list-disc m-0 p-0 space-y-1">
                                <li>Triggers before hitting bottom</li>
                                <li>No duplicate artifacts loaded</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Scroll fetches identical records forming loop.</div>
                        </div>

                        <div className="bg-black/40 border border-[#10b981]/20 rounded-xl p-5 hover:border-[#10b981]/50 transition-colors">
                            <h4 className="font-bold text-white mt-0 mb-2">Toast Messages</h4>
                            <p className="text-xs text-gray-400 mb-2">Temporary standard notifications.</p>
                            <ul className="text-xs text-[var(--text-secondary)] list-inside list-disc m-0 p-0 space-y-1">
                                <li>Disappears after set X seconds</li>
                                <li>Doesn't block core action buttons</li>
                            </ul>
                            <div className="mt-3 text-xs text-red-300 border-t border-red-500/20 pt-2"><strong className="text-red-400">Bug:</strong> Toast persists indefinitely over the Submit button.</div>
                        </div>
                    </div>
                </div>

                {/* Mobile Elements */}
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#00f0ff]"><Smartphone className="w-6 h-6" /> 2️⃣ Mobile App UI Elements (Android & iOS)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {[
                        { tag: 'Mobile Text Input', ok: 'Keyboard opens, numeric vs alpha correct', bad: 'Keyboard completely hides the text field.' },
                        { tag: 'Hardware Back Btn', ok: 'Navigates app hierarchy cleanly', bad: 'Instantly exits the entire app improperly.' },
                        { tag: 'Swipe Gestures', ok: 'Tinder/Mail style swipe sensitivity', bad: 'Swipe does not register on smaller screens.' },
                        { tag: 'Pull to Refresh', ok: 'Spinner shows, API called, data updates', bad: 'Spinner spins infinitely blocking UI.' },
                        { tag: 'Permissions Popup', ok: 'Allow/Deny handled gracefully via OS', bad: 'App immediately crashes if permission denied.' },
                        { tag: 'Push Notifications', ok: 'Clicking notification opens correct deep link', bad: 'Notification directs to default home screen.' },
                        { tag: 'Bottom Nav Bar', ok: 'Active tab highlighted, scales well', bad: 'Icons overlap and merge on iPhone SE.' },
                        { tag: 'Splash Screen', ok: 'Displays logo fast, routes to Login', bad: 'App gets stuck permanently on Splash.' }
                    ].map((el, i) => (
                        <div key={i} className="glass p-4 rounded-xl border-l-[3px] border-l-[#00f0ff]">
                            <strong className="block text-sm text-white mb-2">{el.tag}</strong>
                            <div className="text-xs text-green-400 mb-1">✔ {el.ok}</div>
                            <div className="text-xs text-red-400">❌ {el.bad}</div>
                        </div>
                    ))}
                </div>

                {/* Tables */}
                <div className="glass-card p-8 mb-12 border border-[#a855f7]/30 bg-[rgba(168,85,247,0.03)]">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-3"><TableProperties className="text-[#a855f7]" /> 3️⃣ Advanced Table Testing (Crucial)</h2>
                    <p className="text-[var(--text-secondary)] text-sm mb-6">Data tables are the absolute core of Banking Apps, Admin Dashboards, and Reports. They must be flawless.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white font-bold mt-0 mb-3">Functional & Security</h4>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)] m-0 p-0 list-none">
                                <li><strong className="text-[#a855f7]">✔ Sorting/Filtering:</strong> Multi-column sort works flawlessly.</li>
                                <li><strong className="text-[#a855f7]">✔ Pagination:</strong> Retains filter state across pages.</li>
                                <li><strong className="text-[#a855f7]">✔ Inline Editing:</strong> Save/Cancel reverts changes predictably.</li>
                                <li><strong className="text-red-400">🚨 Security:</strong> Inspect element does not reveal hidden sensitive columns.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mt-0 mb-3">Performance & UI</h4>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)] m-0 p-0 list-none">
                                <li><strong className="text-[#a855f7]">✔ Horizontal Scroll:</strong> Wide tables scroll natively without breaking flex layouts.</li>
                                <li><strong className="text-[#a855f7]">✔ Resizing:</strong> User column sizing behaves cleanly.</li>
                                <li><strong className="text-red-400">🚨 Performance:</strong> Tables loading 5,000+ rows do not stall the main JS thread.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Security & Access */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    <div className="glass-card p-6 border-t-4 border-t-yellow-500">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-yellow-500" /> 4️⃣ Security Elements</h2>
                        <div className="space-y-4">
                            <div className="bg-black/40 p-3 rounded">
                                <strong className="text-sm block mb-1">CAPTCHA</strong>
                                <p className="text-xs text-gray-400 m-0">Validate strict error handling and ensure automated backend bypass is impossible.</p>
                            </div>
                            <div className="bg-black/40 p-3 rounded">
                                <strong className="text-sm block mb-1">OTP Fields</strong>
                                <p className="text-xs text-gray-400 m-0">Validate automatic box switching, numeric injection limits, and strict Time-To-Live expiration.</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 border-t-4 border-t-blue-500">
                        <h2 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2"><Eye className="w-5 h-5 text-blue-500" /> 5️⃣ Accessibility (WCAG 2.2)</h2>
                        <ul className="text-sm text-[var(--text-secondary)] space-y-2 m-0 p-0 list-inside list-disc">
                            <li><strong>Keyboard Navigation:</strong> Test entire workflows using ONLY the Tab / Enter keys.</li>
                            <li><strong>Focus Indicators:</strong> Currently selected element must have a glowing ring.</li>
                            <li><strong>Screen Readers:</strong> VoiceOver/NVDA accurately reads element ARIA labels.</li>
                            <li><strong>Color Contrast:</strong> Text versus background ratio must pass AA standard.</li>
                        </ul>
                    </div>
                </div>

                {/* File and Responsive */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {['Download Buttons: Format Check', 'Drag & Drop: Zone Highlights', 'Dark Mode: Contrast Fails', 'Responsive Viewports: Check elements scaling'].map((txt, i) => (
                        <div key={i} className="glass border border-gray-700 p-4 rounded-xl text-center text-sm text-[var(--text-secondary)] flex items-center justify-center">
                            {txt}
                        </div>
                    ))}
                </div>

                {/* Standard Template */}
                <h2 className="text-2xl font-bold mb-6 text-center">📋 Expected vs Actual Behavior Template</h2>
                <div className="rounded-xl overflow-hidden glass mb-12 border border-[var(--glass-border)]">
                    <table className="w-full text-sm text-left m-0">
                        <thead className="bg-[#1a1a2e] text-[#10b981]">
                            <tr>
                                <th className="p-4 border-b border-[var(--glass-border)]">Element</th>
                                <th className="p-4 border-b border-[var(--glass-border)]">Scenario</th>
                                <th className="p-4 border-b border-[var(--glass-border)]">Expected Result</th>
                                <th className="p-4 border-b border-[var(--glass-border)]">Actual Result</th>
                                <th className="p-4 border-b border-[var(--glass-border)] text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold">Button</td><td className="p-4">Click Form Submit</td><td className="p-4 text-gray-300">Form physically submitted to database</td><td className="p-4 text-red-300">Zero network action. Spinner frozen.</td><td className="p-4 text-center"><Badge color="#f87171">FAIL</Badge></td>
                            </tr>
                            <tr className="border-b border-[var(--glass-border)]">
                                <td className="p-4 font-bold">Dropdown</td><td className="p-4">Select nested option</td><td className="p-4 text-gray-300">Value highlights properly in dropdown index</td><td className="p-4 text-green-300">Option selected properly.</td><td className="p-4 text-center"><Badge color="#4ade80">PASS</Badge></td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold">Table</td><td className="p-4">Sort Alphabetically A-Z</td><td className="p-4 text-gray-300">Records mutate into correct alphabetical order</td><td className="p-4 text-red-300">Completely randomized column order returned.</td><td className="p-4 text-center"><Badge color="#f87171">FAIL</Badge></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* E2E Complete Checklist */}
                <div className="glass-card p-8 mb-12 bg-gradient-to-br from-[#10b981]/5 to-transparent border-[#10b981]/30">
                    <h2 className="text-2xl font-bold mt-0 mb-6 flex items-center gap-2"><CheckCircle2 className="w-6 h-6 text-[#10b981]" /> Complete E2E QA Protocol Checklist</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-bold text-white mb-2">Core Functional</h4>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li>✔ All UI Elements state check</li>
                                <li>✔ All Field validations</li>
                                <li>✔ Navigation routing</li>
                                <li>✔ Dynamic Error rendering</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">Architectural</h4>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li>✔ API Network Payload accuracy</li>
                                <li>✔ General Loading Performance</li>
                                <li>✔ Layout Responsiveness</li>
                                <li>✔ Security Masking</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">Modern 2026 Elements</h4>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li>✔ Biometric Face/Fingerprint triggers</li>
                                <li>✔ Real-time Notification WebSockets</li>
                                <li>✔ Map View Integrations</li>
                                <li>✔ Live Chat embedded widgets</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
