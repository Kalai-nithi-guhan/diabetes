import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
// import Footer from './components/Footer'; // Uncomment if you use a Footer component

export const metadata: Metadata = {
  title: 'Diabetes Risk Predictor - AI-Powered Health Insights',
  description: 'Predict your diabetes risk with our AI-powered tool. Learn about symptoms, prevention, and manage your health effectively.',
  keywords: ['diabetes prediction', 'AI health', 'risk assessment', 'diabetes prevention', 'health tool'],
  authors: [{ name: 'Your Team Name', url: 'https://example.com' }],
  creator: 'Your Team Name',
  publisher: 'Your Team Name',
  openGraph: {
    title: 'Diabetes Risk Predictor',
    description: 'Predict your diabetes risk with our AI-powered tool.',
    url: 'https://example.com',
    siteName: 'Diabetes Risk Predictor',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diabetes Risk Predictor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diabetes Risk Predictor',
    description: 'Predict your diabetes risk with our AI-powered tool.',
    creator: '@YourTwitterHandle',
    images: ['https://example.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-inter">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}