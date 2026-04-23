// 车型数据
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  type: 'sedan' | 'suv' | 'crossover' | 'hatchback';
  engine: string;
  transmission: 'automatic' | 'manual';
  drive: 'fwd' | 'rwd' | 'awd';
  fuel: string;
  mileage: number;
  color: string;
  images: string[];
  isNew: boolean;
  inStock: boolean;
  configuration: string[];
  description: string;
}

export const cars: Car[] = [
  {
    id: 'chery-tiggo-7-pro',
    brand: 'Chery',
    model: 'Tiggo 7 Pro',
    year: 2024,
    price: 28900,
    currency: 'USD',
    type: 'crossover',
    engine: '1.6L Turbo',
    transmission: 'automatic',
    drive: 'fwd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'White',
    images: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Leather seats', 'Panoramic roof', '360° Camera', 'Adaptive cruise control', 'Lane keep assist'],
    description: 'Compact crossover with advanced features and modern design'
  },
  {
    id: 'geely-coolray',
    brand: 'Geely',
    model: 'Coolray',
    year: 2024,
    price: 22900,
    currency: 'USD',
    type: 'crossover',
    engine: '1.5L Turbo',
    transmission: 'automatic',
    drive: 'fwd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'Blue',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Digital dashboard', 'Wireless charging', 'Apple CarPlay', 'Android Auto', 'LED lights'],
    description: 'Sporty compact crossover with premium features'
  },
  {
    id: 'haval-jolion',
    brand: 'Haval',
    model: 'Jolion',
    year: 2024,
    price: 24900,
    currency: 'USD',
    type: 'crossover',
    engine: '1.5L Turbo',
    transmission: 'automatic',
    drive: 'fwd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'Red',
    images: [
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Smart key', 'Push start', '360° camera', 'Heated seats', 'Auto parking'],
    description: 'Compact SUV with excellent value proposition'
  },
  {
    id: 'exeed-tx',
    brand: 'Exeed',
    model: 'TX',
    year: 2024,
    price: 38900,
    currency: 'USD',
    type: 'suv',
    engine: '2.0L Turbo',
    transmission: 'automatic',
    drive: 'awd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'Black',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Premium leather', 'Heads-up display', 'Massage seats', 'Burmester audio', 'Night vision'],
    description: 'Luxury midsize SUV with premium features'
  },
  {
    id: 'toyota-camry',
    brand: 'Toyota',
    model: 'Camry',
    year: 2024,
    price: 34900,
    currency: 'USD',
    type: 'sedan',
    engine: '2.5L Hybrid',
    transmission: 'automatic',
    drive: 'fwd',
    fuel: 'Hybrid',
    mileage: 0,
    color: 'Silver',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Hybrid system', 'Adaptive cruise', 'Lane departure warning', 'Blind spot monitor', 'Wireless charging'],
    description: 'Reliable midsize sedan with hybrid technology'
  },
  {
    id: 'hyundai-sonata',
    brand: 'Hyundai',
    model: 'Sonata',
    year: 2024,
    price: 31900,
    currency: 'USD',
    type: 'sedan',
    engine: '2.5L',
    transmission: 'automatic',
    drive: 'fwd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'White',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['SmartSense', 'Digital key', ' Bose audio', 'Ventilated seats', 'Highway driving assist'],
    description: 'Stylish sedan with advanced safety features'
  },
  {
    id: 'kia-k5',
    brand: 'Kia',
    model: 'K5',
    year: 2024,
    price: 29900,
    currency: 'USD',
    type: 'sedan',
    engine: '1.6L Turbo',
    transmission: 'automatic',
    drive: 'fwd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'Red',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Sport-tuned suspension', 'Panoramic sunroof', 'Digital cluster', 'Remote parking', 'UVO link'],
    description: 'Sporty sedan with aggressive design'
  },
  {
    id: 'changan-cs75',
    brand: 'Changan',
    model: 'CS75 Plus',
    year: 2024,
    price: 31900,
    currency: 'USD',
    type: 'suv',
    engine: '2.0L Turbo',
    transmission: 'automatic',
    drive: 'awd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'Grey',
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Dual 12.3" screens', 'Heads-up display', 'APA parking', 'IACC', 'In-car delivery'],
    description: 'Premium SUV with cutting-edge technology'
  },
  {
    id: 'byd-seal',
    brand: 'BYD',
    model: 'Seal',
    year: 2024,
    price: 35900,
    currency: 'USD',
    type: 'sedan',
    engine: 'Electric',
    transmission: 'automatic',
    drive: 'awd',
    fuel: 'Electric',
    mileage: 0,
    color: 'Blue',
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['Blade battery', '800V architecture', 'OTA updates', 'DiPilot', 'Vehicle-to-load'],
    description: 'Premium electric sedan with advanced battery technology'
  },
  {
    id: 'tank-300',
    brand: 'Tank',
    model: '300',
    year: 2024,
    price: 42900,
    currency: 'USD',
    type: 'suv',
    engine: '2.0L Turbo',
    transmission: 'automatic',
    drive: 'awd',
    fuel: 'Gasoline',
    mileage: 0,
    color: 'Green',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    ],
    isNew: true,
    inStock: true,
    configuration: ['4WD with lockers', '蠕行模式', '坦克掉头', 'Fuzzy suspension', '全景影像'],
    description: 'Robust off-road SUV with professional capabilities'
  }
];

export const brands = [...new Set(cars.map(car => car.brand))];
export const carTypes = ['sedan', 'suv', 'crossover', 'hatchback'] as const;
export const years = [...new Set(cars.map(car => car.year))].sort((a, b) => b - a);
