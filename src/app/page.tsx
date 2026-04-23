'use client';

import Hero from '@/components/Hero';
import CarCard from '@/components/CarCard';
import { useLanguage } from '@/lib/useLanguage';
import { cars } from '@/lib/cars';
import { Shield, DollarSign, Truck, Headphones } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const { t } = useLanguage();
  
  // Get first 6 cars for display
  const popularCars = cars.slice(0, 6);

  const features = [
    {
      icon: Shield,
      title: t('quality_guarantee'),
      description: t('quality_guarantee_desc'),
    },
    {
      icon: DollarSign,
      title: t('best_prices'),
      description: t('best_prices_desc'),
    },
    {
      icon: Truck,
      title: t('fast_delivery'),
      description: t('fast_delivery_desc'),
    },
    {
      icon: Headphones,
      title: t('support_24_7'),
      description: t('support_24_7_desc'),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Popular Models Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('popular_models')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover our selection of premium vehicles from top manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} showCTA={true} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/catalog">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                {t('explore_catalog')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('why_choose_us')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-900 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to find your dream car?
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact us today and let our experts help you choose the perfect vehicle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalog">
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
