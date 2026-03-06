import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Oguzhan Durace — AI Automation Architect',
  description:
    'AI Automation Architect & Salesforce Product Owner. I design and build AI-powered systems that drive measurable business outcomes.',
  openGraph: {
    title: 'Oguzhan Durace — AI Automation Architect',
    description:
      'Building intelligent enterprise systems with LLMs, multi-agent frameworks, and automation platforms.',
    url: 'https://dureys.github.io/ai-portfolio-hub',
    siteName: 'Oguzhan Durace',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
