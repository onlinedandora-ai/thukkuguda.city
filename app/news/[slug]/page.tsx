import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COMMUNITY_POSTS } from '@/lib/data';
import { MapPin, ThumbsUp, ArrowLeft, ShieldAlert } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = COMMUNITY_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found | Thukkuguda News' };
  }

  return {
    title: `${post.title} - Thukkuguda News | thukkuguda.city`,
    description: `Community-submitted report from Thukkuguda: ${post.content.substring(0, 140)}`,
  };
}

export default async function NewsPostDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = COMMUNITY_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        <Link
          href="/news"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Community News Feed</span>
        </Link>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-violet-700 dark:text-violet-400 border border-slate-200 dark:border-slate-700">
              {post.category}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300 border border-violet-300 dark:border-violet-800">
              {post.status} Moderated
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400 border-y border-slate-100 dark:border-slate-800 py-3">
            <span>By <span className="font-semibold text-slate-800 dark:text-slate-200">{post.author}</span></span>
            <span>&bull;</span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-violet-500" />
              <span>{post.location}</span>
            </span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>

          <div className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed space-y-4">
            <p>{post.content}</p>
          </div>

          {/* Comment Section & Report Abuse */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center space-x-3 font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center space-x-1 text-violet-600 dark:text-violet-400">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.upvotes} Upvotes</span>
              </span>
              <span>&bull;</span>
              <span>{post.commentsCount} Comments</span>
            </div>

            <button className="text-slate-400 hover:text-red-500 flex items-center space-x-1 font-medium">
              <ShieldAlert className="w-4 h-4" />
              <span>Report Abuse</span>
            </button>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
