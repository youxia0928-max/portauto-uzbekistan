'use client';

import { useLanguage } from '@/lib/useLanguage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        {/* Fallback to image if video doesn't load */}
        <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero_title')}
          </h1>
          
          {/* Rating Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-medium">{t('sales_quality')}</span>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-4 font-medium">
            {t('hero_subtitle')}
          </p>
          
          {/* Tagline */}
          <p className="text-white/70 mb-8 text-sm md:text-base">
            {t('choose_partner')}
          </p>
          
          {/* CTA Button */}
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-10"
            >
              {t('contact_us')}
            </Button>
          </Link>
        </div>

        {/* Three Steps Process - Right Side */}
        <div className="hidden lg:flex flex-col gap-4 ml-auto mr-12">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white/40">1</span>
            <span className="text-lg font-semibold text-white border-t border-white/30 pt-2">
              {t('step1_process')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white/40">2</span>
            <span className="text-lg font-semibold text-white border-t border-white/30 pt-2">
              {t('step2_process')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white/40">3</span>
            <span className="text-lg font-semibold text-white border-t border-white/30 pt-2">
              {t('step3_process')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
