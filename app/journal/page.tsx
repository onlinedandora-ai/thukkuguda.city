import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { JOURNAL_ARTICLES } from '@/lib/data';
import { Newspaper, Clock, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thukkuguda Journal | Local News, Real Estate & SEZ Analysis',
  description: 'In-depth articles and local journalism covering Thukkuguda ORR Exit 14 real estate, Adibatla Aerospace SEZ jobs, and neighborhood guides.',
};

export default function JournalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Hyperlocal Editorial Journal</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Thukkuguda Journal
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Analysis, news, and guides on Hyderabad&apos;s ORR Exit 14 southern growth arc.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        
        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                    {article.category}
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
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {article.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {article.dek}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-4 text-xs">
                <div className="flex items-center space-x-1.5 text-slate-600 dark:text-slate-400">
                  <User className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-medium">{article.author.name}</span>
                </div>

                <Link
                  href={`/journal/${article.slug}`}
                  className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
