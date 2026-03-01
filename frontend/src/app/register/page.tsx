'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Zap } from 'lucide-react';

export default function Register() {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-[var(--text-secondary)] text-sm">Join QA_AI_WIZARDS and start learning</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="reg-first" className="block text-sm font-medium mb-2">First Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                                <input id="reg-first" type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                                    className="w-full pl-11 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                    placeholder="First" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="reg-last" className="block text-sm font-medium mb-2">Last Name</label>
                            <input id="reg-last" type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                placeholder="Last" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="reg-email" className="block text-sm font-medium mb-2">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                            <input id="reg-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                placeholder="your@email.com" autoComplete="email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="reg-password" className="block text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                            <input id="reg-password" type={showPassword ? 'text' : 'password'} required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full pl-11 pr-11 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                placeholder="Min 8 chars, uppercase + number" autoComplete="new-password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2" aria-label="Toggle password">
                                {showPassword ? <EyeOff className="w-4 h-4 text-[var(--text-secondary)]" /> : <Eye className="w-4 h-4 text-[var(--text-secondary)]" />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="reg-confirm" className="block text-sm font-medium mb-2">Confirm Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                            <input id="reg-confirm" type="password" required value={form.confirmPassword} onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                placeholder="Confirm password" autoComplete="new-password" />
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <input type="checkbox" required className="mt-1 rounded border-[var(--glass-border)]" id="reg-terms" />
                        <label htmlFor="reg-terms" className="text-xs text-[var(--text-secondary)]">
                            I agree to the <Link href="/terms" className="text-[var(--neon-cyan)] hover:underline">Terms</Link> and <Link href="/privacy-policy" className="text-[var(--neon-cyan)] hover:underline">Privacy Policy</Link>
                        </label>
                    </div>
                    <button type="submit" disabled={loading} className="neon-btn w-full py-3 rounded-xl font-semibold">
                        {loading ? 'Creating account...' : 'Create Account'}
                    </button>
                </form>

                <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
                    Already have an account? <Link href="/login" className="text-[var(--neon-cyan)] hover:underline font-medium">Sign In</Link>
                </p>
            </motion.div>
        </div>
    );
}
