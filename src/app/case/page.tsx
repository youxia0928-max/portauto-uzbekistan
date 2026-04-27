'use client';

import { useLanguage } from '@/lib/useLanguage';
import type { TranslationKey } from '@/lib/translations';
import { FileCheck, Shield, Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Case images - 12 client case photos
const caseImages = [
  '/images/cases/01.webp',
  '/images/cases/02.webp',
  '/images/cases/03.webp',
  '/images/cases/04.webp',
  '/images/cases/05.webp',
  '/images/cases/06.webp',
  '/images/cases/07.webp',
  '/images/cases/08.webp',
  '/images/cases/09.webp',
  '/images/cases/10.webp',
  '/images/cases/11.webp',
  '/images/cases/12.webp',
];

const customsServices = [
  {
    icon: FileCheck,
    title: 'customs_documents',
    desc: 'customs_documents_desc',
  },
  {
    icon: Shield,
    title: 'customs_compliance',
    desc: 'customs_compliance_desc',
  },
  {
    icon: Truck,
    title: 'customs_delivery',
    desc: 'customs_delivery_desc',
  },
];

export default function CasePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('client_cases')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('case_subtitle')}
          </p>
        </div>
      </section>

      {/* Cases Grid - 12 Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {caseImages.map((img, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={img}
                  alt={`Case ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs Clearance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t('customs_clearance')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('customs_clearance_desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customsServices.map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t(service.title as TranslationKey)}
                </h3>
                <p className="text-slate-600">
                  {t(service.desc as TranslationKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Models Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {t('all_models_you_want')}
          </h2>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10">
              {t('contact_us')}
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-slate-600">{t('successful_cases')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-slate-600">{t('export_countries')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">3000+</div>
              <div className="text-slate-600">{t('exported_vehicles')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-slate-600">{t('customer_satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('start_export_project')}
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            {t('contact_for_quote')}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              {t('consult_now')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
