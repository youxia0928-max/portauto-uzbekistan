'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/useLanguage';
import { Target, History, Award, Users, Shield, Heart } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('transparency'),
      description: t('transparency_desc'),
    },
    {
      icon: Award,
      title: t('reliability'),
      description: t('reliability_desc'),
    },
    {
      icon: Heart,
      title: t('professionalism'),
      description: t('professionalism_desc'),
    },
  ];

  const stats = [
    { value: '5000+', label: 'Cars Delivered' },
    { value: '3000+', label: 'Happy Customers' },
    { value: '50+', label: 'Car Brands' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about_title')}
            </h1>
            <p className="text-xl text-slate-200">
              {t('about_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t('mission')}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {t('mission_text')}
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80"
                alt="Car showroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Company history"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <History className="w-8 h-8 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t('history')}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {t('history_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t('values')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet our team of automotive experts dedicated to finding your perfect vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Bekhzod Karimov', role: 'General Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
              { name: 'Dilshod Tashkentov', role: 'Sales Manager', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
              { name: 'Nodira Yusupova', role: 'Customer Relations', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
