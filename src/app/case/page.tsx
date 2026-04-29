'use client';

import { useLanguage } from '@/lib/useLanguage';
import type { TranslationKey } from '@/lib/translations';
import { MapPin, ArrowRight, FileCheck, Truck, Shield } from 'lucide-react';
import Link from 'next/link';

// Case images - 12 client case images (local WebP files)
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

// Case data
const exportCases = [
  {
    id: 1,
    titleKey: 'case_1_title' as TranslationKey,
    country: '乌兹别克斯坦',
    cityKey: 'city_tashkent' as TranslationKey,
    date: '2023-02-15',
    carModel: 'BYD Seal 2024',
    quantity: 50,
    categoryKey: 'new_energy' as TranslationKey,
    descriptionKey: 'case_1_desc' as TranslationKey,
  },
  {
    id: 2,
    titleKey: 'case_2_title' as TranslationKey,
    country: '哈萨克斯坦',
    cityKey: 'city_almaty' as TranslationKey,
    date: '2024-02-20',
    carModel: 'AITO M9 2024',
    quantity: 30,
    categoryKey: 'new_energy' as TranslationKey,
    descriptionKey: 'case_2_desc' as TranslationKey,
  },
  {
    id: 3,
    titleKey: 'case_3_title' as TranslationKey,
    country: '俄罗斯',
    cityKey: 'city_moscow' as TranslationKey,
    date: '2022-02-10',
    carModel: 'Hongqi E-HS9 2024',
    quantity: 25,
    categoryKey: 'luxury_vehicles' as TranslationKey,
    descriptionKey: 'case_3_desc' as TranslationKey,
  },
  {
    id: 4,
    titleKey: 'case_4_title' as TranslationKey,
    country: '土库曼斯坦',
    cityKey: 'city_ashgabat' as TranslationKey,
    date: '2025-02-28',
    carModel: 'Geely Xingyue L 2024',
    quantity: 40,
    categoryKey: 'fuel_vehicles' as TranslationKey,
    descriptionKey: 'case_4_desc' as TranslationKey,
  },
  {
    id: 5,
    titleKey: 'case_5_title' as TranslationKey,
    country: '阿联酋',
    cityKey: 'city_dubai' as TranslationKey,
    date: '2023-02-08',
    carModel: 'NIO ES8 2024',
    quantity: 20,
    categoryKey: 'new_energy' as TranslationKey,
    descriptionKey: 'case_5_desc' as TranslationKey,
  },
  {
    id: 6,
    titleKey: 'case_6_title' as TranslationKey,
    country: '哈萨克斯坦',
    cityKey: 'city_almaty' as TranslationKey,
    date: '2026-02-12',
    carModel: 'XPENG G9 2024',
    quantity: 35,
    categoryKey: 'new_energy' as TranslationKey,
    descriptionKey: 'case_6_desc' as TranslationKey,
  },
  {
    id: 7,
    titleKey: 'case_7_title' as TranslationKey,
    country: '乌兹别克斯坦',
    cityKey: 'city_tashkent' as TranslationKey,
    date: '2024-02-05',
    carModel: 'BYD Han 2024',
    quantity: 45,
    categoryKey: 'new_energy' as TranslationKey,
    descriptionKey: 'case_7_desc' as TranslationKey,
  },
  {
    id: 8,
    titleKey: 'case_8_title' as TranslationKey,
    country: '俄罗斯',
    cityKey: 'city_moscow' as TranslationKey,
    date: '2022-02-25',
    carModel: 'Li Auto L9 2024',
    quantity: 28,
    categoryKey: 'luxury_vehicles' as TranslationKey,
    descriptionKey: 'case_8_desc' as TranslationKey,
  },
  {
    id: 9,
    titleKey: 'case_9_title' as TranslationKey,
    country: '哈萨克斯坦',
    cityKey: 'city_almaty' as TranslationKey,
    date: '2025-02-18',
    carModel: 'Zeekr 001 2024',
    quantity: 32,
    categoryKey: 'new_energy' as TranslationKey,
    descriptionKey: 'case_9_desc' as TranslationKey,
  },
  {
    id: 10,
    titleKey: 'case_10_title' as TranslationKey,
    country: '土库曼斯坦',
    cityKey: 'city_ashgabat' as TranslationKey,
    date: '2023-02-22',
    carModel: 'Changan CS75 Plus',
    quantity: 38,
    categoryKey: 'fuel_vehicles' as TranslationKey,
    descriptionKey: 'case_10_desc' as TranslationKey,
  },
  {
    id: 11,
    titleKey: 'case_11_title' as TranslationKey,
    country: '阿联酋',
    cityKey: 'city_dubai' as TranslationKey,
    date: '2026-02-02',
    carModel: 'BYD Yangwang U8',
    quantity: 15,
    categoryKey: 'luxury_vehicles' as TranslationKey,
    descriptionKey: 'case_11_desc' as TranslationKey,
  },
  {
    id: 12,
    titleKey: 'case_12_title' as TranslationKey,
    country: '俄罗斯',
    cityKey: 'city_moscow' as TranslationKey,
    date: '2024-02-14',
    carModel: 'Exeed揽月 2024',
    quantity: 22,
    categoryKey: 'luxury_vehicles' as TranslationKey,
    descriptionKey: 'case_12_desc' as TranslationKey,
  },
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
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white mb-6 leading-tight tracking-tight">
            {t('client_cases')}
          </h1>
          <p className="text-[18px] md:text-[20px] text-white/50 max-w-2xl mx-auto">
            专业的汽车出口服务，值得信赖的合作伙伴
          </p>
        </div>
      </section>

      {/* Cases Grid - Tesla Style */}
      <section className="py-16 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportCases.map((caseItem, index) => (
              <div 
                key={caseItem.id}
                className="group relative overflow-hidden border border-white/5 hover:border-[#e63946]/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={caseImages[index % caseImages.length]}
                    alt={caseItem.carModel}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Quantity Badge */}
                  <div className="absolute top-4 right-4 bg-[#e63946] text-white text-[12px] font-bold px-3 py-1.5 rounded">
                    {caseItem.quantity} {t('units')}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white/80 text-[10px] uppercase tracking-wider px-3 py-1 rounded">
                    {t(caseItem.categoryKey)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-[#0a0a0a]">
                  {/* Model */}
                  <h3 className="text-[18px] font-semibold text-white mb-3">
                    {caseItem.carModel}
                  </h3>
                  
                  {/* Location */}
                  <div className="flex items-center text-white/50 text-[13px] mb-4">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    {caseItem.country} · {t(caseItem.cityKey as TranslationKey)}
                  </div>
                  
                  {/* Description */}
                  <p className="text-[13px] text-white/40 leading-relaxed mb-4">
                    {t(caseItem.descriptionKey as TranslationKey)}
                  </p>
                  
                  {/* Date */}
                  <div className="text-[12px] text-white/30">
                    {caseItem.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs Services - Tesla Style */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[14px] text-[#e63946] uppercase tracking-[0.3em] mb-4 font-medium">
              {t('customs_services')}
            </h2>
            <h3 className="text-[36px] md:text-[48px] font-bold text-white leading-tight">
              一站式清关服务
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customsServices.map((service, index) => (
              <div
                key={index}
                className="p-10 border border-white/10 rounded-xl hover:border-[#e63946]/30 transition-all duration-300 hover:bg-white/[0.02]"
              >
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white/50" />
                </div>
                <h4 className="text-[18px] font-semibold text-white mb-3">
                  {t(service.title as TranslationKey)}
                </h4>
                <p className="text-[14px] text-white/40 leading-relaxed">
                  {t(service.desc as TranslationKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e63946]/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-6">
            开始您的汽车出口业务
          </h2>
          <p className="text-[16px] text-white/50 mb-10 max-w-xl mx-auto">
            联系我们，获取专业报价和咨询服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#e63946] text-white text-[14px] font-medium uppercase tracking-wider rounded hover:bg-[#c1121f] transition-all duration-300 hover:scale-[1.02]"
            >
              {t('contact_us')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/5 backdrop-blur-sm text-white text-[14px] font-medium uppercase tracking-wider rounded border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              {t('home')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
