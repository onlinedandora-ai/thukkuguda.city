'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Building2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Editorial &amp; Sales
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Get in touch with the thukkuguda.city local publishing team or Dandora network managers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Direct Contacts</h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">General &amp; Editorial</div>
                  <a href="mailto:thukkuguda@dandora.online" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                    thukkuguda@dandora.online
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Dandora Network HQ</div>
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Coverage Footprint</div>
                  <span>Thukkuguda, ORR Exit 14, Adibatla SEZ, Maheshwaram Mandal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Message</h2>
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200 text-xs font-semibold text-center">
                Message sent successfully! We will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input required type="text" className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input required type="email" className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea required rows={3} className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
                </div>
                <button type="submit" className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
