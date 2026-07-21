'use client';

import React from 'react';
import Image from 'next/image';
import { HIGHLIGHTS_DATA } from '@/lib/data';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function HighlightsGrid() {
  return (
    <section id="highlights" className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>Know Your Town</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Highlights of Thukkuguda
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            The industry, infrastructure, and landmarks that make Thukkuguda worth covering.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS_DATA.map((card) => (
            <div
              key={card.id}
              className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div>
                {/* Image Container with high aesthetic aspect ratio */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-emerald-400 text-[11px] font-bold px-2.5 py-1 rounded-full border border-slate-700">
                    {card.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-2">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    {card.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-5 pt-0">
                <a
                  href="#jobs"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 pt-3 border-t border-slate-200 dark:border-slate-800 w-full"
                >
                  <span>Read coverage &amp; listings</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
