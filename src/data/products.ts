import type { Product, Category, Activity } from '@/types'

export const products: Product[] = [
  {
    id: 'flexflow-leggings',
    name: 'FlexFlow Leggings',
    price: 78,
    description: 'High-waisted leggings with four-way stretch fabric for ultimate comfort and flexibility.',
    images: [
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'leggings',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Navy', 'Olive'],
    rating: 4.8,
    reviewCount: 247,
    isNew: true,
    tags: ['high-waisted', 'four-way-stretch', 'squat-proof']
  },
  {
    id: 'powerlift-sports-bra',
    name: 'PowerLift Sports Bra',
    price: 65,
    description: 'Medium support sports bra with removable padding and moisture-wicking technology.',
    images: [
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'sports-bras',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Coral', 'Mint'],
    rating: 4.6,
    reviewCount: 183,
    isBestSeller: true,
    tags: ['medium-support', 'removable-padding', 'moisture-wicking']
  },
  {
    id: 'swift-shorts-6',
    name: 'Swift Shorts 6"',
    price: 58,
    description: '6-inch inseam shorts with built-in compression shorts and side pockets.',
    images: [
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg'
    ],
    category: 'shorts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Navy'],
    rating: 4.7,
    reviewCount: 156,
    tags: ['6-inch', 'compression-liner', 'side-pockets']
  },
  {
    id: 'cloudsoft-hoodie',
    name: 'CloudSoft Hoodie',
    price: 95,
    description: 'Ultra-soft oversized hoodie perfect for post-workout comfort and lounging.',
    images: [
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal', 'Mint', 'Coral'],
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    tags: ['oversized', 'ultra-soft', 'post-workout']
  },
  {
    id: 'seamless-tank',
    name: 'Seamless Tank',
    price: 48,
    description: 'Seamless construction tank top with built-in bra and lightweight fabric.',
    images: [
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_01.jpeg'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Mint', 'Coral'],
    rating: 4.5,
    reviewCount: 234,
    isBestSeller: true,
    tags: ['seamless', 'built-in-bra', 'lightweight']
  },
  {
    id: 'performance-jacket',
    name: 'Performance Jacket',
    price: 125,
    description: 'Water-resistant lightweight jacket with reflective details for outdoor training.',
    images: [
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_01.jpeg'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Electric', 'Mint'],
    rating: 4.7,
    reviewCount: 142,
    isNew: true,
    tags: ['water-resistant', 'reflective', 'lightweight']
  },
  {
    id: 'yoga-align-pants',
    name: 'Yoga Align Pants',
    price: 88,
    description: 'High-waisted yoga pants with buttery-soft fabric and perfect stretch.',
    images: [
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_02.jpeg'
    ],
    category: 'leggings',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Cream', 'Mint'],
    rating: 4.9,
    reviewCount: 298,
    isBestSeller: true,
    tags: ['yoga', 'buttery-soft', 'high-waisted']
  },
  {
    id: 'training-crop-top',
    name: 'Training Crop Top',
    price: 42,
    description: 'Cropped training top with mesh panels for maximum breathability.',
    images: [
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Coral', 'Electric'],
    rating: 4.4,
    reviewCount: 176,
    tags: ['crop', 'mesh-panels', 'breathable']
  },
  {
    id: 'recovery-joggers',
    name: 'Recovery Joggers',
    price: 78,
    description: 'Ultra-soft joggers perfect for rest days and casual wear.',
    images: [
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg'
    ],
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Cream', 'Mint'],
    rating: 4.6,
    reviewCount: 124,
    tags: ['ultra-soft', 'recovery', 'casual']
  },
  {
    id: 'hiit-warrior-set',
    name: 'HIIT Warrior Set',
    price: 145,
    description: 'Complete set for high-intensity training with moisture-wicking technology.',
    images: [
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'sets',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Electric', 'Coral'],
    rating: 4.8,
    reviewCount: 89,
    isNew: true,
    isBestSeller: true,
    tags: ['hiit', 'moisture-wicking', 'set']
  },
  {
    id: 'zen-flow-leggings',
    name: 'Zen Flow Leggings',
    price: 92,
    description: 'Buttery-soft leggings designed for yoga and mindful movement.',
    images: [
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_01.jpeg'
    ],
    category: 'leggings',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Mint', 'Cream', 'Black', 'Navy'],
    rating: 4.9,
    reviewCount: 312,
    isBestSeller: true,
    tags: ['yoga', 'buttery-soft', 'high-waisted']
  },
  {
    id: 'speed-runner-shorts',
    name: 'Speed Runner Shorts',
    price: 68,
    description: 'Lightweight running shorts with built-in compression and reflective details.',
    images: [
      '/images/products/ravo_product_03.jpeg',
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg'
    ],
    category: 'shorts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Electric', 'Navy', 'Charcoal'],
    rating: 4.7,
    reviewCount: 198,
    tags: ['running', 'reflective', 'compression']
  },
  {
    id: 'strength-tank',
    name: 'Strength Tank',
    price: 54,
    description: 'Muscle tank designed for weightlifting with extra room for movement.',
    images: [
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Charcoal', 'White', 'Navy'],
    rating: 4.6,
    reviewCount: 167,
    tags: ['training', 'muscle-tank', 'movement']
  },
  {
    id: 'recovery-hoodie',
    name: 'Recovery Hoodie',
    price: 108,
    description: 'Oversized comfort hoodie perfect for post-workout relaxation.',
    images: [
      '/images/products/ravo_product_02.jpeg',
      '/images/products/ravo_product_01.jpeg',
      '/images/products/ravo_product_03.jpeg'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Charcoal', 'Mint', 'Coral'],
    rating: 4.8,
    reviewCount: 245,
    isNew: true,
    tags: ['recovery', 'oversized', 'comfort']
  }
]

export const categories: Category[] = [
  {
    id: 'leggings',
    name: 'Leggings',
    image: 'https://images.unsplash.com/photo-1506629905607-21e2c9d72700?w=800&h=600&fit=crop&q=80',
    productCount: 34
  },
  {
    id: 'sports-bras',
    name: 'Sports Bras',
    image: 'https://images.unsplash.com/photo-1594736797933-d0beb7039d65?w=800&h=600&fit=crop&q=80',
    productCount: 28
  },
  {
    id: 'shorts',
    name: 'Shorts',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80',
    productCount: 24
  },
  {
    id: 'tops',
    name: 'Tops',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&q=80',
    productCount: 32
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop&q=80',
    productCount: 19
  },
  {
    id: 'sets',
    name: 'Sets',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80',
    productCount: 12
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop&q=80',
    productCount: 8
  },
  {
    id: 'swimwear',
    name: 'Swimwear',
    image: 'https://images.unsplash.com/photo-1544966503-48ad5f0da3b9?w=800&h=600&fit=crop&q=80',
    productCount: 14
  }
]

export const activities: Activity[] = [
  {
    id: 'hiit',
    name: 'HIIT',
    description: 'High-intensity interval training gear designed for explosive workouts and maximum performance',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'yoga',
    name: 'YOGA',
    description: 'Flexible and comfortable pieces that move with your flow and enhance your practice',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'running',
    name: 'RUNNING',
    description: 'Lightweight and breathable gear engineered for every mile and every pace',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'training',
    name: 'TRAINING',
    description: 'Durable and supportive pieces built for strength training and weightlifting sessions',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'recovery',
    name: 'RECOVERY',
    description: 'Soft and cozy essentials perfect for rest days and post-workout relaxation',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'pilates',
    name: 'PILATES',
    description: 'Supportive and form-fitting activewear designed for controlled movements and core work',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'cycling',
    name: 'CYCLING',
    description: 'Aerodynamic and moisture-wicking gear for indoor and outdoor cycling adventures',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&h=800&fit=crop&q=80'
  },
  {
    id: 'boxing',
    name: 'BOXING',
    description: 'Tough and flexible gear that stands up to intense boxing and martial arts training',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=800&fit=crop&q=80',
    video: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&h=800&fit=crop&q=80'
  }
]