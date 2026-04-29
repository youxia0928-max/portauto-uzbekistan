'use client';

import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import NewsSection from '@/components/NewsSection';
import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// 6个案例图片 - 使用案例页面本地图片
const caseImages = [
  '/case-images/1.webp',
  '/case-images/2.webp',
  '/case-images/3.webp',
  '/case-images/4.webp',
  '/case-images/5.webp',
  '/case-images/6.webp',
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <Hero />

      {/* Cases Gallery Section - Tesla Style */}
      <section className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[14px] text-[#e63946] uppercase tracking-[0.3em] mb-4 font-medium">
              {t('case')}
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-bold text-white leading-tight">
              成功案例
            </h3>
          </div>

          {/* Images Grid - Tesla Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {caseImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Case ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* View More Button - Tesla Style */}
          <div className="text-center">
            <Link 
              href="/case"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/5 backdrop-blur-sm text-white text-[14px] font-medium uppercase tracking-wider rounded border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              {t('more')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section - Tesla Style */}
      <section className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e63946]/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-6 leading-tight">
            {t('b2b_service')}
          </h2>
          <p className="text-[18px] text-white/50 mb-12 max-w-2xl mx-auto">
            {t('b2b_service_desc')}
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
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/5 backdrop-blur-sm text-white text-[14px] font-medium uppercase tracking-wider rounded border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />
    </div>
  );
}
