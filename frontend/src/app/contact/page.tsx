'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Badge from '@/components/atoms/Badge';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1500);
    };

    return (
        <div className="py-12 md:py-20">
            <div className="container-custom max-w-5xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">📬 Get In Touch</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Contact <span className="neon-text">Us</span></h1>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Have a question or want to collaborate? We&apos;d love to hear from you.</p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="glass-card p-6">
                            <Mail className="w-6 h-6 text-[var(--neon-cyan)] mb-3" />
                            <h3 className="font-semibold mb-1">Email</h3>
                            <a href="mailto:contact@qaawizards.com" className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors">contact@qaawizards.com</a>
                        </div>
                        <div className="glass-card p-6">
                            <Phone className="w-6 h-6 text-[var(--neon-cyan)] mb-3" />
                            <h3 className="font-semibold mb-1">Phone</h3>
                            <p className="text-sm text-[var(--text-secondary)]">+1 (555) 000-0000</p>
                        </div>
                        <div className="glass-card p-6">
                            <MapPin className="w-6 h-6 text-[var(--neon-cyan)] mb-3" />
                            <h3 className="font-semibold mb-1">Location</h3>
                            <p className="text-sm text-[var(--text-secondary)]">San Francisco, CA</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3">
                        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                                    <input id="contact-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                        placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                                    <input id="contact-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                        placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">Subject</label>
                                <input id="contact-subject" type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)]"
                                    placeholder="How can we help?" />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea id="contact-message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--neon-cyan)] resize-none"
                                    placeholder="Tell us more..." />
                            </div>
                            <button type="submit" disabled={status === 'sending'} className="neon-btn w-full py-3 rounded-xl inline-flex items-center justify-center gap-2 text-base font-semibold">
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : <><Send className="w-4 h-4" /> Send Message</>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
