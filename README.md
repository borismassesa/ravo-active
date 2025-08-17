# RavoActive - Premium Activewear E-commerce

A modern, high-performance e-commerce website built with Next.js 14+, featuring premium activewear collections with advanced animations and user experience.

## ✨ Features

### 🎨 Design & Animations
- **GSAP Animations**: Advanced scroll-triggered animations, parallax effects, and interactive elements
- **Framer Motion**: Smooth micro-interactions and page transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Custom Color Palette**: Carefully curated brand colors (Charcoal, Coral, Electric, Mint, Cream)

### 🛍️ E-commerce Features
- **Product Catalog**: Interactive product cards with hover effects and quick actions
- **Shopping Cart**: Zustand-powered state management with persistent storage
- **Wishlist**: Save favorite items with heart animations
- **Product Filtering**: Advanced filtering and search capabilities
- **Responsive Carousels**: Touch-friendly draggable product carousels

### 🎯 Sections
- **Hero Section**: Full-screen parallax hero with animated text reveals and premium activewear background
- **New Releases**: Grid layout with staggered animations and high-quality product images
- **Style Edit**: Split-screen design with mask reveal animations and lifestyle photography
- **Best Sellers**: Draggable carousel with progress indicators and detailed product imagery
- **Shop by Category**: 3D flip card animations with category-specific activewear images
- **Shop by Activity**: Interactive activity cards with workout-specific imagery and video placeholders
- **Footer**: Multi-column layout with background imagery and social links

### ⚡ Performance
- **Next.js 14+**: App Router, Server Components, and ISR
- **Optimized Images**: Next/Image with blur placeholders
- **Code Splitting**: Dynamic imports and lazy loading
- **Bundle Optimization**: Tree shaking and package optimization

### 🔧 Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom TweakCN components
- **Animations**: GSAP (ScrollTrigger, Draggable) + Framer Motion
- **State Management**: Zustand with persistence
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Montserrat (headings)
- **TypeScript**: Full type safety

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ravoactive
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with OKLCH design system
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx          # Home page with all sections
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header with theme toggle
│   │   └── Footer.tsx    # Site footer with background imagery
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx      # Hero section with activewear background
│   │   ├── NewReleases.tsx # Product grid with enhanced imagery
│   │   ├── StyleEdit.tsx # Split-screen with lifestyle photography
│   │   ├── BestSellers.tsx # Draggable carousel with product images
│   │   ├── ShopByCategory.tsx # Category cards with specific images
│   │   └── ShopByActivity.tsx # Activity cards with workout imagery
│   ├── product/          # Product components
│   │   └── ProductCard.tsx # Enhanced with multiple images
│   ├── ui/              # TweakCN UI components
│   │   ├── button.tsx   # Enhanced with modern shadows
│   │   └── input.tsx    # Modern design system integration
│   └── common/          # Common components
│       └── ThemeToggle.tsx # Dark/light mode toggle
├── lib/                 # Utilities and configurations
│   ├── gsap.ts         # GSAP setup and helpers
│   ├── framer-variants.ts # Framer Motion variants
│   └── utils.ts        # Utility functions
├── store/              # State management
│   └── index.ts        # Zustand stores (cart/wishlist)
├── types/              # TypeScript types
│   └── index.ts        # Product, Category, Activity types
└── data/               # Mock data
    └── products.ts     # 9 products with multiple high-quality images
```

## 🎨 Brand Guidelines

### Color Palette
- **Primary**: `#2B2D42` (Charcoal) - Headers, navigation
- **Accent**: `#FF6B35` (Coral) - CTAs, highlights
- **Secondary**: `#3D5A80` (Electric) - Links, secondary actions
- **Support**: `#98C1D9` (Mint) - Accents, decorative elements
- **Background**: `#F8F9FA` (Cream) - Page background

### Typography
- **Headings**: Montserrat (semibold-bold)
- **Body**: Inter (light-medium)

## 🔧 Customization

### Adding New Products
Update `src/data/products.ts` with new product objects following the `Product` interface.

### Modifying Animations
- GSAP animations: `src/lib/gsap.ts`
- Framer Motion variants: `src/lib/framer-variants.ts`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Inline with Tailwind CSS
- Custom utilities: `tailwind.config.ts`

## 📱 Responsive Breakpoints

- `xs`: 475px+
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 🚀 Deployment

The application is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

### Environment Variables
Create a `.env.local` file for any required environment variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from premium activewear brands
- Unsplash for placeholder images
- GSAP for animation capabilities
- Vercel team for Next.js framework

---

**RavoActive** - Elevate Your Performance 🚀