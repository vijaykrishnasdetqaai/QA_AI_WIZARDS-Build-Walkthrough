import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicy() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8">Privacy <span className="neon-text">Policy</span></h1>
                <div className="glass-card p-6 md:p-10 space-y-6 text-[var(--text-secondary)] text-sm leading-relaxed">
                    <p><strong className="text-[var(--text-primary)]">Last Updated:</strong> March 1, 2026</p>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">1. Information We Collect</h2>
                        <p>We collect information you provide directly: name, email, and usage data. We also collect technical data including IP address, browser type, and device information to improve our services and ensure security.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Provide and improve our learning platform</li>
                            <li>Personalize your learning experience</li>
                            <li>Send relevant updates and communications</li>
                            <li>Analyze usage patterns to improve content</li>
                            <li>Ensure platform security and prevent abuse</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">3. Data Protection</h2>
                        <p>We implement industry-standard security measures including encryption, secure headers, and regular security audits. Your data is stored securely and never sold to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">4. Cookies</h2>
                        <p>We use essential cookies for authentication and preferences. Analytics cookies help us understand usage patterns. You can control cookie preferences through your browser settings.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">5. Your Rights</h2>
                        <p>You have the right to access, modify, or delete your personal data at any time. Contact us at privacy@qaawizards.com for any data-related requests.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">6. Contact</h2>
                        <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@qaawizards.com" className="text-[var(--neon-cyan)] hover:underline">privacy@qaawizards.com</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
