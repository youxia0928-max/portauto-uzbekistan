'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/lib/cars';
import { useLanguage } from '@/lib/useLanguage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
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
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {car.isNew && (
          <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600">
            {t('new')}
          </Badge>
        )}
        {car.inStock && (
          <Badge variant="secondary" className="absolute top-3 right-3 bg-green-500 text-white hover:bg-green-600">
            {t('in_stock')}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
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

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">{t('from_price')}</p>
            <p className="text-xl font-bold text-blue-900">
              ${car.price.toLocaleString()}
            </p>
          </div>
          <Link href={`/catalog/${car.id}`}>
            <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
              {t('details')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
