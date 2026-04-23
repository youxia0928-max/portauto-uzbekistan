'use client';

import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import NewsSection from '@/components/NewsSection';
import CarCard from '@/components/CarCard';
import { useLanguage } from '@/lib/useLanguage';
import { cars } from '@/lib/cars';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const { t } = useLanguage();
  
  // Get first 6 cars for display
  const popularCars = cars.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section - Key Data Display */}
      <StatsSection />

      {/* Popular Models Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('popular_models')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('b2b_service_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} showCTA={true} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/case">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                {t('explore_catalog')}
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
