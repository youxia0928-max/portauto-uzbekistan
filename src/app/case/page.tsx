'use client';

import { useLanguage } from '@/lib/useLanguage';
import type { TranslationKey } from '@/lib/translations';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, ArrowRight, FileCheck, Truck, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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

// Helper function to generate random date between 2022-01 and 2026-02
function getRandomDate(): string {
  const startDate = new Date(2022, 0, 1); // 2022-01-01
  const endDate = new Date(2026, 1, 28); // 2026-02-28
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);
  return randomDate.toISOString().split('T')[0];
}

// Case data with random dates in 2022-2026 February range
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

      {/* Cases Grid - 12 images in 3 columns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportCases.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                {/* Image with Location & Date overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={caseImages[index]}
                    alt={`${t(item.cityKey)}, ${item.country}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  {/* Location and Date - Left/Right Layout */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center text-white text-sm bg-white/15 backdrop-blur-md rounded-lg px-4 py-3">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-orange-400" />
                        <span>{t(item.cityKey)}, {item.country}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-400" />
                        <span>{item.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/customs.webp"
                alt="Customs Clearance"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              {customsServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {t(service.title as TranslationKey)}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {t(service.desc as TranslationKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Images Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/stats/stat-1.webp" alt="Stat 1" className="w-full h-64 object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/stats/stat-2.webp" alt="Stat 2" className="w-full h-64 object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/stats/stat-3.webp" alt="Stat 3" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
