import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { LanguageProvider } from '@/lib/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AutoUzbek - Car Dealer in Uzbekistan',
    template: '%s | AutoUzbek',
  },
  description:
    'Best deals on cars from China, Japan and Korea. Fast delivery across Uzbekistan.',
  keywords: [
    'car dealer',
    'Uzbekistan',
    'Tashkent',
    'Chinese cars',
    'Japanese cars',
    'Korean cars',
    'Chery',
    'Geely',
    'Haval',
    'Toyota',
    'Hyundai',
    'Kia',
  ],
  authors: [{ name: 'AutoUzbek', url: process.env.COZE_PROJECT_DOMAIN_DEFAULT }],
  generator: 'Coze Code',
  openGraph: {
    title: 'AutoUzbek - Your Trusted Car Dealer',
    description:
      'Best deals on cars from China, Japan and Korea with fast delivery across Uzbekistan.',
    url: process.env.COZE_PROJECT_DOMAIN_DEFAULT,
    siteName: 'AutoUzbek',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col`}>
        {isDev && <Inspector />}
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
