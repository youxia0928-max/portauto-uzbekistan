'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// 示例案例数据
const exportCases = [
  {
    id: 1,
    title: '比亚迪海豹出口乌兹别克斯坦',
    country: '乌兹别克斯坦',
    city: '塔什干',
    date: '2024-12-15',
    carModel: 'BYD Seal 2024',
    quantity: 50,
    category: '新能源汽车',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=500&fit=crop',
    description: '成功完成50台比亚迪海豹车型的出口项目，从深圳港发运，安全抵达塔什干。',
  },
  {
    id: 2,
    title: '问界M9新能源汽车出口哈萨克斯坦',
    country: '哈萨克斯坦',
    city: '阿拉木图',
    date: '2024-11-20',
    carModel: 'AITO M9 2024',
    quantity: 30,
    category: '新能源汽车',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop',
    description: '完成30台问界M9大型SUV的出口，全程物流跟踪，确保车辆安全交付。',
  },
  {
    id: 3,
    title: '红旗E-HS9出口俄罗斯莫斯科',
    country: '俄罗斯',
    city: '莫斯科',
    date: '2024-10-28',
    carModel: 'Hongqi E-HS9 2024',
    quantity: 25,
    category: '高端车型',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=500&fit=crop',
    description: '高端电动SUV出口项目，客户对车辆品质和物流服务高度认可。',
  },
  {
    id: 4,
    title: '吉利星越L出口土库曼斯坦',
    country: '土库曼斯坦',
    city: '阿什哈巴德',
    date: '2024-09-15',
    carModel: 'Geely Xingyue L 2024',
    quantity: 40,
    category: '燃油车型',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=500&fit=crop',
    description: '传统燃油车型出口项目，成功打通土库曼斯坦市场渠道。',
  },
  {
    id: 5,
    title: '蔚来ES8出口阿联酋迪拜',
    country: '阿联酋',
    city: '迪拜',
    date: '2024-08-22',
    carModel: 'NIO ES8 2024',
    quantity: 20,
    category: '新能源汽车',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&h=500&fit=crop',
    description: '高端智能电动SUV出口至中东市场，助力中国品牌国际化。',
  },
  {
    id: 6,
    title: '小鹏G9出口哈萨克斯坦阿拉木图',
    country: '哈萨克斯坦',
    city: '阿拉木图',
    date: '2024-07-10',
    carModel: 'XPENG G9 2024',
    quantity: 35,
    category: '新能源汽车',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
    description: '智能电动SUV批量出口，提供完善的售后服务支持。',
  },
];

const categories = ['全部', '新能源汽车', '燃油车型', '高端车型'];

export default function CasePage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredCases = activeCategory === '全部' 
    ? exportCases 
    : exportCases.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('case')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            成功案例展示 - 专业的汽车出口服务，连接中国车源与全球市场
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
                {cat}
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
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-900">
                    {item.category}
                  </Badge>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.city}, {item.country}
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
                    <div className="text-sm text-slate-500 mb-2">车型</div>
                    <div className="font-semibold text-slate-900">{item.carModel}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-slate-500 mb-2">出口数量</div>
                    <div className="font-semibold text-2xl text-blue-900">{item.quantity} 台</div>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                    {item.description}
                  </p>
                  <Button variant="ghost" className="w-full justify-between text-blue-900 hover:text-blue-700 hover:bg-blue-50">
                    {t('read_more')}
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
              <div className="text-slate-600">成功案例</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-slate-600">出口国家</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">3000+</div>
              <div className="text-slate-600">出口车辆</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-slate-600">客户满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            开始您的出口项目
          </h2>
          <p className="text-slate-200 mb-8 max-w-2xl mx-auto">
            联系我们，获取专业的汽车出口咨询和报价服务
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              立即咨询
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
