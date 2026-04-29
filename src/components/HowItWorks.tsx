'use client';

import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('gasoline_vehicles'),
      desc: t('gasoline_vehicles_desc'),
    },
    {
      title: t('energy_vehicles'),
      desc: t('energy_vehicles_desc'),
    },
    {
      title: t('supply_chain'),
      desc: t('supply_chain_desc'),
    },
  ];

  return (
    <section className="relative py-32 bg-black">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url('/about-bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-[14px] text-[#e63946] uppercase tracking-[0.3em] mb-4 font-medium">
            {t('what_we_offer')}
          </h2>
          <h3 className="text-[40px] md:text-[56px] font-bold text-white leading-tight">
            专业 · 可靠 · 高效
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 border border-white/10 rounded-2xl hover:border-[#e63946]/50 transition-all duration-300 hover:bg-white/[0.02]"
            >
              {/* Step Number */}
              <div className="text-[64px] font-bold text-white/10 group-hover:text-[#e63946]/20 transition-colors duration-300 mb-6">
                0{index + 1}
              </div>
              
              {/* Title */}
              <h4 className="text-[22px] font-semibold text-white mb-4">
                {feature.title}
              </h4>
              
              {/* Description */}
              <p className="text-[15px] text-white/50 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-[20px] text-white/60 mb-10 max-w-2xl mx-auto">
            {t('why_portauto_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/case"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#e63946] text-white text-[14px] font-medium uppercase tracking-wider rounded hover:bg-[#c1121f] transition-all duration-300 hover:scale-[1.02]"
            >
              {t('explore_catalog')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white text-[14px] font-medium uppercase tracking-wider rounded border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {t('more')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
