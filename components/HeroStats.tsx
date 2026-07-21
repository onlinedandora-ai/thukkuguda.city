'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, MapPin, Users, Sparkles, Navigation } from 'lucide-react';

export default function HeroStats() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      
      {/* Glow ambient background graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Thukkuguda, Telangana &mdash; local &amp; unfiltered</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Everything Thukkuguda. <br className="hidden sm:inline" />
            <span className="gradient-text-emerald">Jobs, plots, and neighbors</span> &mdash; in one place.
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            The local journal and business directory built for Thukkuguda (ORR Exit 14), Adibatla Aerospace SEZ, and the Srisailam Highway growth corridor.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/directory"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-95"
            >
              <Building2 className="w-5 h-5" />
              <span>Explore Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/journal"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-base border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
            >
              <span>Read Journal Articles</span>
            </Link>
          </div>

          {/* 3-Stat Strip Component */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-1">
                <Building2 className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">42</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Businesses Listed
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">6</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Wards &amp; Localities
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2 text-amber-600 dark:text-amber-400 mb-1">
                <Users className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">1,250+</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Monthly Readers
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
