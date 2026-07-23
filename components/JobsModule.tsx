'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, Building2, ArrowRight, CheckCircle2, Radio } from 'lucide-react';

export default function JobsModule() {
  return (
    <section id="jobs" className="py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-800 text-violet-400 text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Jobs &amp; Industry Feature</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Adibatla Aerospace SEZ &amp; TCS IT Ecosystem
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Unlike single-industry outer suburbs, Thukkuguda sits directly adjacent to a dual-engine employment zone: precision aerospace manufacturing at Tata Advanced Systems Ltd (TASL) and enterprise IT services at the 1.8M sq ft TCS campus.
            </p>

            {/* Key Highlights Bullet points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Tata Advanced Systems Aerospace SEZ</h4>
                  <p className="text-xs text-slate-400">Manufactures Boeing, Sikorsky, and Lockheed Martin aerostructures on a 50+ acre campus.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">TCS Adibatla IT/ITES Hub</h4>
                  <p className="text-xs text-slate-400">1.8 Million sq ft campus accommodating thousands of tech engineers and cloud architects.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">High Demand for Housing &amp; PGs</h4>
                  <p className="text-xs text-slate-400">Drives active rental markets, executive PG accommodations, and villa plot purchases.</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/directory/aerospace-it-employers"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm transition-all shadow-md"
              >
                <Building2 className="w-4 h-4" />
                <span>Browse Aerospace &amp; IT Employers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/journal/inside-adibatla-aerospace-sez-tcs-campus-jobs"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
              >
                <span>Read Full Jobs Report</span>
              </Link>
            </div>

          </div>

          {/* Graphic Right Column with dual feature cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            
            <div className="space-y-4">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-900 to-slate-950 p-6 flex flex-col justify-between border border-slate-800 shadow-xl group">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20 w-fit text-white">
                  <Building2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-violet-300 uppercase tracking-wide">National SEZ Node</span>
                  <h4 className="text-sm font-bold text-white leading-snug">TASL Aerospace Hangar</h4>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <div className="font-bold text-violet-400 mb-1">Direct Exit 14 Access</div>
                8 minutes commute from Thukkuguda main road to SEZ entrance gates.
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-fuchsia-700 via-violet-900 to-slate-950 p-6 flex flex-col justify-between border border-slate-800 shadow-xl group">
                <div className="p-3 rounded-xl bg-white/10 border border-white/20 w-fit text-white">
                  <Radio className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-fuchsia-300 uppercase tracking-wide">IT Enterprise Hub</span>
                  <h4 className="text-sm font-bold text-white leading-snug">TCS 1.8M Sq Ft Campus</h4>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <div className="font-bold text-fuchsia-400 mb-1">Executive PGs &amp; Shuttles</div>
                Active daily shuttles and executive hostel developments.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
