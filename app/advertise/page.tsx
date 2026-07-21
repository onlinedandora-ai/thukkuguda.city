'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Megaphone, CheckCircle2, ExternalLink, Send } from 'lucide-react';

export default function AdvertisePage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [packageType, setPackageType] = useState('homepage-sponsored');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5" />
              <span>Real Estate &amp; Business Advertising</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Advertise on thukkuguda.city
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Reach thousands of active plot buyers, villa seekers, and tech professionals relocating to ORR Exit 14 and Adibatla Aerospace SEZ.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1 space-y-12">
        
        {/* Rate Card Packages */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Sponsored Listing Packages &amp; Rate Card
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Select a package tailored for HMDA open plots, villa projects, or local business visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Package 1 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Directory Placement
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Verified Directory Listing
                </h3>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  &#8377;2,999 <span className="text-xs font-normal text-slate-400">/ year</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Verified business badge</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Google Maps embed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct phone &amp; address listing</span>
                  </li>
                </ul>
              </div>

              <a
                href="#inquire"
                onClick={() => setPackageType('directory-listing')}
                className="w-full text-center py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs"
              >
                Select Package
              </a>
            </div>

            {/* Package 2 (Featured) */}
            <div className="bg-gradient-to-b from-emerald-900 to-slate-900 text-white rounded-2xl p-6 border-2 border-emerald-500 shadow-xl space-y-6 flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                Most Popular for Developers
              </div>
              <div className="space-y-4 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Homepage Sponsored Card
                </span>
                <h3 className="text-xl font-bold text-white">
                  Sponsored Feature Card
                </h3>
                <div className="text-3xl font-extrabold text-white">
                  &#8377;14,999 <span className="text-xs font-normal text-slate-300">/ month</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Prime homepage placement unit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>High-visibility gradient border</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct lead routing to sales team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Includes 1 Sponsored Journal post</span>
                  </li>
                </ul>
              </div>

              <a
                href="#inquire"
                onClick={() => setPackageType('homepage-sponsored')}
                className="w-full text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg"
              >
                Select Package
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Dandora Full Network
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  ORR Network Growth Suite
                </h3>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Custom <span className="text-xs font-normal text-slate-400">/ campaign</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cross-city placement (Keesara + Thukkuguda)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dedicated video film &amp; project funnel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Managed lead-gen funnel on dandora.online</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://dandora.online/sectors/real-estate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-1"
              >
                <span>Visit dandora.online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Developer Inquiry Form */}
        <div id="inquire" className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm max-w-2xl mx-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Inquire About Advertising
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Fill in your project details and the Dandora sales team will respond within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h3 className="font-bold text-lg">Inquiry Received!</h3>
              <p className="text-xs">Thank you, {name}. Our sales manager will contact you at {phone || email} shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Reddy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Company / Project Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Infra Projects"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Package Choice</label>
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="directory-listing">Verified Directory Listing (&#8377;2,999/yr)</option>
                  <option value="homepage-sponsored">Homepage Sponsored Feature Card (&#8377;14,999/mo)</option>
                  <option value="full-network">Dandora Full Network Growth Suite</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Advertising Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>

      <Footer />
    </main>
  );
}
