import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO, KEY_METRICS } from '../data/companyData';
import heroPalmImg from '../assets/images/hero_palm_plantation_1790541494634.jpg';

interface HeroProps {
  onLearnMoreClick: () => void;
  onProductsClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onLearnMoreClick,
  onProductsClick,
  onContactClick,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-stone-200">
      {/* Background architectural wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA] via-[#FAF9F5] to-[#FAF9F5] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-header Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-6">
          <MapPin className="w-3.5 h-3.5 text-emerald-700" />
          <span>Techimantia, Ahafo Region · Established July 2005 · Ghana</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Document CTA Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12] text-balance font-display">
              {COMPANY_INFO.headline}
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl font-normal">
              {COMPANY_INFO.aboutSummary}
            </p>

            {/* Document Suggested Buttons: Learn More | Our Products | Contact Us */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onLearnMoreClick}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-850 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Learn More</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={onProductsClick}
                className="px-6 py-3.5 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Our Products</span>
                <ArrowRight className="w-4 h-4 text-stone-600" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 text-sm font-semibold text-emerald-950 bg-amber-400/90 hover:bg-amber-400 border border-amber-500/30 rounded-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust and Compliance Markers */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Incorporated 2006 (Companies Code Act 179)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>1,500 Acres Oil Palm Core Operations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>3 Tonnes/Hr Commercial Processing Plant</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Glass Scrim */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300/80 bg-stone-900 group">
              <img
                src={heroPalmImg}
                alt="Somera Farms Oil Palm Plantation in Techimantia Ghana"
                className="w-full h-[420px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />

              {/* Styled Fallback if image unavailable */}
              <div className="hidden w-full h-[420px] bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-900 flex-col justify-end p-8 text-white">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-amber-300 mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display">Somera Farms Plantation</h3>
                <p className="text-stone-300 text-sm mt-1">Techimantia, Ahafo Region, Ghana</p>
              </div>

              {/* Gradient Scrim Overlay for Typographic Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Inset Badge over media */}
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  Agribusiness & Agro-Processing
                </p>
                <p className="text-base font-bold font-display leading-tight">
                  Integrated Agricultural Value Chain: Farm to Finished Goods
                </p>
                <p className="text-xs text-stone-300 mt-1">
                  1,500 Acres Oil Palm · Seedling Nursery · 3 TPH Processing Plant
                </p>
              </div>
            </div>

            {/* Floating Credential Micro-card */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-stone-200 rounded-xl p-3.5 shadow-lg hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-900">Act 179 Registered</p>
                <p className="text-[11px] text-stone-500">Founded by Mr. Daniel Aforo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Key Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 pt-10 border-t border-stone-200">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs hover:border-emerald-700/30 transition-colors"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-stone-900 font-display tabular-nums">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-emerald-800">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs font-semibold text-stone-700 mt-1 line-clamp-1">
                {metric.label}
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-2">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};