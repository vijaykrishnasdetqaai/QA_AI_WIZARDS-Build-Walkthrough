'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const values = [
    { icon: Target, title: 'Excellence', desc: 'We strive for the highest quality in everything we create.' },
    { icon: Heart, title: 'Community First', desc: 'Building a supportive ecosystem for learners worldwide.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'Staying ahead with cutting-edge technologies and methods.' },
    { icon: Globe, title: 'Accessibility', desc: 'Making tech education available to everyone, everywhere.' },
    { icon: Award, title: 'Industry Standards', desc: 'Curriculum aligned with real-world requirements.' },
    { icon: Users, title: 'Collaboration', desc: 'Learning together through mentorship and peer support.' },
];

const team = [
    { name: 'Alex Chen', role: 'Founder & AI Lead', bio: 'Former Google ML Engineer with 12+ years in AI.' },
    { name: 'Sarah Johnson', role: 'Cloud Architecture Lead', bio: 'AWS Solutions Architect, certified in all major cloud platforms.' },
    { name: 'Marcus Williams', role: 'DevOps Lead', bio: 'Kubernetes expert building scalable infrastructure for Fortune 500.' },
    { name: 'Priya Patel', role: 'QA & Testing Lead', bio: 'ISTQB certified, pioneering AI-driven testing strategies.' },
];

export default function About() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                {/* Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 md:mb-20">
                    <Badge className="mb-4">👋 About Us</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        The Team Behind <span className="neon-text">QA_AI_WIZARDS</span>
                    </h1>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
                        We are a team of senior engineers, cloud architects, and QA specialists passionate about making
                        world-class tech education accessible to every aspiring professional.
                    </p>
                </motion.div>

                {/* Mission */}
                <div className="glass-card p-8 md:p-12 mb-16 md:mb-20">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our <span className="neon-text">Mission</span></h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                To democratize tech education by providing structured, industry-aligned roadmaps and
                                resources that help professionals at every level master AI, Cloud, DevOps, and Software Testing.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our <span className="neon-text">Vision</span></h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                A world where every tech professional has clear, actionable paths to advance their
                                career — backed by a global community of mentors and peers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-16 md:mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our <span className="neon-text">Values</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {values.map((v) => (
                            <Card key={v.title}>
                                <v.icon className="w-8 h-8 text-[var(--neon-cyan)] mb-3" />
                                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{v.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Meet the <span className="neon-text">Team</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {team.map((member) => (
                            <Card key={member.name} className="text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="font-semibold">{member.name}</h3>
                                <p className="text-sm text-[var(--neon-cyan)] mb-2">{member.role}</p>
                                <p className="text-xs text-[var(--text-secondary)]">{member.bio}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
