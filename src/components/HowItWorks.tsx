'use client';

import { useLanguage } from '@/lib/useLanguage';
import { FileText, Truck, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: FileText,
      number: '01',
      title: t('step1_title'),
      description: t('step1_desc'),
    },
    {
      icon: Truck,
      number: '02',
      title: t('step2_title'),
      description: t('step2_desc'),
    },
    {
      icon: CheckCircle,
      number: '03',
      title: t('step3_title'),
      description: t('step3_desc'),
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('how_it_works')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('b2b_service_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-blue-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
