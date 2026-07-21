import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DIRECTORY_LISTINGS, DirectoryListing } from '@/lib/data';
import { Star, MapPin, Phone, CheckCircle2, ShieldCheck, ExternalLink, ArrowLeft, Building2, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const item = DIRECTORY_LISTINGS.find((l) => l.id === resolvedParams.slug);

  if (!item) {
    return {
      title: 'Listing Not Found | Thukkuguda Directory',
    };
  }

  return {
    title: `${item.name} - Thukkuguda | thukkuguda.city`,
    description: `${item.name}, ${item.categoryLabel} in Thukkuguda. ${item.rating} stars, ${item.reviewCount} reviews. Address, phone, and location map.`,
    openGraph: {
      title: `${item.name} - Thukkuguda | thukkuguda.city`,
      description: item.description,
      images: item.image ? [{ url: item.image }] : [],
    },
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const item = DIRECTORY_LISTINGS.find((l) => l.id === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: item.name,
    description: item.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: item.address,
      addressLocality: 'Thukkuguda',
      addressRegion: 'Telangana',
      postalCode: '501359',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: item.coordinates.lat,
      longitude: item.coordinates.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: item.rating,
      reviewCount: item.reviewCount,
    },
    telephone: item.phone,
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Back Link */}
        <Link
          href="/directory"
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Directory Index</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Info Left Column */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              {item.image && (
                <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
                    {item.categoryLabel}
                  </span>
                  {item.isVerified && (
                    <span className="inline-flex items-center space-x-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verified Business</span>
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {item.name}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center space-x-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{item.rating} Stars ({item.reviewCount} Reviews)</span>
                  </div>
                  <span>&bull;</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    <span>Thukkuguda, ORR Exit 14</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  About {item.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Chips */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Features &amp; Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Google Maps Location Simulation */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Location &amp; Map
                </h3>
                <div className="relative h-60 w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center border border-slate-300 dark:border-slate-700">
                  <Image
                    src="/images/orr-exit14.jpg"
                    alt="Map location embed"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                  />
                  <div className="relative z-10 bg-slate-900/90 text-white p-4 rounded-xl text-center space-y-2 backdrop-blur-sm border border-slate-700">
                    <MapPin className="w-6 h-6 text-emerald-400 mx-auto" />
                    <div className="text-xs font-bold">{item.address}</div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(item.name + ' ' + item.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-400 hover:underline pt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Contact & Claim Box Right Column */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 dark:text-slate-300">{item.address}</span>
                  </div>
                  {item.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                      <a href={`tel:${item.phone}`} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                        {item.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Claim Business Listing Action */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
                  Do you manage or own <span className="font-bold">{item.name}</span>? Claim this listing to update hours, phone number, and respond to reviews.
                </div>
                <Link
                  href={`/login?claim=${encodeURIComponent(item.id)}`}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Claim This Listing</span>
                </Link>
              </div>

              {/* Real estate section CTA if category is real estate */}
              {item.category === 'real-estate-developers' && (
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Real Estate Marketing</span>
                  <p className="text-xs text-slate-500">Market your project to serious Exit 14 buyers with Dandora.</p>
                  <a
                    href="https://dandora.online/sectors/real-estate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Visit Dandora Real Estate Sector</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}
