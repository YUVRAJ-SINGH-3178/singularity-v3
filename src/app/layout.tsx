import { Unbounded } from 'next/font/google';
import { EntryWrapper } from '../components/EntryWrapper';
import Navbar from '../components/Navbar'; 
import type { Metadata } from 'next';
import './globals.css';

const unbounded = Unbounded({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Singularity Student Lab | SRMAP',
  description: 'The Singularity Advanced Student Research Lab at SRM University AP pioneers innovative research in artificial intelligence, quantum algorithms, spatial computing, and robotics.',
  openGraph: {
    title: 'Singularity Student Lab | SRMAP',
    description: 'Pioneering research in AI, quantum algorithms, and spatial computing at SRM University AP.',
    url: 'https://singularitylabsrmap.space',
    siteName: 'Singularity Student Lab',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} bg-black min-h-screen text-white overflow-x-hidden`}>
        <EntryWrapper>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
        </EntryWrapper>
      </body>
    </html>
  );
}