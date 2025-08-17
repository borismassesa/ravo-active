'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const ProductRecommendations = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  // Filter recommended products (best sellers and highly rated)
  const recommendedProducts = products.filter(product => 
    product.isBestSeller || product.rating >= 4.7
  ).slice(0, 6)

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
    }
  }

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
    }
  }


  useEffect(() => {
    checkScrollPosition()
  }, [])

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-display text-ravo-charcoal mb-4"
            >
              Just for You
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-body-lg text-gray-600 max-w-2xl"
            >
              Handpicked essentials that match your style and performance needs
            </motion.p>
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-ghost"
            >
              Shop All
            </motion.button>
          </motion.div>
        </div>

        {/* Horizontal Scroll Layout */}
        <div className="relative mb-16 group">
          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-lg transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 ${
              canScrollLeft ? 'hover:bg-white/30' : 'cursor-not-allowed opacity-0'
            }`}
          >
            <ChevronLeft size={20} className="text-ravo-charcoal" />
          </motion.button>


          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            onScroll={checkScrollPosition}
          >
            <div className="flex space-x-6 pb-8 px-16">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 w-80"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center bg-ravo-mint/10 rounded-xl p-8 border border-ravo-mint/20"
        >
          <div className="mb-4">
            <span className="text-2xl">🌱</span>
          </div>
          <h3 className="text-heading-3 text-ravo-charcoal mb-3">
            Move to Zero Impact
          </h3>
          <p className="text-body text-gray-600 mb-6 max-w-lg mx-auto">
            Our commitment to sustainable materials and carbon-neutral shipping for a better planet
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary"
          >
            Learn Our Impact
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductRecommendations