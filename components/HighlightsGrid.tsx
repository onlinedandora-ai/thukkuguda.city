'use client';

import React from 'react';
import { HIGHLIGHTS_DATA } from '@/lib/data';
import { Compass, ArrowUpRight, Building2, Radio, Ticket, MapPin } from 'lucide-react';

const categoryIconMap: Record<string, React.ElementType> = {
  'adibatla-sez': Building2,
  'tcs-campus': Radio,
  'wonderla': Ticket,
  'orr-exit14': MapPin,
};

const categoryBgMap: Record<string, string> = {
  'adibatla-sez': 'from-violet-600 to-indigo-900',
  'tcs-campus': 'from-fuchsia-600 to-violet-950',
  'wonderla': 'from-amber-500 to-rose-700',
  'orr-exit14': 'from-violet-700 to-slate-900',
};

export default function HighlightsGrid() {
  return (
    <section id="highlights" className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            <Compass className="w-4 h-4" />
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
          {HIGHLIGHTS_DATA.map((card) => {
            const IconComponent = categoryIconMap[card.id] || Building2;
            const bgGradient = categoryBgMap[card.id] || 'from-violet-600 to-slate-900';

            return (
              <div
                key={card.id}
                className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Graphic Header Block */}
                  <div className={`relative h-44 w-full bg-gradient-to-br ${bgGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="bg-slate-950/70 text-violet-300 text-[11px] font-extrabold px-3 py-1 rounded-full border border-violet-400/30">
                        {card.badge}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 z-10">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold text-white/90 uppercase tracking-wide">
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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
                    className="inline-flex items-center space-x-1 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 pt-3 border-t border-slate-200 dark:border-slate-800 w-full"
                  >
                    <span>Read coverage &amp; listings</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
