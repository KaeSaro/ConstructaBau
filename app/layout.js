import { Montserrat, IBM_Plex_Mono } from 'next/font/google';
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

// Montserrat mit sans-serif fallback
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['500'],
  fallback: ['sans-serif'],
});

const defaultMetadata = {
  title: 'Constructa Bau',
  description: 'Ihr Partner für Garten- und Landschaftsbau sowie Tiefbauarbeiten.',
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

export default function RootLayout({ children }) {
  const maintenance = maintenanceEnabled();

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${montserrat.variable} ${ibmPlexMono.variable} antialiased`}
        style={{
          fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
        }}
      >
        {!maintenance && <Header />}
        {children}
        {!maintenance && <Footer />}
      </body>
    </html>
  );
}
