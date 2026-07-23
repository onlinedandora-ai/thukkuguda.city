'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Star, ShieldCheck, MapPin } from 'lucide-react';

export default function SponsoredCard() {
  return (
    <div className="my-10 p-1 rounded-2xl bg-gradient-to-r from-amber-500 via-violet-500 to-fuchsia-500 shadow-xl">
      <div className="bg-white dark:bg-slate-900 rounded-[14px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Info Column */}
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
              Sponsored Placement
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
              <span>Verified HMDA Layout</span>
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Aspirealty KingsDell &mdash; HMDA Plotted Layout at ORR Exit 14
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Premium 200&ndash;300 sq. yd. open plot layout right off the Srisailam Highway junction. Features 40ft &amp; 60ft wide bitumen roads, underground electric cabling, and 15-min airport transit.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 dark:text-slate-300 pt-1">
            <div className="flex items-center space-x-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.1 Stars (60 Reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-violet-500" />
              <span>Near Exit 14, Srisailam Highway</span>
            </div>
          </div>
        </div>

        {/* Right CTA Box */}
        <div className="w-full md:w-auto shrink-0 flex flex-col space-y-3">
          <Link
            href="/directory/aspirealty-kingsdell"
            className="w-full text-center px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow transition-all"
          >
            View Project Details
          </Link>

          <a
            href="https://dandora.online/sectors/real-estate"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center space-x-1 transition-colors"
          >
            <span>Advertise Project with Dandora</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
