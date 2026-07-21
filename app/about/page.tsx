import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, MapPin, Building2, Radio, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About thukkuguda.city | Dandora Hyperlocal Network',
  description: 'Learn about thukkuguda.city - the local journal and business directory for Thukkuguda, ORR Exit 14, and Adibatla Aerospace SEZ.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Independent Local Publishing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              About thukkuguda.city
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              The town that works: an industrial, aerospace, and infrastructure node on Hyderabad&apos;s southern Outer Ring Road.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1 space-y-8">
        
        {/* Positioning Box */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Our Identity &amp; Positioning
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">thukkuguda.city</span> is the local journal and business directory for Thukkuguda (also spelled Tukkuguda), the ORR Exit 14 town on Hyderabad&apos;s southern growth arc.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Unlike heritage nodes, Thukkuguda&apos;s identity is built on infrastructure: India&apos;s first dedicated Aerospace SEZ next door at Adibatla, a 1.8 million sq ft TCS campus, the Srisailam Highway corridor toward Pharma City and Fab City, and a 15-minute run to Rajiv Gandhi International Airport.
          </p>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The site reads as &quot;the town that works&quot; &mdash; a place people move to for a job or an investment, with directory coverage weighted toward aerospace/IT employers, developers, and the services supporting a fast-growing working population.
          </p>
        </div>

        {/* The Dandora Network Context */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-emerald-600 dark:text-emerald-400 font-bold text-xl">
            <Building2 className="w-6 h-6" />
            <h2>Node of the Dandora Hyperlocal Network</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white">Dandora (dandora.online)</span> operates a network of ORR hyperlocal city properties, including <span className="text-emerald-600 dark:text-emerald-400 font-semibold">keesara.city</span>, thukkuguda.city, and upcoming nodes along Shamirpet, Medchal, and Future City.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Lead Funnel &amp; Sector Growth</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Pitches real estate film, funnel, and demand generation services to developers seeking genuine buyers.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">SEO Authority Compounding</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Shared component libraries, URL conventions, and cross-site linking consolidate ORR search equity.</p>
            </div>
          </div>
        </div>

        {/* Editorial Policy */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Editorial Policy &amp; Transparency
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white">Fact Attribution:</strong> All population figures, real-estate price projections, and job claims are explicitly attributed and dated.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white">HMDA / RERA Verification:</strong> Property listings clearly distinguish between verified layout permissions and speculative proposals.</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong className="text-slate-900 dark:text-white">Sponsored Content Disclosure:</strong> Commercial placements carry prominent &quot;Sponsored Placement&quot; labels.</span>
            </li>
          </ul>
        </div>

      </div>

      <Footer />
    </main>
  );
}
