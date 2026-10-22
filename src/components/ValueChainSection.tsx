import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, Sprout, Truck, Factory, Sparkles, ShoppingBag, Globe } from 'lucide-react';
import { VALUE_CHAIN_STEPS } from '../data/companyData';

export const ValueChainSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'oilPalm' | 'general'>('oilPalm');

  const currentStep = VALUE_CHAIN_STEPS.find((s) => s.stepNumber === selectedStep) || VALUE_CHAIN_STEPS[0];

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1:
        return <Sprout className="w-5 h-5" />;
      case 2:
        return <CheckCircle2 className="w-5 h-5" />;
      case 3:
        return <Truck className="w-5 h-5" />;
      case 4:
        return <Factory className="w-5 h-5" />;
      case 5:
        return <Sparkles className="w-5 h-5" />;
      case 6:
        return <ShoppingBag className="w-5 h-5" />;
      case 7:
        return <Globe className="w-5 h-5" />;
      default:
        return <Sprout className="w-5 h-5" />;
    }
  };

  return (
    <section id="value-chain" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>05. Production Model</span>
              <span aria-hidden="true">·</span>
              <span>Farm to Finished Product</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display tracking-tight text-balance">
              Integrated Agricultural Value Chain
            </h2>
            <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
              Connecting primary cultivation directly with mechanized processing, byproduct valorization, and national market access.
            </p>
          </div>

          {/* Toggle between Oil Palm Chain and General Model */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200 shrink-0 self-start md:self-end">
            <button
              onClick={() => setViewMode('oilPalm')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'oilPalm'
                  ? 'bg-emerald-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Oil Palm Lifecycle
            </button>
            <button
              onClick={() => setViewMode('general')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'general'
                  ? 'bg-emerald-900 text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              General Agricultural Chain
            </button>
          </div>
        </div>

        {/* Step Flow Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {VALUE_CHAIN_STEPS.map((step) => {
            const isSelected = selectedStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-950 shadow-md ring-2 ring-emerald-700/20'
                    : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[11px] font-bold ${
                      isSelected ? 'text-amber-300' : 'text-emerald-800'
                    }`}
                  >
                    Step 0{step.stepNumber}
                  </span>
                  <div className={isSelected ? 'text-amber-300' : 'text-stone-400'}>
                    {getStepIcon(step.stepNumber)}
                  </div>
                </div>
                <div className="font-bold text-xs font-display tracking-tight leading-tight">
                  {step.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Details Highlight Card */}
        <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold">
              <span>Step {currentStep.stepNumber} of 7</span>
              <span>·</span>
              <span>{currentStep.name} Stage</span>
            </div>

            <h3 className="text-2xl font-bold text-stone-900 font-display">
              {viewMode === 'oilPalm' ? currentStep.oilPalmDetail : currentStep.generalDetail}
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-stone-600">
              <p>
                <strong className="text-stone-800">Operational Focus:</strong> {currentStep.focus}
              </p>
              <p>
                <strong className="text-stone-800">Oil Palm Context:</strong> {currentStep.oilPalmDetail}
              </p>
              <p>
                <strong className="text-stone-800">Broader Agricultural Impact:</strong> {currentStep.generalDetail}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-stone-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Value Chain Progression
            </h4>
            <div className="flex items-center gap-2 text-xs font-medium text-stone-700">
              <span className="w-6 h-6 rounded-full bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-[11px]">
                {currentStep.stepNumber}
              </span>
              <span className="font-semibold text-stone-900">{currentStep.name}</span>
              {currentStep.stepNumber < 7 && (
                <>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                  <span className="text-stone-500">
                    {VALUE_CHAIN_STEPS[currentStep.stepNumber]?.name}
                  </span>
                </>
              )}
            </div>
            <button
              onClick={() => setSelectedStep((prev) => (prev % 7) + 1)}
              className="w-full py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Next Stage in Model</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
