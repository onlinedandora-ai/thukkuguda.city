'use client';

import React from 'react';
import Link from 'next/link';
import { JOURNAL_ARTICLES } from '@/lib/data';
import { Newspaper, Clock, User, ArrowRight, Building2, Radio, Ticket } from 'lucide-react';

const journalBgMap: Record<string, string> = {
  'why-thukkuguda-is-hyderabads-next-orr-corridor': 'from-violet-700 via-indigo-900 to-slate-950',
  'inside-adibatla-aerospace-sez-tcs-campus-jobs': 'from-fuchsia-700 via-violet-900 to-slate-950',
  'weekend-in-thukkuguda-wonderla-ayyappa-temple': 'from-amber-600 via-rose-900 to-slate-950',
};

const journalIconMap: Record<string, React.ElementType> = {
  'why-thukkuguda-is-hyderabads-next-orr-corridor': Building2,
  'inside-adibatla-aerospace-sez-tcs-campus-jobs': Radio,
  'weekend-in-thukkuguda-wonderla-ayyappa-temple': Ticket,
};

export default function JournalTeaser() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              <Newspaper className="w-4 h-4" />
              <span>Thukkuguda Journal</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Deep-Dive Local Coverage
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Unfiltered reports on Exit 14 real estate dynamics, Aerospace SEZ jobs, and neighborhood guides.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
          >
            <span>All Journal Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => {
            const IconComponent = journalIconMap[article.slug] || Newspaper;
            const bgGradient = journalBgMap[article.slug] || 'from-violet-700 to-slate-950';

            return (
              <article
                key={article.slug}
                className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Editorial Banner Header */}
                  <div className={`relative h-44 w-full bg-gradient-to-br ${bgGradient} p-6 flex flex-col justify-between overflow-hidden`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="bg-violet-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 z-10">
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold text-violet-200 tracking-wide">
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </span>
                      <span>&bull;</span>
                      <span>{article.publishDate}</span>
                    </div>

                    <Link href={`/journal/${article.slug}`} className="block">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {article.dek}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-800/80 mt-4 text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-600 dark:text-slate-400">
                    <User className="w-3.5 h-3.5 text-violet-500" />
                    <span className="font-medium">{article.author.name}</span>
                  </div>

                  <Link
                    href={`/journal/${article.slug}`}
                    className="font-bold text-violet-600 dark:text-violet-400 hover:underline"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
