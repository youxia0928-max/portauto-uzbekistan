'use client';

import { useLanguage } from '@/lib/useLanguage';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/about-bg.jpg')` }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              {t('about')}
            </h2>
          </div>

          {/* Main Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-white leading-relaxed drop-shadow">
              {t('about_intro')}
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">
              {t('what_we_offer')}
            </h3>
            
            <div className="space-y-6">
              {/* Gasoline Vehicles */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  {t('gasoline_vehicles')}
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {t('gasoline_vehicles_desc')}
                </p>
              </div>

              {/* Energy Vehicles */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  {t('energy_vehicles')}
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {t('energy_vehicles_desc')}
                </p>
              </div>

              {/* Supply Chain */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  {t('supply_chain')}
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {t('supply_chain_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Why PortAuto Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
              {t('why_portauto')}
            </h3>
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow">
              {t('why_portauto_desc')}
            </p>
            <Link href="/about">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                {t('more')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
