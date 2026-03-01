'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, TestTube, Code, Users, BookOpen, Rocket } from 'lucide-react';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';

const Hero3D = dynamic(() => import('@/components/organisms/Hero3D'), { ssr: false });

const techAreas = [
  { icon: Brain, title: 'AI & Machine Learning', desc: 'Master neural networks, LLMs, computer vision, and AI automation frameworks.', color: '#00f0ff', href: '/roadmaps' },
  { icon: Cloud, title: 'Cloud Computing', desc: 'AWS, Azure, GCP — Infrastructure, serverless, and cloud-native architectures.', color: '#a855f7', href: '/roadmaps' },
  { icon: Code, title: 'DevOps Engineering', desc: 'CI/CD, Kubernetes, Docker, Terraform, and modern infrastructure automation.', color: '#10b981', href: '/roadmaps' },
  { icon: TestTube, title: 'Software Testing', desc: 'E2E testing, performance testing, security testing, and QA automation.', color: '#f59e0b', href: '/roadmaps' },
];

const stats = [
  { value: '50+', label: 'Expert Roadmaps' },
  { value: '200+', label: 'Learning Resources' },
  { value: '10K+', label: 'Community Members' },
  { value: '95%', label: 'Success Rate' },
];

const features = [
  { icon: Shield, title: 'Industry-Proven Curriculum', desc: 'Built by senior engineers and tech leads from top companies.' },
  { icon: Users, title: 'Active Community', desc: 'Connect with thousands of professionals and mentors worldwide.' },
  { icon: BookOpen, title: 'Hands-On Learning', desc: 'Real-world projects, labs, and certifications to build your portfolio.' },
  { icon: Rocket, title: 'Career Acceleration', desc: 'From junior to senior — structured paths for every career stage.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        <Hero3D />
        <div className="container-custom relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 md:mb-6">🚀 Next-Gen Tech Education Platform</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
              Master the Future of{' '}
              <span className="neon-text">Technology</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mb-6 md:mb-8 leading-relaxed">
              QA_AI_WIZARDS is your gateway to mastering AI, Cloud Computing, DevOps, and Software Testing
              with expert-curated roadmaps and a thriving global community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/roadmaps" className="neon-btn text-center px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold inline-flex items-center justify-center gap-2 group">
                Explore Roadmaps <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/community" className="glass neon-border text-center px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-medium text-[var(--text-primary)] hover:bg-[rgba(0,240,255,0.1)] transition-all">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--dark-bg)] to-transparent z-10" />
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 border-y border-[var(--glass-border)]" aria-label="Statistics">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold neon-text">{stat.value}</p>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Areas */}
      <section className="py-16 md:py-24" aria-label="Technology areas">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge className="mb-4">🎯 Our Expertise</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Master the <span className="neon-text">Tech Ecosystem</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive learning paths designed by industry experts to take you from beginner to expert.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {techAreas.map((area) => (
              <motion.div key={area.title} variants={item}>
                <Link href={area.href}>
                  <Card className="h-full group">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                      style={{ background: `${area.color}15`, border: `1px solid ${area.color}30` }}
                    >
                      <area.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: area.color }} />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold mb-2">{area.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{area.desc}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 border-t border-[var(--glass-border)]" aria-label="Features">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge color="#a855f7" className="mb-4">✨ Why QA_AI_WIZARDS</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="neon-text">Succeed</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feat, i) => (
              <Card key={feat.title} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[rgba(0,240,255,0.1)] to-[rgba(168,85,247,0.1)] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-7 h-7 text-[var(--neon-cyan)]" />
                </div>
                <h3 className="font-semibold mb-2">{feat.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" aria-label="Call to action">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,240,255,0.05)] to-[rgba(168,85,247,0.05)]" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="neon-text">Level Up</span>?
              </h2>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto mb-8 text-sm md:text-base">
                Join thousands of professionals who are advancing their careers with our expert-curated roadmaps and community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="neon-btn px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
