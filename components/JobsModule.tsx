'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, Building2, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function JobsModule() {
  return (
    <section id="jobs" className="py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
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
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Tata Advanced Systems Aerospace SEZ</h4>
                  <p className="text-xs text-slate-400">Manufactures Boeing, Sikorsky, and Lockheed Martin aerostructures on a 50+ acre campus.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">TCS Adibatla IT/ITES Hub</h4>
                  <p className="text-xs text-slate-400">1.8 Million sq ft campus accommodating thousands of tech engineers and cloud architects.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
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
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-all shadow-md"
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

          {/* Image Right Column with dual image preview */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            
            <div className="space-y-4">
              <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                <Image
                  src="/images/sez-adibatla.jpg"
                  alt="Tata Advanced Systems Aerospace SEZ"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex items-end">
                  <span className="text-xs font-bold text-white">TASL Aerospace Hangar</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <div className="font-bold text-emerald-400 mb-1">Direct Exit 14 Access</div>
                8 minutes commute from Thukkuguda main road to SEZ entrance gates.
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative h-56 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                <Image
                  src="/images/tcs-campus.jpg"
                  alt="TCS Adibatla Campus"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex items-end">
                  <span className="text-xs font-bold text-white">TCS 1.8M Sq Ft Campus</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <div className="font-bold text-cyan-400 mb-1">Executive PGs &amp; Shuttles</div>
                Active daily shuttles and executive hostel developments.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
