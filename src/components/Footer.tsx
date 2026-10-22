import React from 'react';
import { Sprout, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-300">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-display">
                {COMPANY_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              A leading Ghanaian agricultural and agro-processing company cultivating over 1,500 acres of oil palm, running a 100,000-seedling nursery programme, and developing a commercial 3 tonnes/hour milling plant in Techimantia, Ahafo Region.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] text-emerald-400">
              <span>Agriculture</span>
              <span>·</span>
              <span>Processing</span>
              <span>·</span>
              <span>Innovation</span>
              <span>·</span>
              <span>Sustainability</span>
              <span>·</span>
              <span>Value Addition</span>
              <span>·</span>
              <span>Growth</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Somera Farms
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-amber-300 transition-colors">
                  1,500 Acres & Nursery Programme
                </a>
              </li>
              <li>
                <a href="#processing" className="hover:text-amber-300 transition-colors">
                  Techimantia Processing Plant
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors">
                  Palm Oil, FFB & Gari Products
                </a>
              </li>
              <li>
                <a href="#value-chain" className="hover:text-amber-300 transition-colors">
                  Integrated Value Chain Model
                </a>
              </li>
              <li>
                <a href="#management" className="hover:text-amber-300 transition-colors">
                  Executive Management Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Photo Gallery & Operations
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Official Contacts Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters & Legal
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Techimantia, Ahafo Region, Ghana (Opposite Arise and Shine Hotel)</span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.businessEmail}`} className="hover:underline text-stone-300 font-mono">
                  {COMPANY_INFO.businessEmail}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.administrativeEmail}`} className="hover:underline text-stone-300 font-mono">
                  {COMPANY_INFO.administrativeEmail}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Incorporated 2006 under the Companies Code, Act 179</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-850 text-stone-300 hover:text-white rounded-lg text-xs font-medium border border-stone-800 transition-colors cursor-pointer"
              >
                <span>Return to Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Techimantia, Ghana.
          </p>
          <p className="text-[11px] text-stone-400 text-center sm:text-right">
            Growing Agriculture · Creating Value · Building a Sustainable Future
          </p>
        </div>

      </div>
    </footer>
  );
};
