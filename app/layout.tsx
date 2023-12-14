import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const ColorModeScriptWrapper = dynamic(
  () => import('@/components/ColorModeScriptWrapper'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeScriptWrapper />
        {children}
      </body>
    </html>
  );
}
