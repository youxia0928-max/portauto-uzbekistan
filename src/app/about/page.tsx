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
    { value: '5000+', label: t('cars_delivered') },
    { value: '3000+', label: t('happy_customers') },
    { value: '50+', label: t('car_brands') },
    { value: '24/7', label: t('customer_support') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url(/about-bg.webp)' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {t('about_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
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
              <img
                src="/about-bg.webp"
                alt="About Portauto"
                className="w-full h-full object-cover"
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

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {t('team')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('team_description')}
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
