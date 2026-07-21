'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { COMMUNITY_POSTS, CommunityPost } from '@/lib/data';
import { Radio, ThumbsUp, MessageSquare, MapPin, PlusCircle, Send } from 'lucide-react';

export default function NewsFeedPage() {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('Thukkuguda');
  const [newContent, setNewContent] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleUpvote = (id: string) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: newTitle,
      author: newAuthor || 'Resident Neighbor',
      date: 'Just now',
      location: newLocation,
      category: 'Civic Report',
      content: newContent,
      upvotes: 1,
      status: 'In Review',
      commentsCount: 0,
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewAuthor('');
    setNewContent('');
    setSubmittedMessage('Your local report has been submitted to the moderation queue! It will go live after review.');
    setTimeout(() => setSubmittedMessage(''), 6000);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5" />
              <span>Unfiltered Community Feed</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Thukkuguda Community News
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              User-submitted reports on civic updates, road maintenance, school announcements, and local events around Exit 14.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Feed Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Recent Local Reports ({posts.length})
              </h2>
              <a
                href="#submit"
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Submit Your Report</span>
              </a>
            </div>

            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="font-bold px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
                        {post.category}
                      </span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-emerald-500" />
                        <span>{post.location}</span>
                      </span>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                        post.status === 'Approved'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                          : 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>

                  <Link href={`/news/${post.slug}`} className="block group">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {post.content}
                  </p>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      Reported by <span className="font-semibold text-slate-800 dark:text-slate-200">{post.author}</span> &bull; {post.date}
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleUpvote(post.id)}
                        className="flex items-center space-x-1 font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-2 py-1 rounded transition-colors"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span>{post.upvotes}</span>
                      </button>

                      <Link
                        href={`/news/${post.slug}`}
                        className="flex items-center space-x-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{post.commentsCount} Comments</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Submission Form Right Column */}
          <div id="submit" className="lg:col-span-5">
            <div className="sticky top-20 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <PlusCircle className="w-5 h-5 text-emerald-500" />
                  <span>Submit Local Report</span>
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Report civic issues, village developments, traffic updates, or neighborhood news.
                </p>
              </div>

              {submittedMessage && (
                <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 text-xs font-semibold">
                  {submittedMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Report Title / Headline *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. New water pipeline installation near Exit 14"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name / Handle
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Resident Ward 3"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Locality Tag
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thukkuguda Village"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Report Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide accurate details about what is happening..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit to Moderation Queue</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
