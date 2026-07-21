'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Search, PlusCircle, Menu, X, MapPin, Building2, Newspaper, Radio, HelpCircle, Megaphone, User } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Directory', href: '/directory', icon: Building2 },
    { name: 'Journal', href: '/journal', icon: Newspaper },
    { name: 'Highlights', href: '/#highlights', icon: MapPin },
    { name: 'Jobs & SEZ', href: '/#jobs', icon: Radio },
    { name: 'Community News', href: '/news', icon: Radio },
    { name: 'About', href: '/about', icon: HelpCircle },
    { name: 'Advertise', href: '/advertise', icon: Megaphone },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 glass-panel transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo & ORR Exit 14 Badge */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
                  T
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                      thukkuguda<span className="text-emerald-600 dark:text-emerald-400">.city</span>
                    </span>
                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      Exit 14
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    Dandora Hyperlocal Network
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center space-x-2.5">
              {/* Quick Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search site"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 rounded-lg transition-colors"
                title="Search directory & news"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* DARK MODE & LIGHT MODE TOGGLE BUTTON */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Dark and Light Mode"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center group"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Submit Post CTA */}
              <Link
                href="/news#submit"
                className="hidden sm:flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow transition-transform active:scale-95"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post News</span>
              </Link>

              {/* Auth / Login Link */}
              <Link
                href="/login"
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 rounded-lg transition-colors hidden sm:block"
                title="Account / Login"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <link.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/news#submit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-sm"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Post Local News</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center space-x-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Thukkuguda plots, jobs, businesses, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-80 overflow-y-auto space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Quick Category Suggestions
              </div>
              <div className="flex flex-wrap gap-2">
                {['HMDA Plots', 'Aerospace SEZ Jobs', 'TCS Adibatla', 'Wonderla', 'Villas', 'Schools', 'Hospitals'].map((chip) => (
                  <Link
                    key={chip}
                    href={`/search?q=${encodeURIComponent(chip)}`}
                    onClick={() => setSearchOpen(false)}
                    className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs hover:bg-emerald-100 dark:hover:bg-emerald-950/80 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
                  >
                    {chip}
                  </Link>
                ))}
              </div>

              {searchQuery && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                  >
                    <span>Search for &quot;{searchQuery}&quot; across directory & journal</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
