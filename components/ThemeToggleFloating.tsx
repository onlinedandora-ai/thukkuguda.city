'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggleFloating() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        className="flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-extrabold shadow-2xl hover:scale-105 active:scale-95 border border-slate-700/60 dark:border-slate-200/60 backdrop-blur-md transition-all cursor-pointer group hover:shadow-violet-500/25"
      >
        {theme === 'dark' ? (
          <>
            <div className="p-1 rounded-full bg-amber-400/20 text-amber-400">
              <Sun className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <span className="tracking-wide">Light Mode</span>
          </>
        ) : (
          <>
            <div className="p-1 rounded-full bg-violet-600/15 text-violet-600">
              <Moon className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-500" />
            </div>
            <span className="tracking-wide">Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
}

