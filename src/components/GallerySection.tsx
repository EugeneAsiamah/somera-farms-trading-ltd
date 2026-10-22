import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Plantation', 'Nursery', 'Processing', 'Products'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>09. Visual Archive</span>
              <span aria-hidden="true">·</span>
              <span>Operations & Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
              Website Gallery
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Photographs showcasing our 1,500 acres oil palm plantations, seedling nursery operations, processing plant machinery, fresh fruit bunches, and local team activities in Techimantia, Ghana.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-900 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-2xs hover:shadow-md transition-all cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2 rounded-lg bg-stone-900/80 backdrop-blur-xs text-white flex items-center justify-center">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-base font-bold font-display leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="bg-stone-900 text-white rounded-2xl overflow-hidden max-w-4xl w-full border border-stone-700 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 hover:bg-stone-950 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-stone-900 border-t border-stone-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase">
                  <span>{activeModalItem.category}</span>
                  <span>·</span>
                  <span>Somera Farms Operations</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {activeModalItem.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
