'use client';

import { useLanguage } from '@/lib/useLanguage';

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    { 
      value: '200+', 
      label: t('stats_warehouse'),
      desc: '覆盖乌兹别克斯坦主要城市'
    },
    { 
      value: '15000+', 
      label: t('stats_car_source'),
      desc: '实时更新的车源库存'
    },
    { 
      value: '20+', 
      label: t('stats_sale_country'),
      desc: '覆盖全球主要市场'
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[14px] text-[#e63946] uppercase tracking-[0.3em] mb-4 font-medium">
            {t('why_portauto')}
          </h2>
          <h3 className="text-[40px] md:text-[56px] font-bold text-white leading-tight">
            值得信赖的合作伙伴
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black p-12 md:p-16 text-center group hover:bg-[#0a0a0a] transition-colors duration-300"
            >
              <div className="text-[64px] md:text-[80px] font-bold text-white mb-4 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[16px] text-white/90 font-medium uppercase tracking-wider mb-3">
                {stat.label}
              </div>
              <div className="text-[14px] text-white/40">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
