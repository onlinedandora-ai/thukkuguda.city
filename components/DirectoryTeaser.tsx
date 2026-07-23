'use client';

import React from 'react';
import Link from 'next/link';
import { DIRECTORY_LISTINGS } from '@/lib/data';
import { Star, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DirectoryTeaser() {
  const featuredListings = DIRECTORY_LISTINGS.slice(0, 6);

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase font-extrabold text-violet-600 dark:text-violet-400 tracking-wider">
              Verified Listings
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Thukkuguda Business Directory
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Browse top rated real estate projects, aerospace/IT employers, schools, clinics, and eateries.
            </p>
          </div>

          <Link
            href="/directory"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-violet-700 dark:text-violet-400 border border-slate-200 dark:border-slate-700">
                    {item.categoryLabel}
                  </span>
                  {item.isVerified && (
                    <span className="inline-flex items-center space-x-1 text-[11px] text-violet-600 dark:text-violet-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                <Link href={`/directory/${item.id}`} className="block group">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {item.name}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-violet-500" />
                  <span className="truncate">{item.address}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{item.rating} ({item.reviewCount} reviews)</span>
                </div>

                <Link
                  href={`/directory/${item.id}`}
                  className="font-bold text-violet-600 dark:text-violet-400 hover:underline"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
