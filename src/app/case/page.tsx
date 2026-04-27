'use client';

import { useLanguage } from '@/lib/useLanguage';
import type { TranslationKey } from '@/lib/translations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, ArrowRight, FileCheck, Truck, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Case images - 12 client case images
const caseImages = [
  'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&h=600&fit=crop',
];

// Case data
const exportCases = [
  {
    id: 1,
    titleKey: 'case_1_title' as TranslationKey,
    country: '乌兹别克斯坦',
    cityKey: 'city_tashkent' as TranslationKey,
    date: '2024-12-15',
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
    date: '2024-11-20',
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
    date: '2024-10-28',
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
    date: '2024-09-15',
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
    date: '2024-08-22',
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
    date: '2024-07-10',
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
    date: '2024-06-18',
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
    date: '2024-05-25',
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
    date: '2024-04-12',
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
    date: '2024-03-08',
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
    date: '2024-02-15',
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
    date: '2024-01-20',
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
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={caseImages[index]}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-900">
                    {t(item.categoryKey)}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {t(item.titleKey)}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {t(item.cityKey)}, {item.country}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <div className="text-xs text-slate-500">{t('car_model')}</div>
                      <div className="font-semibold text-sm text-slate-900">{item.carModel}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">{t('export_quantity')}</div>
                      <div className="font-bold text-xl text-blue-900">{item.quantity}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs line-clamp-2 mb-3">
                    {t(item.descriptionKey)}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full justify-between text-blue-900 hover:text-blue-700 hover:bg-blue-50">
                    {t('details')}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
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
