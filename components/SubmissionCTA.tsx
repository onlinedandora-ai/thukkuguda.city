'use client';

import React from 'react';
import Link from 'next/link';
import { PlusCircle, Building2, Radio, CheckCircle, ArrowRight } from 'lucide-react';

export default function SubmissionCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950/40 rounded-3xl p-8 sm:p-12 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5" />
              <span>Hyperlocal Community Network</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              List Your Thukkuguda Business Free
            </h2>

            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
              Are you a developer, merchant, clinic, PG operator, or school in Thukkuguda or Adibatla? Claim your free verified listing on <span className="font-bold text-white">thukkuguda.city</span> and reach thousands of relocating families and tech professionals.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-medium text-emerald-200 pt-2">
              <span className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>100% Free Basic Listing</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Google Maps Location Embed</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>SEO Indexing on ORR Network</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto shrink-0">
            <Link
              href="/login?action=add-listing"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-base shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Building2 className="w-5 h-5 text-emerald-600" />
              <span>Add Business Listing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/news#submit"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-white font-semibold text-sm border border-emerald-400/30 transition-colors"
            >
              <PlusCircle className="w-4 h-4 text-emerald-400" />
              <span>Submit Community Report</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
