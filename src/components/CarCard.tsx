'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/lib/cars';
import { useLanguage } from '@/lib/useLanguage';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  showCTA?: boolean;
}

export default function CarCard({ car, showCTA = true }: CarCardProps) {
  const { t } = useLanguage();

  const getTypeName = (type: Car['type']) => {
    const typeMap: Record<Car['type'], 'sedan' | 'suv' | 'crossover' | 'hatchback'> = {
      sedan: 'sedan',
      suv: 'suv',
      crossover: 'crossover',
      hatchback: 'hatchback',
    };
    return t(typeMap[type]);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {car.isNew && (
            <Badge className="bg-blue-900 hover:bg-blue-800">
              {t('new')}
            </Badge>
          )}
          {car.inStock && (
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              {t('in_stock')}
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-slate-900">
            {car.brand} {car.model}
          </h3>
          <p className="text-sm text-slate-500">{getTypeName(car.type)} · {car.year}</p>
        </div>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
            {car.engine}
          </span>
          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
            {car.transmission === 'automatic' ? 'AT' : 'MT'}
          </span>
          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
            {car.drive.toUpperCase()}
          </span>
        </div>

        {/* CTA */}
        {showCTA && (
          <Link href={`/catalog/${car.id}`} className="block">
            <div className="flex items-center justify-center gap-2 w-full py-2 bg-slate-100 hover:bg-blue-900 text-slate-700 hover:text-white rounded-lg transition-colors font-medium">
              <span>{t('details')}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
