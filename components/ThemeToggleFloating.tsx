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
        className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-white/95 text-white dark:text-slate-900 text-xs font-bold shadow-2xl hover:scale-105 active:scale-95 border border-slate-700/50 dark:border-slate-200/50 backdrop-blur-md transition-all cursor-pointer group"
      >
        {theme === 'dark' ? (
          <>
            <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    </div>
  );
}

