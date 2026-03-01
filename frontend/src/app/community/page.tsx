'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, MessageCircle, Calendar, Github, ArrowRight, Globe, Heart } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const channels = [
    { icon: MessageCircle, title: 'Discord Community', desc: 'Join 5,000+ members in real-time discussions.', members: '5,200+', link: '#', color: '#5865f2' },
    { icon: Github, title: 'GitHub Organization', desc: 'Open-source projects and code examples.', members: '3,100+', link: '#', color: '#f0f0f5' },
    { icon: Globe, title: 'Forum', desc: 'Ask questions, share knowledge, and collaborate.', members: '8,900+', link: '#', color: '#00f0ff' },
    { icon: Calendar, title: 'Weekly Meetups', desc: 'Live sessions with industry experts every week.', members: '500+ attendees', link: '#', color: '#a855f7' },
];

const events = [
    { title: 'AI in Production Workshop', date: 'March 8, 2026', time: '2:00 PM UTC', type: 'Workshop' },
    { title: 'Cloud Security Best Practices', date: 'March 12, 2026', time: '6:00 PM UTC', type: 'Webinar' },
    { title: 'DevOps Pipeline Hackathon', date: 'March 15-16, 2026', time: 'All Day', type: 'Hackathon' },
    { title: 'Testing Automation Masterclass', date: 'March 20, 2026', time: '3:00 PM UTC', type: 'Workshop' },
];

export default function Community() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">🌍 Community</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Join Our <span className="neon-text">Community</span></h1>
                    <p className="text-[var(--text-secondary)] max-w-xl mx-auto">Connect with thousands of tech professionals, mentors, and enthusiasts worldwide.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {channels.map((ch) => (
                        <a href={ch.link} key={ch.title}>
                            <Card className="h-full text-center group">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: `${ch.color}15` }}>
                                    <ch.icon className="w-7 h-7" style={{ color: ch.color }} />
                                </div>
                                <h3 className="font-semibold mb-2">{ch.title}</h3>
                                <p className="text-xs text-[var(--text-secondary)] mb-3">{ch.desc}</p>
                                <p className="text-sm font-semibold neon-text">{ch.members}</p>
                            </Card>
                        </a>
                    ))}
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Upcoming <span className="neon-text">Events</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {events.map((event) => (
                            <Card key={event.title} className="flex items-center gap-4">
                                <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(168,85,247,0.1)] flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-[var(--neon-cyan)]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold truncate">{event.title}</h3>
                                    <div className="flex flex-wrap gap-2 text-xs text-[var(--text-secondary)] mt-1">
                                        <span>{event.date}</span>
                                        <span>• {event.time}</span>
                                    </div>
                                </div>
                                <Badge>{event.type}</Badge>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
