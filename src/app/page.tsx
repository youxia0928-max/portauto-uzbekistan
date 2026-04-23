'use client';

import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import NewsSection from '@/components/NewsSection';
import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// 9个案例图片
const caseImages = [
  {
    id: 1,
    title: '新能源汽车出口',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: '港口物流调度',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: '跨境运输服务',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: '仓储管理',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: '出口报关服务',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: '车队运输',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: '智能物流系统',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: '全球配送网络',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: '专业售后服务',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
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

          {/* 9 Images Grid - 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {caseImages.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg aspect-[3/2] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                </div>
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
