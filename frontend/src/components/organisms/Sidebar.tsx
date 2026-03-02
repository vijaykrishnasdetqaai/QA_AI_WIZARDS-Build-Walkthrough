/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, BookOpen, Layers, Users, Mail, Settings, ChevronDown, SwitchCamera,
    Brain, Cloud, Code, TestTube, FileText, Map, Video, Zap, FileTerminal, FileSearch, Gauge, MousePointerClick, Database, ShieldAlert,
    Bot, ShieldCheck, Activity, GraduationCap, MessageSquare, LogOut, ChevronRight, Terminal
} from 'lucide-react';
import ThemeToggle from '@/components/atoms/ThemeToggle';

const menuItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: Layers },
    {
        name: 'Learning Modules',
        icon: BookOpen,
        submodules: [
            { name: 'AI & Machine Learning', path: '/roadmaps/ai-machine-learning', icon: Brain },
            { name: 'Cloud Computing', path: '/roadmaps/cloud-computing', icon: Cloud },
            { name: 'DevOps Engineering', path: '/roadmaps/devops-engineering', icon: Code },
            {
                name: 'Software Testing',
                icon: TestTube,
                submodules: [
                    { name: 'Prompt Testing E2E', path: '/testing/prompt', icon: Terminal },
                    { name: 'RAG Testing E2E', path: '/testing/rag', icon: Database },
                    { name: 'Agentic Testing E2E', path: '/testing/agentic', icon: Bot },
                    { name: 'AI DevSecOps', path: '/testing/ai-devsecops', icon: ShieldCheck },
                    { name: 'LLM Red Teaming', path: '/testing/llm-red-team', icon: ShieldAlert },
                    { name: 'Multi-Agent Testing', path: '/testing/multi-agent', icon: Bot },
                    { name: 'AI Testing E2E', path: '/testing/ai', icon: Brain },
                    { name: 'Vector DB Testing', path: '/testing/vector-db', icon: Database },
                    { name: 'Manual Testing E2E', path: '/testing/manual', icon: FileSearch },
                    { name: 'Web & Mobile UI', path: '/testing/manual/web-elements', icon: MousePointerClick },
                    { name: 'Automation Testing', path: '/testing/automation', icon: FileTerminal },
                    { name: 'API Testing', path: '/testing/api', icon: Zap },
                    { name: 'Performance Testing', path: '/testing/performance', icon: Gauge },
                    { name: 'Database Testing', path: '/testing/database', icon: Database },
                    { name: 'Security Testing', path: '/testing/security', icon: ShieldAlert },
                ]
            },
        ]
    },
    {
        name: 'Resources',
        icon: FileText,
        submodules: [
            { name: 'Blog', path: '/blog', icon: FileText },
            { name: 'Roadmaps', path: '/roadmaps', icon: Map },
            { name: 'Courses', path: '/courses', icon: Video },
            { name: 'Free Resources', path: '/resources', icon: Zap },
        ]
    },
    {
        name: 'Connect',
        icon: Users,
        submodules: [
            { name: 'Community', path: '/community', icon: Users },
            { name: 'About Us', path: '/about', icon: Users },
            { name: 'Contact', path: '/contact', icon: Mail },
        ]
    },
];

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({
        'Learning Modules': true,
        'Software Testing': true
    });
    const pathname = usePathname();

    const toggleModule = (moduleName: string) => {
        if (!isExpanded) setIsExpanded(true); // Auto-expand if clicking a module while collapsed
        setOpenModules(prev => ({ ...prev, [moduleName]: !prev[moduleName] }));
    };

    const MenuItem = ({ item, depth = 0 }: { item: any; depth?: number }) => {
        const hasSubmodules = item.submodules && item.submodules.length > 0;
        const isOpen = openModules[item.name];
        const isActive = pathname === item.path;

        return (
            <div className="mb-1">
                {hasSubmodules ? (
                    <button
                        onClick={() => toggleModule(item.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all hover:bg-[rgba(0,240,255,0.05)] ${isOpen ? 'text-[var(--neon-cyan)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                        style={{ paddingLeft: `${depth > 0 ? depth * 1 + 0.75 : 0.75}rem` }}
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            {isExpanded && <span className="font-medium text-sm text-left truncate">{item.name}</span>}
                        </div>
                        {isExpanded && (
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        )}
                    </button>
                ) : (
                    <Link
                        href={item.path || '#'}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all relative ${isActive ? 'text-[var(--neon-cyan)] bg-[rgba(0,240,255,0.05)] font-semibold' : 'text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.02)] hover:text-[var(--text-primary)]'}`}
                        style={{ paddingLeft: `${depth > 0 ? depth * 1 + 0.75 : 0.75}rem` }}
                    >
                        {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[var(--neon-cyan)] rounded-r-full shadow-[0_0_10px_var(--neon-cyan)]" />}
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {isExpanded && <span className="text-sm truncate">{item.name}</span>}
                    </Link>
                )}

                <AnimatePresence>
                    {hasSubmodules && isOpen && isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="mt-1">
                                {item.submodules.map((sub: any) => (
                                    <MenuItem key={sub.name} item={sub} depth={depth + 1} />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <motion.aside
            initial={false}
            animate={{ width: isExpanded ? 280 : 80 }}
            className="sticky top-0 h-screen glass border-r border-[var(--glass-border)] flex flex-col z-40 transition-all duration-300"
        >
            {/* Header */}
            <div className="h-20 flex items-center justify-between px-4 border-b border-[var(--glass-border)]">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    {isExpanded && (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-bold text-lg tracking-wider whitespace-nowrap">
                            QA <span className="neon-text">WIZARDS</span>
                        </motion.span>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
                {menuItems.map((item) => (
                    <MenuItem key={item.name} item={item} />
                ))}
            </div>

            {/* Footer Controls */}
            <div className="p-4 border-t border-[var(--glass-border)] flex flex-col gap-4">
                {isExpanded && (
                    <div className="flex items-center justify-between px-2">
                        <ThemeToggle />
                        <Link href="/login" className="text-sm font-semibold neon-text hover:underline">Login</Link>
                    </div>
                )}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-center gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] transition-all text-[var(--text-secondary)] hover:text-[var(--neon-cyan)]"
                    aria-label={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
                >
                    <SwitchCamera className="w-5 h-5 flex-shrink-0" />
                    {isExpanded && <span className="text-sm font-medium">Collapse Menu</span>}
                </button>
            </div>
        </motion.aside>
    );
}
