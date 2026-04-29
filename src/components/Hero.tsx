'use client';

import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <img
            src="/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Tesla-style gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content - Tesla Style Left Aligned */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-32">
          {/* Main Headline - Tesla Style */}
          <div className="max-w-3xl">
            <h1 className="text-[56px] md:text-[72px] lg:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-8 animate-fade-in-up">
              {t('hero_title')}
            </h1>
            
            {/* Tagline */}
            <p className="text-[18px] md:text-[20px] text-white/60 mb-10 font-light leading-relaxed max-w-xl">
              {t('hero_subtitle')}
            </p>

            {/* CTA Buttons - Tesla Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#e63946] text-white text-[14px] font-medium uppercase tracking-wider rounded hover:bg-[#c1121f] transition-all duration-300 hover:scale-[1.02]"
              >
                {t('contact_us')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/case"
                className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white text-[14px] font-medium uppercase tracking-wider rounded border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                {t('case')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Tesla Style */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-[11px] text-white/40 uppercase tracking-widest mb-4">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Stats Bar - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/60 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-white mb-1">200+</div>
              <div className="text-[12px] text-white/40 uppercase tracking-wider">{t('warehouse')}</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-[32px] md:text-[40px] font-bold text-white mb-1">15000+</div>
              <div className="text-[12px] text-white/40 uppercase tracking-wider">{t('car_source')}</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] md:text-[40px] font-bold text-white mb-1">20+</div>
              <div className="text-[12px] text-white/40 uppercase tracking-wider">{t('sale_country')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
