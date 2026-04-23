'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/useLanguage';
import { cars, Car } from '@/lib/cars';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, Check, Phone, Mail, MapPin, Calendar, Car as CarIcon } from 'lucide-react';

interface CarDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const { id } = use(params);
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const car = cars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const getTypeName = (type: Car['type']) => {
    const typeMap: Record<Car['type'], 'sedan' | 'suv' | 'crossover' | 'hatchback'> = {
      sedan: 'sedan',
      suv: 'suv',
      crossover: 'crossover',
      hatchback: 'hatchback',
    };
    return t(typeMap[type]);
  };

  const getTransmissionName = (transmission: Car['transmission']) => {
    return transmission === 'automatic' ? 'Automatic' : 'Manual';
  };

  const getDriveName = (drive: Car['drive']) => {
    const driveMap: Record<Car['drive'], string> = {
      fwd: 'Front-Wheel Drive',
      rwd: 'Rear-Wheel Drive',
      awd: 'All-Wheel Drive',
    };
    return driveMap[drive];
  };

  // Get related cars
  const relatedCars = cars
    .filter((c) => c.id !== car.id && (c.brand === car.brand || c.type === car.type))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-900">{t('home')}</Link>
            <span className="mx-2">/</span>
            <Link href="/catalog" className="hover:text-blue-900">{t('catalog')}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{car.brand} {car.model}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={car.images[selectedImage]}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute top-4 left-4 flex gap-2">
                  {car.isNew && (
                    <Badge className="bg-blue-900 hover:bg-blue-800">
                      {t('new')}
                    </Badge>
                  )}
                  {car.inStock && (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      {t('in_stock')}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-blue-900' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Car Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  {car.brand} {car.model}
                </h1>
                <p className="text-slate-600">
                  {getTypeName(car.type)} · {car.year}
                </p>
              </div>

              <p className="text-slate-700 mb-8">
                {car.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <CarIcon className="w-5 h-5" />
                  {t('specifications')}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">{t('engine')}</p>
                    <p className="font-medium text-slate-900">{car.engine}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">{t('transmission')}</p>
                    <p className="font-medium text-slate-900">{getTransmissionName(car.transmission)}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">{t('drive')}</p>
                    <p className="font-medium text-slate-900">{getDriveName(car.drive)}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">{t('fuel')}</p>
                    <p className="font-medium text-slate-900">{car.fuel}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">{t('year')}</p>
                    <p className="font-medium text-slate-900 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {car.year}
                    </p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-500 mb-1">{t('color')}</p>
                    <p className="font-medium text-slate-900">{car.color}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              {/* Configuration */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  {t('configuration')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {car.configuration.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Inquiry Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              {/* Contact Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {t('contact')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-900" />
                    <span className="text-slate-700">+998 71 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-900" />
                    <span className="text-slate-700">info@autouzbek.uz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-900" />
                    <span className="text-slate-700">{t('address_value')}</span>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Inquiry Form */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {t('inquiry_title')}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {t('inquiry_desc')}
                </p>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-700 text-sm">
                      {t('success_message')}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t('name')}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t('message')}</Label>
                    <Textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={`I'm interested in ${car.brand} ${car.model}...`}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                    {t('send_inquiry')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t('related_cars')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCars.map((car) => (
                <CarCard key={car.id} car={car} showCTA={true} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
