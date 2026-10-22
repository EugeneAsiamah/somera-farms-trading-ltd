import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OperationsSection } from './components/OperationsSection';
import { ProcessingPlant } from './components/ProcessingPlant';
import { ProductsSection } from './components/ProductsSection';
import { ValueChainSection } from './components/ValueChainSection';
import { OutgrowerCommunity } from './components/OutgrowerCommunity';
import { ManagementSection } from './components/ManagementSection';
import { WhySomera } from './components/WhySomera';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [inquirySubject, setInquirySubject] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProduct = (productName: string) => {
    setInquirySubject(productName);
    scrollToContact();
  };

  const handleJoinOutgrower = () => {
    setInquirySubject('Outgrower Farmer Partnership Programme');
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-800">
      {/* 3-Zone Navigation Header */}
      <Navbar onContactClick={scrollToContact} />

      <main className="flex-1">
        {/* Section 18: Website Homepage Content & Headline */}
        <Hero
          onLearnMoreClick={scrollToAbout}
          onProductsClick={scrollToProducts}
          onContactClick={scrollToContact}
        />

        {/* Sections 1, 2, 3, 4, 5, 23: About, History, Vision, Mission, Values */}
        <AboutSection />

        {/* Sections 6, 7, 8, 19: Agricultural Operations, 1,500 Acres Oil Palm, Teak, Nursery */}
        <OperationsSection onLearnMoreProducts={scrollToProducts} />

        {/* Sections 9, 11: 3 Tonnes/hr Processing Plant in Techimantia */}
        <ProcessingPlant />

        {/* Section 10: Products & Planned Product Lines (Palm Oil, FFB, Kernel, Gari, Soap) */}
        <ProductsSection onInquireProduct={handleInquireProduct} />

        {/* Section 13: Integrated Production Model Diagram */}
        <ValueChainSection />

        {/* Sections 12, 15: Outgrower Programme & Community Development */}
        <OutgrowerCommunity onJoinOutgrower={handleJoinOutgrower} />

        {/* Section 16: Management Team (with dedicated photo slot divs) */}
        <ManagementSection />

        {/* Sections 14, 17: Why Somera Farms & Future Expansion Pillars */}
        <WhySomera />

        {/* Section 21: Website Gallery */}
        <GallerySection />

        {/* Section 20: Official Contact Information & Inquiry Form */}
        <ContactSection
          prefilledSubject={inquirySubject}
          onClearPrefill={() => setInquirySubject('')}
        />
      </main>

      {/* Section 22: Footer with Compliance & Landmark Details */}
      <Footer />
    </div>
  );
}
