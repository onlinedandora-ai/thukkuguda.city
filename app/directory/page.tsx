'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { DIRECTORY_LISTINGS } from '@/lib/data';
import { Search, Star, MapPin, Building2, CheckCircle2, Map, Grid, PlusCircle } from 'lucide-react';

const CATEGORIES = [
  { slug: 'all', label: 'All Categories' },
  { slug: 'real-estate-developers', label: 'Real Estate & Developers' },
  { slug: 'aerospace-it-employers', label: 'Aerospace / IT Employers' },
  { slug: 'education', label: 'Education' },
  { slug: 'healthcare', label: 'Healthcare' },
  { slug: 'hospitality-food', label: 'Hospitality & Food / Leisure' },
  { slug: 'retail-services', label: 'Retail & Services' },
];

export default function DirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const filteredListings = DIRECTORY_LISTINGS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Thukkuguda Business &amp; Employer Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Directory of Thukkuguda &amp; ORR Exit 14
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Verified local business listings, real estate projects, aerospace/IT employers, schools, and hospitals across Thukkuguda mandal.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Controls Bar: Search + Category Filter Chips + View Mode */}
        <div className="space-y-6 mb-8">
          
          {/* Search Input & View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, category, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm shadow-sm"
              />
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center p-1 rounded-xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>Grid View</span>
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                    viewMode === 'map'
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <Map className="w-4 h-4" />
                  <span>Map View</span>
                </button>
              </div>

              <Link
                href="/login?action=add-listing"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add Listing</span>
              </Link>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  selectedCategory === cat.slug
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* View Mode: Interactive Map Simulation */}
        {viewMode === 'map' ? (
          <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 mb-8">
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700">
              <Image
                src="/images/orr-exit14.jpg"
                alt="Thukkuguda Map View Simulation"
                fill
                sizes="100vw"
                className="object-cover opacity-60 dark:opacity-40"
              />
              <div className="relative z-10 bg-slate-900/90 text-white p-6 rounded-2xl max-w-md text-center space-y-3 backdrop-blur-md border border-slate-700 shadow-2xl">
                <MapPin className="w-8 h-8 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold">Interactive Google Maps Layer</h3>
                <p className="text-xs text-slate-300">
                  Displaying {filteredListings.length} geo-tagged listings across Thukkuguda Exit 14, Srisailam Highway corridor, and Adibatla Aerospace SEZ.
                </p>
                <div className="text-[11px] text-emerald-400 font-semibold uppercase">
                  Map Embed API Ready &bull; Coordinates Active
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Directory Listings Grid */}
        {filteredListings.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No listings found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search query or category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm card-hover-effect flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {item.image && (
                    <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 bg-slate-100 dark:bg-slate-800">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
                      {item.categoryLabel}
                    </span>
                    {item.isVerified && (
                      <span className="inline-flex items-center space-x-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  <Link href={`/directory/${item.id}`} className="block group">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-start space-x-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{item.address}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{item.rating} ({item.reviewCount} reviews)</span>
                  </div>

                  <Link
                    href={`/directory/${item.id}`}
                    className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <Footer />
    </main>
  );
}
