'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80',
    title: 'chery-tiggo-7-pro',
    subtitle: 'chery-coolray',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
    title: 'toyota-camry',
    subtitle: 'toyota-sonata',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80',
    title: 'geely-coolray',
    subtitle: 'haval-jolion',
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {t('hero_title')}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            {t('hero_subtitle')}
          </p>
          <Link href="/catalog">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              {t('explore_catalog')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
