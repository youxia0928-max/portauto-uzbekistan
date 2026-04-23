'use client';

import { useLanguage } from '@/lib/useLanguage';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20">
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
              PortAuto is a professional automotive export company based in China, providing a full range of vehicle sourcing solutions for global clients. We specialize in exporting both traditional Gasoline Vehicles and the latest New Energy Vehicles to markets including Central Asia, the Middle East, Russia, and Africa, etc.
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">
              What We Offer:
            </h3>
            
            <div className="space-y-6">
              {/* Gasoline Vehicles */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Gasoline Vehicles:
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  We supply China-manufactured joint venture models and top-tier Chinese domestic fuel cars. These vehicles offer the same global quality at a much more competitive price.
                </p>
              </div>

              {/* Energy Vehicles */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Energy Vehicles:
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  We are also a key exporter of EVs from Geely, BYD, Zeekr, Li Auto, and GAC, etc.
                </p>
              </div>

              {/* Supply Chain */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Supply Chain:
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Direct cooperation with factories ensures we have stable stock of both petrol and electric cars.
                </p>
              </div>
            </div>
          </div>

          {/* Why PortAuto Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
              Why PortAuto?
            </h3>
            <p className="text-lg text-white leading-relaxed mb-8 drop-shadow">
              Whether you are looking for a fuel-efficient Toyota for a taxi fleet or a luxury Geely SUV for resale, PortAuto is your one-stop gateway to the Chinese auto market.
            </p>
            <Link href="/case">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                View Our Cases
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
