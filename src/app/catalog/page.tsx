'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/lib/useLanguage';
import { cars, Car, brands, carTypes, years } from '@/lib/cars';
import CarCard from '@/components/CarCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter, Search } from 'lucide-react';

interface FilterFormProps {
  selectedBrand: string;
  selectedType: string;
  selectedYear: string;
  minPrice: string;
  maxPrice: string;
  onBrandChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onYearChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onReset: () => void;
}

function FilterForm({
  selectedBrand,
  selectedType,
  selectedYear,
  minPrice,
  maxPrice,
  onBrandChange,
  onTypeChange,
  onYearChange,
  onMinPriceChange,
  onMaxPriceChange,
  onReset,
}: FilterFormProps) {
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
    <div className="space-y-6">
      {/* Brand Filter */}
      <div>
        <Label className="text-sm font-medium mb-2 block">{t('brand')}</Label>
        <Select value={selectedBrand} onValueChange={onBrandChange}>
          <SelectTrigger>
            <SelectValue placeholder={t('all_brands')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_brands')}</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Type Filter */}
      <div>
        <Label className="text-sm font-medium mb-2 block">{t('car_type')}</Label>
        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder={t('all_types')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_types')}</SelectItem>
            {carTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {getTypeName(type)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Year Filter */}
      <div>
        <Label className="text-sm font-medium mb-2 block">{t('year')}</Label>
        <Select value={selectedYear} onValueChange={onYearChange}>
          <SelectTrigger>
            <SelectValue placeholder={t('all_years')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_years')}</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium mb-2 block">{t('price_range')}</Label>
        <div className="space-y-2">
          <Input
            type="number"
            placeholder={t('min_price')}
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
          />
          <Input
            type="number"
            placeholder={t('max_price')}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
          />
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={onReset}
      >
        {t('reset_filters')}
      </Button>
    </div>
  );
}

export default function CatalogPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter and sort cars
  const filteredCars = useMemo(() => {
    let result = [...cars];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(term) ||
          car.model.toLowerCase().includes(term)
      );
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      result = result.filter((car) => car.brand === selectedBrand);
    }

    // Type filter
    if (selectedType !== 'all') {
      result = result.filter((car) => car.type === selectedType);
    }

    // Year filter
    if (selectedYear !== 'all') {
      result = result.filter((car) => car.year.toString() === selectedYear);
    }

    // Price filter
    if (minPrice) {
      result = result.filter((car) => car.price >= parseInt(minPrice));
    }
    if (maxPrice) {
      result = result.filter((car) => car.price <= parseInt(maxPrice));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.year - a.year);
        break;
    }

    return result;
  }, [searchTerm, selectedBrand, selectedType, selectedYear, minPrice, maxPrice, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrand('all');
    setSelectedType('all');
    setSelectedYear('all');
    setMinPrice('');
    setMaxPrice('');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {t('catalog')}
          </h1>
          <p className="text-slate-600">
            {t('results')}: {filteredCars.length}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-semibold mb-6">{t('filter')}</h2>
              <FilterForm
                selectedBrand={selectedBrand}
                selectedType={selectedType}
                selectedYear={selectedYear}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onBrandChange={setSelectedBrand}
                onTypeChange={setSelectedType}
                onYearChange={setSelectedYear}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
                onReset={resetFilters}
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search by brand or model..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex gap-2">
                  {/* Mobile Filter Button */}
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="w-4 h-4 mr-2" />
                        {t('filter')}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                      <SheetHeader>
                        <SheetTitle>{t('filter')}</SheetTitle>
                        <SheetDescription>
                          Filter your preferred vehicles
                        </SheetDescription>
                      </SheetHeader>
                      <div className="mt-6">
                        <FilterForm
                          selectedBrand={selectedBrand}
                          selectedType={selectedType}
                          selectedYear={selectedYear}
                          minPrice={minPrice}
                          maxPrice={maxPrice}
                          onBrandChange={setSelectedBrand}
                          onTypeChange={setSelectedType}
                          onYearChange={setSelectedYear}
                          onMinPriceChange={setMinPrice}
                          onMaxPriceChange={setMaxPrice}
                          onReset={resetFilters}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={t('sort_by')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">{t('newest')}</SelectItem>
                      <SelectItem value="price-low">{t('price_low_high')}</SelectItem>
                      <SelectItem value="price-high">{t('price_high_low')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Car Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm">
                <p className="text-slate-500 mb-4">{t('not_found')}</p>
                <Button variant="outline" onClick={resetFilters}>
                  {t('reset_filters')}
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
