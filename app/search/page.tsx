'use client';

import React, { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DIRECTORY_LISTINGS, JOURNAL_ARTICLES, COMMUNITY_POSTS } from '@/lib/data';
import { Search, Building2, Newspaper, Radio } from 'lucide-react';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const matchingDirectory = DIRECTORY_LISTINGS.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.description.toLowerCase().includes(query.toLowerCase()) ||
      d.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const matchingJournal = JOURNAL_ARTICLES.filter(
    (j) =>
      j.title.toLowerCase().includes(query.toLowerCase()) ||
      j.dek.toLowerCase().includes(query.toLowerCase()) ||
      j.content.toLowerCase().includes(query.toLowerCase())
  );

  const matchingPosts = COMMUNITY_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.content.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults = matchingDirectory.length + matchingJournal.length + matchingPosts.length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Search Results for &quot;{query}&quot;
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Found {totalResults} matching results across directory, journal, and community feed.
        </p>
      </div>

      {totalResults === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-2">
          <Search className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">No results found</h3>
          <p className="text-xs text-slate-500">Try searching for keywords like &quot;plots&quot;, &quot;TCS&quot;, &quot;Wonderla&quot;, or &quot;schools&quot;.</p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* Directory Matches */}
          {matchingDirectory.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                <Building2 className="w-5 h-5" />
                <h2>Directory Listings ({matchingDirectory.length})</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingDirectory.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {item.categoryLabel}
                    </span>
                    <Link href={`/directory/${item.id}`} className="block font-bold text-slate-900 dark:text-white hover:text-emerald-500">
                      {item.name}
                    </Link>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Journal Matches */}
          {matchingJournal.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                <Newspaper className="w-5 h-5" />
                <h2>Journal Articles ({matchingJournal.length})</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingJournal.map((art) => (
                  <div key={art.slug} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {art.category}
                    </span>
                    <Link href={`/journal/${art.slug}`} className="block font-bold text-slate-900 dark:text-white hover:text-emerald-500">
                      {art.title}
                    </Link>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{art.dek}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Matches */}
          {matchingPosts.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                <Radio className="w-5 h-5" />
                <h2>Community Reports ({matchingPosts.length})</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingPosts.map((post) => (
                  <div key={post.id} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                    <Link href={`/news/${post.slug}`} className="block font-bold text-slate-900 dark:text-white hover:text-emerald-500">
                      {post.title}
                    </Link>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <Suspense fallback={<div className="text-center py-12 text-slate-400">Loading search results...</div>}>
          <SearchResultsContent />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
