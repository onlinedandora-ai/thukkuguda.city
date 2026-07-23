'use client';

import React, { useState } from 'react';
import { COMMUTE_DESTINATIONS, CommuteDestination } from '@/lib/data';
import { Navigation, Clock, MapPin, Car, Shield, CheckCircle2 } from 'lucide-react';

export default function CommuteWidget() {
  const [selectedDestination, setSelectedDestination] = useState<CommuteDestination>(COMMUTE_DESTINATIONS[0]);

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-1">
              <Navigation className="w-4 h-4" />
              <span>ORR Exit 14 Connectivity Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Thukkuguda Commute Matrix &amp; Drive Times
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Calculate signal-free travel times from Exit 14 Srisailam Highway junction to major employment hubs.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 px-3 py-1.5 rounded-lg border border-violet-200 dark:border-violet-800 font-medium">
            <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span>Verified 8-Lane ORR Route Data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Destination Selector Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {COMMUTE_DESTINATIONS.map((dest) => {
              const isSelected = selectedDestination.id === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-violet-600 text-white border-violet-600 shadow-md scale-[1.01]'
                      : 'bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-violet-700 text-white' : 'bg-slate-100 dark:bg-slate-700 text-violet-600 dark:text-violet-400'}`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">{dest.name}</div>
                      <div className={`text-xs mt-0.5 ${isSelected ? 'text-violet-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {dest.distanceKm} km away
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`inline-flex items-center space-x-1 font-bold text-sm ${isSelected ? 'text-white' : 'text-violet-600 dark:text-violet-400'}`}>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{dest.timeMins} min</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Route Highlight Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
                <div>
                  <span className="text-xs uppercase font-bold text-violet-600 dark:text-violet-400 tracking-wider">
                    Selected Destination
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {selectedDestination.name}
                  </h3>
                </div>
                <div className="p-3 bg-violet-50 dark:bg-violet-950/60 rounded-xl border border-violet-200 dark:border-violet-800 text-center">
                  <div className="text-2xl font-extrabold text-violet-700 dark:text-violet-400">
                    {selectedDestination.timeMins} Mins
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                    Drive Time
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedDestination.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Distance from Exit 14</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 flex items-center space-x-1">
                    <Car className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    <span>{selectedDestination.distanceKm} Kilometers</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Highway Access</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-fuchsia-600 dark:text-fuchsia-400" />
                    <span>Signal-Free ORR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Origin: Thukkuguda Center (ORR Exit 14 Junction)</span>
              <span className="font-semibold text-violet-600 dark:text-violet-400">Optimal Commute Gateway</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
