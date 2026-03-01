import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Sidebar from '@/components/organisms/Sidebar';
import Footer from '@/components/organisms/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qaawizards.com'),
  title: {
    default: 'QA_AI_WIZARDS | Mastering AI, Cloud, DevOps & Software Testing',
    template: '%s | QA_AI_WIZARDS',
  },
  description: 'QA_AI_WIZARDS — Your gateway to mastering AI, Cloud Computing, DevOps Engineering, and Software Testing. Expert roadmaps, courses, and community for tech professionals.',
  keywords: ['AI', 'Machine Learning', 'Cloud Computing', 'DevOps', 'Software Testing', 'QA', 'Technology', 'Learning Platform'],
  authors: [{ name: 'QA_AI_WIZARDS' }],
  creator: 'QA_AI_WIZARDS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://qaawizards.com',
    siteName: 'QA_AI_WIZARDS',
    title: 'QA_AI_WIZARDS | Mastering AI, Cloud, DevOps & Software Testing',
    description: 'Your gateway to mastering AI, Cloud, DevOps & Software Testing.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'QA_AI_WIZARDS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA_AI_WIZARDS',
    description: 'Mastering AI, Cloud, DevOps & Software Testing',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'QA_AI_WIZARDS',
              url: 'https://qaawizards.com',
              logo: 'https://qaawizards.com/logo.png',
              description: 'Mastering AI, Cloud, DevOps & Software Testing',
              sameAs: ['https://twitter.com/qaawizards', 'https://github.com/qaawizards', 'https://linkedin.com/company/qaawizards'],
            }),
          }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased grid-bg min-h-screen flex">
        <ThemeProvider>
          <div className="flex w-full min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 ml-0 transition-all duration-300">
              <main id="main-content" className="flex-1" role="main">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
