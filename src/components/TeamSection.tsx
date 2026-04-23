'use client';

import { useLanguage } from '@/lib/useLanguage';
import { Users, Award, Globe, Building2, UsersRound, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TeamSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: 'Опыт на зарубежных рынках',
      description: 'Мы успешно работаем с партнерами из разных стран',
    },
    {
      icon: Users,
      title: 'Команда профессионалов',
      description: '23 менеджера по продажам со всей страны',
    },
    {
      icon: Shield,
      title: 'Лицензия на экспорт',
      description: 'Получены официальные лицензии от ведущих брендов',
    },
  ];

  const teamStructure = [
    {
      region: 'Китайская компания',
      label: 'Chinese Branch',
      leader: 'Директор',
      departments: ['Юрист', 'Продажи', 'Логистика', 'Развитие'],
    },
    {
      region: 'Российское представительство',
      label: 'Russian Entity',
      leader: 'Генеральный директор',
      departments: ['Офис CEO', 'Платформа', 'Продажи', 'IT', 'Логистика'],
    },
  ];

  // Brand data with first letter icons
  const chineseBrands = [
    { name: 'Lynk&Co', letter: 'L', color: 'from-red-500 to-red-700' },
    { name: 'Zeekr', letter: 'Z', color: 'from-blue-500 to-blue-700' },
    { name: 'Galaxy', letter: 'G', color: 'from-green-500 to-green-700' },
    { name: 'GAC', letter: 'G', color: 'from-red-500 to-red-600' },
    { name: 'Aion', letter: 'A', color: 'from-cyan-500 to-cyan-700' },
    { name: 'Li Auto', letter: 'L', color: 'from-blue-500 to-blue-600' },
    { name: 'Leapmotor', letter: 'L', color: 'from-teal-500 to-teal-700' },
    { name: 'AITO', letter: 'A', color: 'from-purple-500 to-purple-700' },
  ];

  const internationalBrands = [
    { name: 'Toyota', letter: 'T', color: 'from-red-600 to-red-800' },
    { name: 'Kia', letter: 'K', color: 'from-slate-600 to-slate-800' },
    { name: 'VW', letter: 'V', color: 'from-blue-600 to-blue-800' },
    { name: 'Hyundai', letter: 'H', color: 'from-slate-500 to-slate-700' },
    { name: 'BMW', letter: 'B', color: 'from-blue-600 to-blue-800' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Команда и возможности
          </h2>
          <p className="text-lg text-blue-900 font-semibold mb-2">
            Team Investment / Good Credit Approval
          </p>
        </div>

        {/* Features Grid - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Structure - Compact */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Структура команды
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamStructure.map((org, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-blue-900" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{org.region}</h4>
                    <p className="text-xs text-slate-500">{org.label} · {org.leader}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {org.departments.map((dept, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Partnership - Visual Cards */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Брендовые партнеры
            </h3>
            <p className="text-slate-500 text-sm">
              Нам доверяют ведущие автомобильные бренды мира
            </p>
          </div>

          {/* Chinese Brands - Visual Icons */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🇨🇳</span>
              <h4 className="font-semibold text-slate-900">Китайские бренды</h4>
              <span className="ml-auto text-xs text-orange-500 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Export License
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
              {chineseBrands.map((brand, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <span className="text-white font-black text-2xl">{brand.letter}</span>
                  </div>
                  <p className="text-center text-xs text-slate-600 mt-2 font-medium">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International Brands - Visual Icons */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🌍</span>
              <h4 className="font-semibold text-slate-900">Международные бренды</h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {internationalBrands.map((brand, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className={`aspect-square rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <span className="text-white font-black text-3xl">{brand.letter}</span>
                  </div>
                  <p className="text-center text-sm text-slate-700 mt-2 font-semibold">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Models */}
          <div className="mt-8 p-4 bg-slate-50 rounded-xl">
            <p className="text-xs text-slate-500 text-center">
              <span className="font-semibold">Toyota:</span> Camry, RAV4, Highlander · 
              <span className="font-semibold ml-2">Kia:</span> K5, Sportage, Seltos · 
              <span className="font-semibold ml-2">VW:</span> ID.4, Passat, Tiguan
            </p>
          </div>
        </div>

        {/* Bottom Stats - Compact Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-900 rounded-xl p-5 flex items-center gap-4">
            <UsersRound className="w-8 h-8 text-white flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">
                23+ Менеджеров по продажам
              </p>
              <p className="text-blue-200 text-xs">
                Все из сферы авто и международной торговли
              </p>
            </div>
          </div>
          <div className="bg-blue-900 rounded-xl p-5 flex items-center gap-4">
            <Award className="w-8 h-8 text-white flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">
                Стратегический партнер
              </p>
              <p className="text-blue-200 text-xs">
                Greenwood (Российско-Китайское предприятие)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
