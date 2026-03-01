'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Zap } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
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
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-[var(--text-secondary)] text-sm">Sign in to your QA_AI_WIZARDS account</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                    <div>
                        <label htmlFor="login-email" className="block text-sm font-medium mb-2">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                            <input id="login-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full pl-11 pr-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                placeholder="your@email.com" autoComplete="email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="login-password" className="block text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                            <input id="login-password" type={showPassword ? 'text' : 'password'} required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full pl-11 pr-11 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                placeholder="••••••••" autoComplete="current-password" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                                {showPassword ? <EyeOff className="w-4 h-4 text-[var(--text-secondary)]" /> : <Eye className="w-4 h-4 text-[var(--text-secondary)]" />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-[var(--glass-border)]" />
                            <span className="text-[var(--text-secondary)]">Remember me</span>
                        </label>
                        <a href="#" className="text-[var(--neon-cyan)] hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" disabled={loading} className="neon-btn w-full py-3 rounded-xl font-semibold">
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
                    Don&apos;t have an account? <Link href="/register" className="text-[var(--neon-cyan)] hover:underline font-medium">Sign Up</Link>
                </p>
            </motion.div>
        </div>
    );
}
