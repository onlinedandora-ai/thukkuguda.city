import Navbar from '@/components/Navbar';
import HeroStats from '@/components/HeroStats';
import CommuteWidget from '@/components/CommuteWidget';
import HighlightsGrid from '@/components/HighlightsGrid';
import JobsModule from '@/components/JobsModule';
import SponsoredCard from '@/components/SponsoredCard';
import DirectoryTeaser from '@/components/DirectoryTeaser';
import JournalTeaser from '@/components/JournalTeaser';
import SubmissionCTA from '@/components/SubmissionCTA';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thukkuguda City | ORR Exit 14 News & Directory',
  description: 'The local journal and business directory for Thukkuguda (Tukkuguda) - ORR Exit 14, near Adibatla Aerospace SEZ and TCS. News, plots, and local business listings.',
  openGraph: {
    title: 'Thukkuguda City | ORR Exit 14 News & Directory',
    description: 'Everything Thukkuguda. Jobs, plots, and neighbors - in one place.',
    url: 'https://thukkuguda.city',
    siteName: 'thukkuguda.city',
    images: [
      {
        url: '/images/orr-exit14.jpg',
        width: 1200,
        height: 630,
        alt: 'Outer Ring Road Exit 14 Tukkuguda Highway',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      
      <HeroStats />
      
      <CommuteWidget />

      <HighlightsGrid />

      <JobsModule />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SponsoredCard />
      </div>

      <DirectoryTeaser />

      <JournalTeaser />

      <SubmissionCTA />

      <Footer />
    </main>
  );
}
