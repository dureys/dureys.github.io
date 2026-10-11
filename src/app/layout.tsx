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
  metadataBase: new URL('https://dureys.github.io'),
  alternates: { canonical: '/' },
  title: 'Oguzhan Durace | AI Systems Builder & Integrator',
  description:
    'AI implementation, workflow automation and business systems. Enterprise delivery experience and independent AI products, with process ownership from discovery through adoption. Berlin.',
  openGraph: {
    title: 'Oguzhan Durace | AI Systems Builder & Integrator',
    description:
      'AI implementation, workflow automation and business systems. Enterprise delivery experience and independent AI products, with process ownership from discovery through adoption. Berlin.',
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
