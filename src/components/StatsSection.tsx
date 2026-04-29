'use client';

import { useLanguage } from '@/lib/useLanguage';

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { value: '200+', label: t('stats_warehouse') },
    { value: '15000+', label: t('stats_car_source') },
    { value: '20+', label: t('stats_sale_country') },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
