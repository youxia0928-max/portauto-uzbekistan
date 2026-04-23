'use client';

import { useLanguage } from '@/lib/useLanguage';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// 示例新闻数据
const newsItems = [
  {
    id: 1,
    title: '2024年中亚汽车市场发展趋势分析',
    excerpt: '随着中亚地区经济的持续发展，汽车进口需求呈现稳步增长态势...',
    date: '2024-01-15',
    category: '市场分析',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: '新能源汽车出口乌兹别克斯坦新机遇',
    excerpt: '中国新能源汽车品牌加速布局中亚市场，迎来全新发展机遇...',
    date: '2024-01-10',
    category: '行业动态',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: '二手车出口流程详解：关键注意事项',
    excerpt: '二手车出口涉及多个环节，本文为您详细介绍出口流程及注意事项...',
    date: '2024-01-05',
    category: '出口指南',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
  },
];

export default function NewsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('news_title')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('news_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-blue-900">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3">
                  {item.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href="#" className="w-full">
                  <Button variant="ghost" className="w-full justify-between text-blue-900 hover:text-blue-700 hover:bg-blue-50">
                    {t('read_more')}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#">
            <Button variant="outline" size="lg" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              {t('view_all')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
