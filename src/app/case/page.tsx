'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import type { TranslationKey } from '@/lib/translations';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Case data - will be translated via translation keys
const exportCases = [
  {
    id: 1,
    titleKey: 'case_byd_seal' as TranslationKey,
    country: '乌兹别克斯坦',
    cityKey: 'city_tashkent' as TranslationKey,
    date: '2024-12-15',
    carModel: 'BYD Seal 2024',
    quantity: 50,
    categoryKey: 'new_energy' as TranslationKey,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
    descriptionKey: 'case_byd_seal_desc' as TranslationKey,
  },
  {
    id: 2,
    titleKey: 'case_aito_m9' as TranslationKey,
    country: '哈萨克斯坦',
    cityKey: 'city_almaty' as TranslationKey,
    date: '2024-11-20',
    carModel: 'AITO M9 2024',
    quantity: 30,
    categoryKey: 'new_energy' as TranslationKey,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop',
    descriptionKey: 'case_aito_m9_desc' as TranslationKey,
  },
  {
    id: 3,
    titleKey: 'case_hongqi_ehs9' as TranslationKey,
    country: '俄罗斯',
    cityKey: 'city_moscow' as TranslationKey,
    date: '2024-10-28',
    carModel: 'Hongqi E-HS9 2024',
    quantity: 25,
    categoryKey: 'luxury_vehicles' as TranslationKey,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
    descriptionKey: 'case_hongqi_ehs9_desc' as TranslationKey,
  },
  {
    id: 4,
    titleKey: 'case_geely_xingyue' as TranslationKey,
    country: '土库曼斯坦',
    cityKey: 'city_ashgabat' as TranslationKey,
    date: '2024-09-15',
    carModel: 'Geely Xingyue L 2024',
    quantity: 40,
    categoryKey: 'fuel_vehicles' as TranslationKey,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop',
    descriptionKey: 'case_geely_xingyue_desc' as TranslationKey,
  },
  {
    id: 5,
    titleKey: 'case_nio_es8' as TranslationKey,
    country: '阿联酋',
    cityKey: 'city_dubai' as TranslationKey,
    date: '2024-08-22',
    carModel: 'NIO ES8 2024',
    quantity: 20,
    categoryKey: 'new_energy' as TranslationKey,
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=500&fit=crop',
    descriptionKey: 'case_nio_es8_desc' as TranslationKey,
  },
  {
    id: 6,
    titleKey: 'case_xpeng_g9' as TranslationKey,
    country: '哈萨克斯坦',
    cityKey: 'city_almaty' as TranslationKey,
    date: '2024-07-10',
    carModel: 'XPENG G9 2024',
    quantity: 35,
    categoryKey: 'new_energy' as TranslationKey,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    descriptionKey: 'case_xpeng_g9_desc' as TranslationKey,
  },
];

const categories = ['all', 'new_energy', 'fuel_vehicles', 'luxury_vehicles'] as const;

export default function CasePage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCases = activeCategory === 'all' 
    ? exportCases 
    : exportCases.filter(c => c.categoryKey === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('case')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('case_subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? 'bg-blue-900' : ''}
              >
                {cat === 'all' ? t('all') : t(cat)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-900">
                    {t(item.categoryKey)}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
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
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-sm text-slate-500 mb-2">{t('car_model')}</div>
                    <div className="font-semibold text-slate-900">{item.carModel}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-slate-500 mb-2">{t('export_quantity')}</div>
                    <div className="font-semibold text-2xl text-blue-900">{item.quantity} {t('export_quantity_unit')}</div>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                    {t(item.descriptionKey)}
                  </p>
                  <Button variant="ghost" className="w-full justify-between text-blue-900 hover:text-blue-700 hover:bg-blue-50">
                    {t('details')}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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
