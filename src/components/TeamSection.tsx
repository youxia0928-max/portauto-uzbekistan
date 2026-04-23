'use client';

import { useLanguage } from '@/lib/useLanguage';
import { Users, Award, Globe, Handshake, Building2, UsersRound, Car } from 'lucide-react';

export default function TeamSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: '海外市场深耕',
      description: '专注于海外市场拓展，与多国企业建立长期合作关系',
    },
    {
      icon: Users,
      title: '专业团队建设',
      description: '23名销售专家覆盖各区域，团队成员均来自汽车和国际贸易行业',
    },
    {
      icon: Handshake,
      title: '战略合作',
      description: '与中国政府企业境外机构开展战略合作，包括格林伍德等知名企业',
    },
  ];

  const teamStructure = [
    {
      region: '中国公司',
      label: 'Chinese Branch',
      leader: '总监',
      departments: ['风控&法务', '市场销售', '运营计划', '业务开发', '产品集成'],
    },
    {
      region: '俄罗斯主体',
      label: 'Russian Entity',
      leader: 'CEO',
      departments: ['总经理办公室', '平台运营', '市场销售', '产品技术开发', '后勤部门'],
    },
  ];

  const chineseBrands = [
    { name: 'Lynk&Co', label: '领克' },
    { name: 'Zeekr', label: '极氪' },
    { name: 'Galaxy', label: '银河' },
    { name: 'GAC', label: '广汽' },
    { name: 'Aion', label: '埃安' },
    { name: 'Li Auto', label: '理想' },
    { name: 'Leapmotor', label: '零跑' },
    { name: 'AITO', label: '问界' },
  ];

  const internationalBrands = [
    { 
      name: 'Toyota', 
      label: '丰田',
      models: ['Camry', 'Highlander', 'Rav4']
    },
    { 
      name: 'Kia', 
      label: '起亚',
      models: ['K3', 'K5', 'KX1', 'Sportage', 'Seltos']
    },
    { 
      name: 'VW', 
      label: '大众',
      models: ['ID.', 'Passat', 'Tiguan', 'Golf', 'Tavendor', 'T-Roc', 'T-Cross']
    },
  ];

  const otherBrands = ['Hyundai', 'Audi', 'BMW', 'Mazda', 'Mitsubishi'];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Team Ability
          </h2>
          <p className="text-lg text-blue-900 font-semibold mb-2">
            Team Investment / Good Credit Approval
          </p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            聚焦海外市场深耕、团队建设，与中国政府企业的境外机构开展战略合作
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Team Structure */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            团队架构
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamStructure.map((org, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-blue-900" />
                  <div>
                    <h4 className="font-bold text-slate-900">{org.region}</h4>
                    <p className="text-sm text-slate-500">{org.label}</p>
                  </div>
                </div>
                <div className="mb-4 pl-3 border-l-4 border-blue-900">
                  <p className="text-sm text-slate-500">负责人</p>
                  <p className="font-semibold text-slate-900">{org.leader}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {org.departments.map((dept, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Partnership Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Strategic Partnership with Brands
            </h3>
          </div>

          {/* Chinese Brands */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🇨🇳</span>
              <h4 className="text-lg font-bold text-slate-900">Chinese Brands</h4>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              For all these brands and models, we have got the <span className="text-orange-500 font-semibold">new car exporting licence from factory</span>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {chineseBrands.map((brand, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 text-center hover:bg-slate-100 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-900">{brand.name}</span>
                  </div>
                  <p className="text-sm text-slate-600">{brand.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 my-10" />

          {/* International Brands */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🌍</span>
              <h4 className="text-lg font-bold text-slate-900">International Brands</h4>
            </div>
            <p className="text-slate-600 text-sm mb-6">
              For all popular international brands, we have cooperated with them and could export by modified channel smoothly.
            </p>
            
            {/* Brand Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {internationalBrands.map((brand, index) => (
                <div key={index} className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-slate-800">{brand.name}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{brand.name}</p>
                      <p className="text-sm text-slate-500">{brand.label}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {brand.models.map((model, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-50 text-blue-800 text-xs rounded">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Other Brands */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {otherBrands.map((brand, index) => (
                <div key={index} className="px-6 py-3 bg-slate-100 rounded-lg">
                  <span className="font-semibold text-slate-700">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900 rounded-2xl p-6 md:p-8 border-2 border-dashed border-blue-700">
            <div className="flex items-start gap-4">
              <UsersRound className="w-10 h-10 text-white flex-shrink-0" />
              <div>
                <p className="text-blue-200 text-sm mb-2">
                  All team members are from the automotive and international trade industries
                </p>
                <p className="text-white font-semibold">
                  There are 23 sales experts be responsible for all regions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 rounded-2xl p-6 md:p-8 border-2 border-dashed border-blue-700">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-white flex-shrink-0" />
              <div>
                <p className="text-blue-200 text-sm mb-1">09/2023</p>
                <p className="text-white font-semibold">
                  PortAuto signed the strategic agreement with Greenwood (Chinese government enterprises in Russia)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
