import { IBM_Plex_Mono, Cormorant_Garamond } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { maintenanceEnabled } from '../lib/maintenance-mode';

// IBM Plex Mono mit sans-serif fallback
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  fallback: ['sans-serif'],
});

// Serif-Fallback / Fließschrift (Cormorant); Jazmín Thin optional aus public/fonts — siehe globals.css @font-face
const cormorantDisplay = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['Georgia', 'serif'],
});

/** Einheitlich für Meta-Description, Open Graph und Twitter (Link-Vorschauen). */
const SITE_DESCRIPTION =
  'Ihr Partner für Maler- und Ausbauarbeiten, Tiefbau sowie Garten- und Landschaftsbau.';

const defaultMetadata = {
  title: 'Constructa Bau',
  description: SITE_DESCRIPTION,
  openGraph: {
    title: 'Constructa Bau',
    description: SITE_DESCRIPTION,
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Constructa Bau',
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export async function generateMetadata() {
  if (maintenanceEnabled()) {
    return {
      title: 'Constructa Bau – Wartung',
      description: 'Die Website wird derzeit gewartet.',
      robots: { index: false, follow: false, nocache: true },
    };
  }
  return defaultMetadata;
}

export default async function RootLayout({ children }) {
  const maintenance = maintenanceEnabled();
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  // Payload Admin/API liefert eigenes <html><body> – kein zusätzlicher Wrapper (verhindert Hydration-Fehler)
  if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
    return children;
  }

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${cormorantDisplay.variable} font-jazmin font-light antialiased`}
      >
        {!maintenance && <Header />}
        {children}
        {!maintenance && <Footer />}
      </body>
    </html>
  );
}
