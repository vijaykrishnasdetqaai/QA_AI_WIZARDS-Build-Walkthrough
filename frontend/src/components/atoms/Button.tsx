'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
}

export default function Button({
    children, variant = 'primary', size = 'md', onClick, type = 'button',
    disabled = false, className = '', ariaLabel,
}: ButtonProps) {
    const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--neon-cyan)]';

    const variants = {
        primary: 'neon-btn',
        secondary: 'glass neon-border text-[var(--text-primary)] hover:bg-[rgba(0,240,255,0.1)]',
        ghost: 'text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:bg-[rgba(0,240,255,0.05)]',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {children}
        </motion.button>
    );
}
