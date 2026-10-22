import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Package } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/companyData';
import { ProductItem } from '../types';

interface ProductsSectionProps {
  onInquireProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onInquireProduct }) => {
  const [filter, setFilter] = useState<'All' | 'Oil Palm' | 'Agro-Processing' | 'Planned Line'>('All');

  const filteredProducts = PRODUCTS_LIST.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="products" className="py-20 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>04. Portfolio & Value-Added Goods</span>
              <span aria-hidden="true">·</span>
              <span>Commercial Lines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
              Products & Planned Product Lines
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              From fresh harvest bunches to processed culinary palm oil, cassava gari, and planned soap manufacturing, Somera Farms delivers quality Ghanaian agricultural products.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-lg self-start md:self-end">
            {(['All', 'Oil Palm', 'Agro-Processing', 'Planned Line'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat === 'All' ? 'All Products' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Container with Fallback */}
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-stone-200 items-center justify-center text-stone-400">
                  <Package className="w-10 h-10" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Status Indicator text (Unboxed metadata) */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide">
                  {product.status}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-stone-500 font-medium mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    {product.name}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications Checklist */}
                <div className="space-y-1.5 pt-3 border-t border-stone-100">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-stone-100">
                  <button
                    onClick={() => onInquireProduct(product.name)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                  >
                    <span>Inquire About {product.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
