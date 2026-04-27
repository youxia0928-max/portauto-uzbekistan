'use client';

import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import NewsSection from '@/components/NewsSection';
import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// 12个案例图片 - 使用案例页面本地图片
const caseImages = [
  '/case-images/1.webp',
  '/case-images/2.webp',
  '/case-images/3.webp',
  '/case-images/4.webp',
  '/case-images/5.webp',
  '/case-images/6.webp',
  '/case-images/7.webp',
  '/case-images/8.webp',
  '/case-images/9.webp',
  '/case-images/10.webp',
  '/case-images/11.webp',
  '/case-images/12.webp',
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section - Key Data Display */}
      <StatsSection />

      {/* Cases Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('case')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              专业的汽车出口服务，覆盖全球20+国家和地区
            </p>
          </div>

          {/* 12 Images Grid - 3x4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {caseImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Case ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* More Button */}
          <div className="text-center">
            <Link href="/case">
              <Button 
                size="lg" 
                className="bg-blue-900 hover:bg-blue-800"
              >
                更多案例
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - 3 Steps Process */}
      <HowItWorks />

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('b2b_service')}
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            {t('b2b_service_desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/case">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                {t('explore_catalog')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
              >
                {t('contact')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
