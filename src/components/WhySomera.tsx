import React from 'react';
import { Check, TrendingUp, ShieldCheck, Factory, Sprout, Handshake, Sparkles, Globe } from 'lucide-react';
import { WHY_SOMERA, FUTURE_EXPANSION_PILLARS } from '../data/companyData';

export const WhySomera: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sprout className="w-5 h-5 text-emerald-800" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-emerald-800" />;
      case 2:
        return <Factory className="w-5 h-5 text-emerald-800" />;
      case 3:
        return <Globe className="w-5 h-5 text-emerald-800" />;
      case 4:
        return <Handshake className="w-5 h-5 text-emerald-800" />;
      case 5:
        return <Sparkles className="w-5 h-5 text-emerald-800" />;
      default:
        return <Check className="w-5 h-5 text-emerald-800" />;
    }
  };

  return (
    <section className="py-20 bg-stone-50/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Why Somera Section */}
        <div className="space-y-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>08. Strategic Advantage</span>
              <span aria-hidden="true">·</span>
              <span>Why Partner With Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
              Why Somera Farms & Trading Ltd
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Combining 20 years of Ghanaian agricultural dedication with modern agro-processing technology and mutually beneficial farmer cooperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_SOMERA.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-xs transition-shadow space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-1">
                  {getPillarIcon(idx)}
                </div>
                <h3 className="text-base font-bold text-stone-900 font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Expansion Roadmap */}
        <div className="p-8 sm:p-10 rounded-3xl bg-emerald-950 text-white border border-emerald-900 shadow-lg space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <TrendingUp className="w-4 h-4" />
              <span>Future Expansion Priorities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Strategic Growth & Industrial Horizon
            </h3>
            <p className="text-emerald-200/90 text-sm leading-relaxed">
              Somera Farms & Trading Ltd is positioned for exponential expansion across primary agriculture, advanced processing infrastructure, and export channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FUTURE_EXPANSION_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-800/80 flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-md bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-xs text-stone-100 font-medium leading-relaxed">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
