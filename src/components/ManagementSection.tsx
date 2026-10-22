import React from 'react';
import { User } from 'lucide-react';
import { MANAGEMENT_TEAM } from '../data/companyData';
import { MANAGEMENT_PHOTOS } from '../data/managementPhotos';

export const ManagementSection: React.FC = () => {
  return (
    <section id="management" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>07. Corporate Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Executive Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
            Management Team
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Experienced agricultural leaders, company directors, and operational specialists directing Somera Farms & Trading Ltd towards industrial agro-processing excellence.
          </p>
        </div>

        {/* 5 Management Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MANAGEMENT_TEAM.map((member) => {
            const currentImg = MANAGEMENT_PHOTOS[member.id];

            return (
              <div
                key={member.id}
                className="bg-stone-50/70 rounded-2xl border border-stone-200 p-6 flex flex-col justify-between space-y-5 hover:border-emerald-700/30 transition-all shadow-2xs group"
              >
                {/* Dedicated Management Image Div */}
                <div
                  id={member.imageDivId}
                  className={`relative w-full aspect-[4/5] rounded-xl overflow-hidden transition-all ${
                    currentImg
                      ? 'bg-stone-900 border border-stone-300'
                      : 'bg-gradient-to-b from-stone-200/80 to-stone-300/80 border border-stone-300 flex flex-col items-center justify-center p-6 text-center'
                  }`}
                >
                  {currentImg ? (
                    <>
                      <img
                        src={currentImg}
                        alt={`Portrait of ${member.name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                    </>
                  ) : (
                    /* Elegant placeholder slot when no imported asset image is linked yet */
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-white/90 border border-stone-300 flex items-center justify-center text-stone-500 shadow-2xs">
                        <User className="w-8 h-8 text-stone-400" />
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-stone-800">
                          {member.name}
                        </p>
                        <p className="text-[11px] text-stone-500">
                          Somera Farms & Trading Ltd
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Member Text Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-semibold text-emerald-850 uppercase tracking-wider text-[11px]">
                      {member.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-900">
                    {member.role}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};