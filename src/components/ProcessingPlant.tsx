import React, { useState } from 'react';
import { Factory, Cog, Gauge, Check, Sparkles, TrendingUp, Layers } from 'lucide-react';
import processingPlantImg from '../assets/images/processing_plant_1790541525606.jpg';

export const ProcessingPlant: React.FC = () => {
  const [activeShifts, setActiveShifts] = useState<1 | 2 | 3>(3);

  // Calculations based on 3 tonnes/hr
  const hoursPerShift = 8;
  const totalHours = activeShifts * hoursPerShift;
  const dailyThroughputTonnes = activeShifts * 24; // 3 tonnes/hr * 8 = 24 / shift
  const monthlyThroughputTonnes = dailyThroughputTonnes * 26; // 26 working days
  const estimatedCPOOutputTonnes = Math.round(dailyThroughputTonnes * 0.20 * 10) / 10; // ~20% extraction rate
  const estimatedKernelTonnes = Math.round(dailyThroughputTonnes * 0.05 * 10) / 10; // ~5% kernel recovery

  return (
    <section id="processing" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>03. Agro-Processing Plant</span>
            <span aria-hidden="true">·</span>
            <span>Techimantia Facility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
            Commercial Oil Palm Processing Plant
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            Somera Farms & Trading Ltd is developing a modern oil palm processing plant at its operations in Techimantia, engineered to convert fresh fruit bunches into high-grade palm oil products while eliminating reliance on raw crop distress sales.
          </p>
        </div>

        {/* Plant Overview & Real-Time Capacity Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Plant Specs and Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-700 bg-stone-800">
              <img
                src={processingPlantImg}
                alt="Agro-Processing Plant in Techimantia Ghana"
                className="w-full h-[280px] object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                  Milling Operations
                </span>
                <p className="text-base font-bold text-white font-display">
                  Sterilization, Digestion, Pressing & Clarification Lines
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
              <p>
                The processing plant features a baseline design capacity of approximately <strong className="text-white">3 tonnes of Fresh Fruit Bunches (FFB) per hour</strong>.
              </p>
              
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>Single 8-Hour Shift:</strong> 24 tonnes of FFB processed daily</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>Three Shifts (Continuous 24h):</strong> Up to 72 tonnes of FFB processed daily</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span><strong>Integrated Byproduct Recovery:</strong> Efficient extraction of palm kernel and biomass fuel</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Value Addition Strategy</span>
              </h4>
              <p className="text-xs text-stone-300">
                One of Somera Farms & Trading Ltd's core objectives is to move decisively from simply producing agricultural raw materials to processing and adding value to those raw materials into finished and semi-finished products.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Plant Capacity Dashboard */}
          <div className="lg:col-span-6 bg-stone-850 p-6 sm:p-8 rounded-2xl border border-stone-700/80 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-700">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Milling Capacity & Shift Modeling
                </h3>
                <p className="text-xs text-stone-400">
                  Select operating schedule to project daily throughput
                </p>
              </div>

              {/* Shift Toggle Selector */}
              <div className="inline-flex rounded-lg bg-stone-900 p-1 border border-stone-700">
                {([1, 2, 3] as const).map((shift) => (
                  <button
                    key={shift}
                    onClick={() => setActiveShifts(shift)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activeShifts === shift
                        ? 'bg-amber-400 text-stone-950 shadow-sm font-bold'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {shift} {shift === 1 ? 'Shift' : 'Shifts'} ({shift * 8}h)
                  </button>
                ))}
              </div>
            </div>

            {/* Throughput Metrics Dashboard */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                  Operating Time
                </span>
                <div className="text-2xl font-bold text-white font-display tabular-nums mt-1">
                  {totalHours} <span className="text-xs text-stone-400 font-normal">Hours/day</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  Continuous processing capability
                </span>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                  Daily FFB Throughput
                </span>
                <div className="text-2xl font-bold text-amber-400 font-display tabular-nums mt-1">
                  {dailyThroughputTonnes} <span className="text-xs text-stone-400 font-normal">Tonnes / day</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  ~{monthlyThroughputTonnes} tonnes / month
                </span>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                  Est. Crude Palm Oil (CPO)
                </span>
                <div className="text-2xl font-bold text-amber-300 font-display tabular-nums mt-1">
                  ~{estimatedCPOOutputTonnes} <span className="text-xs text-stone-400 font-normal">Tonnes / day</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  ~20% average crude oil extraction rate
                </span>
              </div>

              <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium">
                  Palm Kernel Recovered
                </span>
                <div className="text-2xl font-bold text-emerald-400 font-display tabular-nums mt-1">
                  ~{estimatedKernelTonnes} <span className="text-xs text-stone-400 font-normal">Tonnes / day</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  ~5% kernel nut recovery rate
                </span>
              </div>
            </div>

            {/* Industrial Plant Note */}
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-xs text-emerald-200/90 flex items-start gap-3">
              <Layers className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <p>
                <strong>Strategic Impact:</strong> By processing on-site in Techimantia, Somera Farms captures processing margins, protects farmers from post-harvest crop spoilage, and creates stable industrial technical jobs within the Ahafo Region.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};