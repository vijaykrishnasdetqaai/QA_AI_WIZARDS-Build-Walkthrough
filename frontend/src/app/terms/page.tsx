import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms & Conditions' };

export default function Terms() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms & <span className="neon-text">Conditions</span></h1>
                <div className="glass-card p-6 md:p-10 space-y-6 text-[var(--text-secondary)] text-sm leading-relaxed">
                    <p><strong className="text-[var(--text-primary)]">Last Updated:</strong> March 1, 2026</p>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing and using QA_AI_WIZARDS, you agree to be bound by these terms. If you do not agree, please do not use our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">2. User Accounts</h2>
                        <p>You are responsible for maintaining the security of your account credentials. You must provide accurate information during registration and keep it updated.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">3. Content Usage</h2>
                        <p>All content on QA_AI_WIZARDS is for educational purposes. You may not redistribute, sell, or claim ownership of our content without written permission.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">4. User Conduct</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Be respectful in community interactions</li>
                            <li>Do not share harmful or misleading content</li>
                            <li>Do not attempt to exploit platform vulnerabilities</li>
                            <li>Respect intellectual property rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">5. Limitation of Liability</h2>
                        <p>QA_AI_WIZARDS provides educational content as-is. We are not liable for any direct or indirect damages arising from the use of our platform or content.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">6. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of updated terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">7. Contact</h2>
                        <p>For questions about these terms, contact <a href="mailto:legal@qaawizards.com" className="text-[var(--neon-cyan)] hover:underline">legal@qaawizards.com</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
