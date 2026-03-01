'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, MessageSquare, Heart, Settings, Bell, TrendingUp } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const dashboardStats = [
    { label: 'Courses Enrolled', value: '5', icon: BookOpen, change: '+2 this month' },
    { label: 'Blog Posts Read', value: '23', icon: TrendingUp, change: '+8 this week' },
    { label: 'Comments', value: '12', icon: MessageSquare, change: '+3 today' },
    { label: 'Saved Resources', value: '18', icon: Heart, change: '+5 this week' },
];

const recentActivity = [
    { action: 'Completed', item: 'Docker Fundamentals', time: '2 hours ago', type: 'course' },
    { action: 'Commented on', item: 'Kubernetes Best Practices', time: '5 hours ago', type: 'blog' },
    { action: 'Started', item: 'AWS Cloud Architecture Roadmap', time: '1 day ago', type: 'roadmap' },
    { action: 'Saved', item: 'Terraform Cheat Sheet', time: '2 days ago', type: 'resource' },
];

export default function Dashboard() {
    return (
        <div className="py-8 md:py-12">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, <span className="neon-text">User</span></h1>
                            <p className="text-[var(--text-secondary)] text-sm mt-1">Here&apos;s your learning progress overview.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="glass w-10 h-10 rounded-xl flex items-center justify-center hover:border-[var(--neon-cyan)] transition-all" aria-label="Notifications">
                                <Bell className="w-5 h-5" />
                            </button>
                            <button className="glass w-10 h-10 rounded-xl flex items-center justify-center hover:border-[var(--neon-cyan)] transition-all" aria-label="Settings">
                                <Settings className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                        {dashboardStats.map((stat) => (
                            <Card key={stat.label} hover={false}>
                                <div className="flex items-center justify-between mb-3">
                                    <stat.icon className="w-5 h-5 text-[var(--neon-cyan)]" />
                                    <Badge>{stat.change}</Badge>
                                </div>
                                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-[var(--text-secondary)]">{stat.label}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                            <div className="glass-card divide-y divide-[var(--glass-border)]">
                                {recentActivity.map((act, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4">
                                        <div className="w-2 h-2 rounded-full bg-[var(--neon-cyan)] flex-shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm"><span className="text-[var(--text-secondary)]">{act.action}</span> <span className="font-medium">{act.item}</span></p>
                                            <p className="text-xs text-[var(--text-secondary)]">{act.time}</p>
                                        </div>
                                        <Badge>{act.type}</Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                {[
                                    { icon: BookOpen, label: 'Continue Learning', desc: 'Resume your last course' },
                                    { icon: MessageSquare, label: 'Community Feed', desc: 'See latest discussions' },
                                    { icon: Heart, label: 'Saved Items', desc: 'View your bookmarks' },
                                ].map((action) => (
                                    <div key={action.label} className="glass-card p-4 flex items-center gap-3 cursor-pointer hover:border-[var(--neon-cyan)] transition-all">
                                        <action.icon className="w-5 h-5 text-[var(--neon-cyan)]" />
                                        <div>
                                            <p className="text-sm font-medium">{action.label}</p>
                                            <p className="text-xs text-[var(--text-secondary)]">{action.desc}</p>
                                        </div>
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
