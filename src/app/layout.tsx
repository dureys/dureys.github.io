import type { Metadata } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Oguzhan Durace | AI Automation Architect',
  description:
    'I build AI systems that reach production and stay there. Lead engine: 40% more conversion. Support AI: 60% less triage time. Berlin.',
  openGraph: {
    title: 'Oguzhan Durace | AI Automation Architect',
    description:
      'I build AI systems that reach production and stay there. Lead engine: 40% more conversion. Support AI: 60% less triage time. Berlin.',
    url: 'https://dureys.github.io',
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
    <html
      lang="en"
      className={`${bricolage.variable} ${plexSans.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
