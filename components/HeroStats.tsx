'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, MapPin, Users } from 'lucide-react';

export default function HeroStats() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">

      {/* Glow ambient background graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/10 dark:bg-violet-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-fuchsia-500/10 dark:bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">

          {/* Eyebrow */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-violet-100 dark:bg-violet-950/80 border border-violet-300 dark:border-violet-800 text-violet-800 dark:text-violet-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <MapPin className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>Thukkuguda, Telangana &mdash; local &amp; unfiltered</span>
            </div>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Everything Thukkuguda. <br className="hidden sm:inline" />
            <span className="gradient-text-violet">Jobs, plots, and neighbors</span> &mdash; in one place.
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            The local journal and business directory built for Thukkuguda (ORR Exit 14), Adibatla Aerospace SEZ, and the Srisailam Highway growth corridor.
          </p>

          {/* Action CTA Button - 1 prominent button styled for dark & light mode */}
          <div className="flex items-center justify-center pt-2">
            <Link
              href="/directory"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-400 text-white dark:text-slate-950 font-bold text-base sm:text-lg shadow-xl shadow-violet-600/20 dark:shadow-violet-500/20 transition-all hover:scale-105 active:scale-95 group"
            >
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Explore Thukkuguda Directory &amp; News</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3-Stat Strip Component */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-center space-x-2 text-violet-600 dark:text-violet-400 mb-1">
                <Building2 className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">42</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Businesses Listed
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="flex items-center justify-center space-x-2 text-fuchsia-600 dark:text-fuchsia-400 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">6</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                Wards &amp; Localities
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
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
