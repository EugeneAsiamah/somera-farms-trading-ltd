import React from 'react';
import { Trees, Sprout, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import fruitBunchesImg from '../assets/images/oil_palm_fruit_bunches_1790541506024.jpg';
import nurseryImg from '../assets/images/seedling_nursery_1790541516899.jpg';

interface OperationsProps {
  onLearnMoreProducts: () => void;
}

export const OperationsSection: React.FC<OperationsProps> = ({ onLearnMoreProducts }) => {
  return (
    <section id="operations" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>02. Operations & Cultivation</span>
            <span aria-hidden="true">·</span>
            <span>Ahafo Region</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Agricultural Base & Sustainable Oil Palm Cultivation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Somera Farms & Trading Ltd operates extensive plantations across multiple strategic locations in Ghana, with a committed focus on oil palm production, sustainable seedling nurseries, and ecological forestry.
          </p>
        </div>

        {/* Feature Split 1: 1,500 Acres Oil Palm + 50 Acres Teak */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
                Core Agricultural Holdings
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-display">
                1,500 Acres of Oil Palm & 50 Acres of Teak
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The company’s agricultural base includes approximately 1,500 acres of oil palm plantation and 50 acres of teak plantation, supported by multiple subsidiary farms spanning three locations in the Ahafo Region of Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base font-display">
                  <Sprout className="w-5 h-5 text-emerald-700" />
                  <span>Oil Palm Base</span>
                </div>
                <p className="text-2xl font-extrabold text-stone-900 font-display mt-2">
                  1,500 <span className="text-sm font-semibold text-stone-500">Acres</span>
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  High-yielding variety plantations feeding fresh fruit bunches directly into commercial milling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-base font-display">
                  <Trees className="w-5 h-5 text-amber-700" />
                  <span>Teak Reserve</span>
                </div>
                <p className="text-2xl font-extrabold text-stone-900 font-display mt-2">
                  50 <span className="text-sm font-semibold text-stone-500">Acres</span>
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Long-term sustainable hardwood timber plantation aiding micro-climate regulation and biodiversity.
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Subsidiary farm clusters distributed across three distinct regional microclimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Continuous harvesting cycles ensuring reliable feedstock for agro-processing</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 group">
              <img
                src={fruitBunchesImg}
                alt="Harvested Fresh Fruit Bunches (FFB) at Somera Farms"
                className="w-full h-[360px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-amber-300 uppercase">Fresh Fruit Bunches (FFB)</p>
                <p className="text-sm font-medium">Continuous harvesting protocol ensures fresh milling within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Split 2: Oil Palm Seedling Nursery Programme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-stone-200">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100 group">
              <img
                src={nurseryImg}
                alt="Somera Farms Oil Palm Nursery in Techimantia"
                className="w-full h-[360px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-amber-300 uppercase">Seedling Nursery Facility</p>
                <p className="text-sm font-medium">100,000 certified vigorous seedlings nurtured annually.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-800">
                Plantation Expansion Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-display">
                100,000 Seedlings Annual Nursery Programme
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The company is developing a dedicated oil palm nursery programme to support plantation expansion and provide quality seedlings. The planned nursery programme targets approximately <strong>100,000 oil palm seedlings annually</strong>.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                The programme is designed to supply Somera Farms' internal plantation expansion while powering future engagement with outgrower farmers across the Techimantia district.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-950">Certified Elite High-Yield Germplasm</h4>
                  <p className="text-xs text-emerald-900/80 mt-0.5">Selected for early maturity, disease tolerance, and high mesocarp oil yield.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/60 border border-amber-100">
                <div className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-amber-950">Empowering Outgrower Smallholders</h4>
                  <p className="text-xs text-amber-900/80 mt-0.5">Supplying local community farmers with subsidized, premium seedlings backed by technical agronomic guidance.</p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onLearnMoreProducts}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 hover:text-emerald-700 cursor-pointer group"
              >
                <span>Explore Our Products & Yields</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};