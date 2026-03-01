'use client';

import { motion } from 'framer-motion';
import { Users, FileText, MessageSquare, Mail, Shield, BarChart3, Settings } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const adminStats = [
    { label: 'Total Users', value: '1,247', icon: Users, color: '#00f0ff' },
    { label: 'Blog Posts', value: '156', icon: FileText, color: '#a855f7' },
    { label: 'Comments', value: '892', icon: MessageSquare, color: '#10b981' },
    { label: 'Contact Messages', value: '23', icon: Mail, color: '#f59e0b' },
];

const recentUsers = [
    { name: 'John Doe', email: 'john@example.com', role: 'USER', joined: '2 hours ago' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'ADMIN', joined: '1 day ago' },
    { name: 'Bob Wilson', email: 'bob@example.com', role: 'USER', joined: '2 days ago' },
    { name: 'Alice Brown', email: 'alice@example.com', role: 'USER', joined: '3 days ago' },
    { name: 'Charlie Davis', email: 'charlie@example.com', role: 'USER', joined: '5 days ago' },
];

export default function Admin() {
    return (
        <div className="py-8 md:py-12">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Shield className="w-5 h-5 text-[var(--neon-cyan)]" />
                                <h1 className="text-2xl md:text-3xl font-bold">Admin <span className="neon-text">Panel</span></h1>
                            </div>
                            <p className="text-[var(--text-secondary)] text-sm">Manage your platform content and users.</p>
                        </div>
                        <button className="glass px-4 py-2 rounded-xl inline-flex items-center gap-2 text-sm hover:border-[var(--neon-cyan)] transition-all">
                            <Settings className="w-4 h-4" /> Settings
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                        {adminStats.map((stat) => (
                            <Card key={stat.label} hover={false}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${stat.color}15` }}>
                                        <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                                    </div>
                                </div>
                                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
                            <div className="glass-card overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-[var(--glass-border)]">
                                                <th className="text-left p-4 font-medium text-[var(--text-secondary)]">Name</th>
                                                <th className="text-left p-4 font-medium text-[var(--text-secondary)] hidden sm:table-cell">Email</th>
                                                <th className="text-left p-4 font-medium text-[var(--text-secondary)]">Role</th>
                                                <th className="text-left p-4 font-medium text-[var(--text-secondary)] hidden md:table-cell">Joined</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentUsers.map((user) => (
                                                <tr key={user.email} className="border-b border-[var(--glass-border)] hover:bg-[rgba(0,240,255,0.02)]">
                                                    <td className="p-4 font-medium">{user.name}</td>
                                                    <td className="p-4 text-[var(--text-secondary)] hidden sm:table-cell">{user.email}</td>
                                                    <td className="p-4"><Badge color={user.role === 'ADMIN' ? '#a855f7' : '#00f0ff'}>{user.role}</Badge></td>
                                                    <td className="p-4 text-[var(--text-secondary)] hidden md:table-cell">{user.joined}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold mb-4">Quick Management</h2>
                            <div className="space-y-3">
                                {[
                                    { icon: FileText, label: 'Manage Blog Posts', desc: 'Create, edit, and delete blog posts', count: '156' },
                                    { icon: Users, label: 'User Management', desc: 'Manage roles and permissions', count: '1,247' },
                                    { icon: MessageSquare, label: 'Moderate Comments', desc: 'Review and moderate user comments', count: '892' },
                                    { icon: Mail, label: 'Contact Messages', desc: 'View and respond to messages', count: '23' },
                                    { icon: BarChart3, label: 'Analytics', desc: 'View platform analytics and reports', count: '—' },
                                ].map((action) => (
                                    <div key={action.label} className="glass-card p-4 flex items-center gap-4 cursor-pointer hover:border-[var(--neon-cyan)] transition-all">
                                        <action.icon className="w-5 h-5 text-[var(--neon-cyan)] flex-shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium">{action.label}</p>
                                            <p className="text-xs text-[var(--text-secondary)]">{action.desc}</p>
                                        </div>
                                        <span className="text-sm font-semibold text-[var(--text-secondary)]">{action.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
