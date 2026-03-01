'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold neon-text mb-4">404</h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
                <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="neon-btn px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2">
                        <Home className="w-4 h-4" /> Go Home
                    </Link>
                    <button onClick={() => history.back()} className="glass neon-border px-6 py-3 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-[rgba(0,240,255,0.1)] transition-all">
                        <ArrowLeft className="w-4 h-4" /> Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
