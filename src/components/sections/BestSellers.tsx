'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const BestSellers = () => {
  // Get best seller products
  const bestSellers = products.filter(product => product.isBestSeller)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

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
    <section className="section-padding bg-white overflow-hidden">
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
              Best Sellers
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-body-lg text-gray-600 max-w-2xl"
            >
              Discover our most-loved pieces chosen by thousands of athletes
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
        <div className="relative group">
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
              {bestSellers.map((product) => (
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
      </div>
    </section>
  )
}

export default BestSellers