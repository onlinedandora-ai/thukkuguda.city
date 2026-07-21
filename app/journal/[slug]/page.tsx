import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JOURNAL_ARTICLES } from '@/lib/data';
import { Clock, User, ArrowLeft, ExternalLink, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Thukkuguda Journal',
    };
  }

  return {
    title: `${article.title} | Thukkuguda Journal`,
    description: article.dek.substring(0, 155),
    openGraph: {
      title: article.title,
      description: article.dek,
      url: `https://thukkuguda.city/journal/${article.slug}`,
      images: [{ url: article.featuredImage }],
      type: 'article',
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug);

  // Article JSON-LD Schema
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.dek,
    image: `https://thukkuguda.city${article.featuredImage}`,
    datePublished: '2026-07-18T08:00:00+05:30',
    dateModified: '2026-07-20T08:00:00+05:30',
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'thukkuguda.city / Dandora Network',
      url: 'https://thukkuguda.city',
    },
  };

  // FAQPage JSON-LD Schema if FAQs exist
  const faqJsonLd = article.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal Index</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Left Column */}
          <article className="lg:col-span-8 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              {/* Category & Date Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {article.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-emerald-500 pl-4 py-1">
                  {article.dek}
                </p>

                <div className="flex items-center space-x-3 pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-1.5 font-semibold text-slate-800 dark:text-slate-200">
                    <User className="w-4 h-4 text-emerald-500" />
                    <span>{article.author.name}</span>
                  </div>
                  <span>&bull;</span>
                  <span>{article.author.role}</span>
                  <span>&bull;</span>
                  <span>{article.publishDate}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Content Body */}
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 space-y-4 text-sm sm:text-base leading-relaxed">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('* ')) {
                    return (
                      <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                        {paragraph.split('\n* ').map((item, i) => (
                          <li key={i}>{item.replace('* ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote key={index} className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900 dark:text-amber-200 my-6">
                        {paragraph.replace('> ', '')}
                      </blockquote>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>

              {/* Contextual Link to Dandora Real Estate Sector */}
              {article.category === 'Real Estate' && (
                <div className="my-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
                      Developing a project near ORR Exit 14?
                    </h4>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300">
                      Market your open plots or villa communities to buyers who will live there with Dandora.
                    </p>
                  </div>
                  <a
                    href="https://dandora.online/sectors/real-estate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow"
                  >
                    <span>Dandora Real Estate Sector</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* FAQs Accordion Block */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                    <HelpCircle className="w-5 h-5" />
                    <h2>Frequently Asked Questions</h2>
                  </div>
                  <div className="space-y-3">
                    {article.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                        <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </article>

          {/* Side Rail Right Column */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Directory Category Links */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Related Directory Categories
              </h3>
              <div className="space-y-2">
                <Link
                  href="/directory/real-estate-developers"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Real Estate &amp; Developers</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/directory/aerospace-it-employers"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Aerospace &amp; IT Employers</span>
                  <span>&rarr;</span>
                </Link>
                <Link
                  href="/directory/hospitality-food"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Hostels, PGs &amp; Wonderla</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Related Articles Rail */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                More Thukkuguda Coverage
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <div key={rel.slug} className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      {rel.category}
                    </span>
                    <Link
                      href={`/journal/${rel.slug}`}
                      className="block font-bold text-sm text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2"
                    >
                      {rel.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>

      <Footer />
    </main>
  );
}
