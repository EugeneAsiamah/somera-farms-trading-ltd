import React from 'react';
import { Users, Handshake, Sprout, HeartHandshake, Briefcase, CheckCircle2 } from 'lucide-react';

interface OutgrowerCommunityProps {
  onJoinOutgrower: () => void;
}

export const OutgrowerCommunity: React.FC<OutgrowerCommunityProps> = ({ onJoinOutgrower }) => {
  const roles = [
    'Farm Workers & Harvesters',
    'Processing Plant Workers',
    'Transport Drivers & Haulers',
    'Machine Operators & Mechanics',
    'Agricultural Professionals & Agronomists',
    'Facility Technicians',
    'Administrative Personnel',
    'Local Suppliers & Service Providers',
    'Outgrower Smallholder Farmers',
    'Value Chain Auxiliary Businesses'
  ];

  const outgrowerBenefits = [
    {
      title: 'Quality Planting Materials',
      desc: 'Distribution of high-yielding, verified oil palm nursery seedlings bred for fast maturity and high fruit weight.'
    },
    {
      title: 'Reliable Market Off-Take',
      desc: 'Guaranteed purchasing contracts for Fresh Fruit Bunches (FFB) direct to the Techimantia mill, protecting farmers from predatory price slumps.'
    },
    {
      title: 'Technical Agronomic Training',
      desc: 'Best-in-class guidance on plantation spacing, organic nutrient balancing, pruning, and harvesting techniques.'
    },
    {
      title: 'Rural Economic Development',
      desc: 'Injecting sustained liquidity into farming families and rural Ahafo communities to elevate living standards.'
    }
  ];

  return (
    <section className="py-20 bg-stone-50/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Outgrower Programme Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                <span>06. Partnerships & Inclusion</span>
                <span aria-hidden="true">·</span>
                <span>Farmer Programme</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
                Outgrower Programme: Growing Together with Local Farmers
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                The company plans to work with local farmers through a structured outgrower programme. The programme is intended to provide quality planting materials, increase oil palm production, create a reliable raw material supply, provide market opportunities for participating farmers, strengthen the supply chain, and support rural economic development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outgrowerBenefits.map((b) => (
                <div key={b.title} className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1">
                  <h3 className="text-xs font-bold text-stone-900 font-display">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-stone-600 leading-normal">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onJoinOutgrower}
                className="px-5 py-3 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-850 rounded-lg shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <Handshake className="w-4 h-4 text-amber-300" />
                <span>Inquire About Outgrower Partnership</span>
              </button>
            </div>
          </div>

          {/* Right Column: Community & Employment Focus */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-display">
                  Community & Local Employment
                </h3>
                <p className="text-xs text-stone-500">
                  Somera Farms & Trading Ltd Operations
                </p>
              </div>
            </div>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Somera Farms & Trading Ltd is committed to contributing to local economic development through agriculture and agro-processing. Its operations create direct and indirect livelihood opportunities across the agricultural value chain.
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Livelihood & Career Opportunities Created:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {roles.map((role) => (
                  <div key={role} className="flex items-center gap-2 p-2 rounded-lg bg-stone-50 border border-stone-150">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="text-[11px] font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 font-medium">
              Based in Techimantia, Ahafo Region, Somera Farms acts as an economic anchor creating generational prosperity for local youth and farming families.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
