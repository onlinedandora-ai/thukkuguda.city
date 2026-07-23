'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Editorial Policy */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-violet-600 text-white font-bold flex items-center justify-center text-base">
                T
              </div>
              <span className="font-extrabold text-xl text-white">
                thukkuguda<span className="text-violet-400">.city</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The local journal and business directory built for Thukkuguda (Tukkuguda) — ORR Exit 14, Rangareddy district. Unfiltered coverage of jobs, plots, and neighbors.
            </p>
            <div className="flex items-center space-x-2 text-xs text-violet-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Hyperlocal Publishing</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/directory" className="hover:text-violet-400 transition-colors">Directory Index</Link></li>
              <li><Link href="/directory/real-estate-developers" className="hover:text-violet-400 transition-colors">Real Estate & Plots</Link></li>
              <li><Link href="/directory/aerospace-it-employers" className="hover:text-violet-400 transition-colors">Aerospace & IT Employers</Link></li>
              <li><Link href="/journal" className="hover:text-violet-400 transition-colors">Journal Articles</Link></li>
              <li><Link href="/news" className="hover:text-violet-400 transition-colors">Community News Feed</Link></li>
              <li><Link href="/about" className="hover:text-violet-400 transition-colors">About & Editorial Policy</Link></li>
            </ul>
          </div>

          {/* Business & Advertising */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">For Business & Developers</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/advertise" className="hover:text-violet-400 transition-colors font-medium text-violet-400">Sponsored Listing Cards</Link></li>
              <li><Link href="/login" className="hover:text-violet-400 transition-colors">Claim Your Business Listing</Link></li>
              <li><a href="https://dandora.online/sectors/real-estate" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors flex items-center space-x-1"><span>Dandora Real Estate Sector</span><ExternalLink className="w-3 h-3" /></a></li>
              <li><Link href="/contact" className="hover:text-violet-400 transition-colors">Contact Sales & Editorial</Link></li>
            </ul>
          </div>

          {/* Elsewhere on the Network Module */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Elsewhere on the Network</h3>
            <p className="text-xs text-slate-400">Dandora ORR Hyperlocal Network sites:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="https://keesara.city" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-violet-400 flex items-center justify-between border border-slate-700">
                <span>keesara.city</span>
                <span className="text-[10px] text-violet-400 font-semibold">LIVE</span>
              </a>
              <a href="#" className="p-2 rounded bg-slate-800/40 text-slate-400 flex items-center justify-between border border-slate-800 cursor-not-allowed">
                <span>shamirpet.city</span>
                <span className="text-[10px] text-slate-500">SOON</span>
              </a>
              <a href="#" className="p-2 rounded bg-slate-800/40 text-slate-400 flex items-center justify-between border border-slate-800 cursor-not-allowed">
                <span>medchal.city</span>
                <span className="text-[10px] text-slate-500">SOON</span>
              </a>
              <a href="#" className="p-2 rounded bg-slate-800/40 text-slate-400 flex items-center justify-between border border-slate-800 cursor-not-allowed">
                <span>futurecity.city</span>
                <span className="text-[10px] text-slate-500">SOON</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            &copy; 2026 Dandora (dandora.online). All rights reserved. Thukkuguda / Tukkuguda ORR Exit 14 Journal.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-slate-400">Editorial Policy</Link>
            <Link href="/advertise" className="hover:text-slate-400">Rate Card</Link>
            <Link href="/contact" className="hover:text-slate-400">Contact Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
