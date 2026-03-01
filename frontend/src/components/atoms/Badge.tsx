interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

export default function Badge({ children, color = 'var(--neon-cyan)', className = '' }: BadgeProps) {
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${className}`}
            style={{
                borderColor: `${color}40`,
                color: color,
                background: `${color}10`,
            }}
        >
            {children}
        </span>
    );
}
