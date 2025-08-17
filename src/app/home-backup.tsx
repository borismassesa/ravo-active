import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BestSellers from '@/components/sections/BestSellers'
import ShopByCategory from '@/components/sections/ShopByCategory'
import ProductRecommendations from '@/components/sections/ProductRecommendations'
import ShopByActivity from '@/components/sections/ShopByActivity'
import StyleBanner from '@/components/sections/StyleBanner'

// This is the original home page - restore this when ready to launch
export default function HomeBackup() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopByCategory />
        
        <StyleBanner
          title="STYLE EDIT"
          subtitle="Curated Looks"
          ctaText="SHOP THE EDIT"
          ctaLink="/collections/style-edit"
          backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=900&fit=crop&q=80"
          textPosition="left"
        />
        
        <BestSellers />
        
        <StyleBanner
          title="PERFORMANCE MEETS COMFORT"
          subtitle="Engineered for Athletes"
          ctaText="EXPLORE TECH"
          ctaLink="/technology"
          backgroundImage="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=900&fit=crop&q=80"
          textPosition="center"
        />
        
        <ShopByActivity />
        
        <StyleBanner
          title="SUSTAINABLE STYLE"
          subtitle="Planet Conscious"
          ctaText="LEARN MORE"
          ctaLink="/sustainability"
          backgroundImage="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1600&h=900&fit=crop&q=80"
          textPosition="right"
        />
        
        <ProductRecommendations />
      </main>
      <Footer />
    </>
  )
}