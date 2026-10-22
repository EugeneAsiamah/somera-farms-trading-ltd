import React from 'react';
import { Award, ShieldCheck, Leaf, Zap, Users, Smile, Compass, Target, Calendar } from 'lucide-react';
import { COMPANY_INFO, CORE_VALUES } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-emerald-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-800" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-emerald-800" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-emerald-800" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-800" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-emerald-800" />;
      default:
        return <Award className="w-5 h-5 text-emerald-800" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>01. Corporate Profile</span>
            <span aria-hidden="true">·</span>
            <span>Ghanaian Agribusiness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Building an Integrated Agro-Processing Value Chain in Ghana
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {COMPANY_INFO.aboutSummary}
          </p>
        </div>

        {/* Company History & Integrated Model Bento Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* History Card */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 font-display">
              Company History & Origin
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {COMPANY_INFO.history}
            </p>
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-1.5">
              <p>
                <strong className="text-stone-700">Founded:</strong> July 2005 by Mr. Daniel Aforo
              </p>
              <p>
                <strong className="text-stone-700">Incorporation:</strong> 2006 under the Companies Code, Act 179
              </p>
              <p>
                <strong className="text-stone-700">Operational Base:</strong> Techimantia, Ahafo Region (Opposite Arise and Shine Hotel)
              </p>
            </div>
          </div>

          {/* Integrated Vision Card */}
          <div className="lg:col-span-6 bg-emerald-950 text-white p-8 rounded-2xl border border-emerald-900 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-800/80 border border-emerald-700/60 flex items-center justify-center text-amber-300">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Integrated Agricultural Value Chain
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                {COMPANY_INFO.integratedVision}
              </p>
            </div>
            
            <div className="pt-6 border-t border-emerald-800/80 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-800">
                <span className="block text-amber-300 font-bold text-sm">Farm Base</span>
                <span className="text-emerald-200 text-[11px]">1,500 Acres</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-800">
                <span className="block text-amber-300 font-bold text-sm">Processing</span>
                <span className="text-emerald-200 text-[11px]">3 Tonnes/hr</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-900/60 border border-emerald-800">
                <span className="block text-amber-300 font-bold text-sm">Products</span>
                <span className="text-emerald-200 text-[11px]">High Value</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">Our Vision</h3>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed pt-1">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 font-display">Our Mission</h3>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed pt-1">
              "{COMPANY_INFO.mission}"
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-stone-900 font-display">
              Our Core Values
            </h3>
            <p className="text-stone-600 text-sm mt-1">
              The fundamental principles that guide every operation across our farms and processing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                  {getIcon(val.iconName)}
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">
                  {val.title}
                </h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Identity Values Ribbon */}
        <div className="p-6 rounded-xl bg-stone-100 border border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-stone-600">
          <span className="text-stone-800 font-bold uppercase tracking-wider text-[11px]">
            Company Identity:
          </span>
          {COMPANY_INFO.identityTags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="text-emerald-950 font-medium">{tag}</span>
              {idx < COMPANY_INFO.identityTags.length - 1 && (
                <span className="text-stone-400" aria-hidden="true">
                  •
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
