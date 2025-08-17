'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { categories, products } from '@/data/products'

const ShopByCategory = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
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


  // Removed complex GSAP animations for better performance

  useEffect(() => {
    checkScrollPosition()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gray-50 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              Shop by Category
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-body-lg text-gray-600 max-w-2xl"
            >
              Discover your perfect fit across our curated collections
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

        {/* Featured Category Highlight */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 lg:p-8 shadow-sm"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative w-full h-64 lg:h-72 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={products.find(p => p.category === categories[activeIndex]?.id)?.images[0] || '/images/products/ravo_product_01.jpeg'}
                  alt={categories[activeIndex]?.name || categories[0].name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-ravo-coral text-white px-3 py-1.5 rounded-full text-sm font-bold">
                    Featured Category
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-display text-ravo-charcoal">
                  {categories[activeIndex]?.name || categories[0].name}
                </h3>
                <p className="text-body text-gray-600">
                  Discover the best in {(categories[activeIndex]?.name || categories[0].name).toLowerCase()} with our premium collection designed for performance and style
                </p>
                <Link
                  href={`/collections/${categories[activeIndex]?.id || categories[0].id}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Shop {categories[activeIndex]?.name || categories[0].name}</span>
                  <ChevronRight size={16} />
                </Link>

                {/* Category Selector */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {categories.slice(0, 5).map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`px-3 py-1.5 rounded-lg text-caption font-medium transition-all duration-200 ${
                        index === activeIndex 
                          ? 'bg-ravo-coral text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Category Cards Horizontal Scroll */}
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
            <div 
              ref={cardsRef}
              className="flex space-x-6 pb-8 px-16"
            >
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card group flex-shrink-0 w-80"
              >
              <Link href={`/collections/${category.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                  
                  {/* Category Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={products.find(p => p.category === category.id)?.images[0] || '/images/products/ravo_product_01.jpeg'}
                      alt={category.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Category Info */}
                  <div className="p-4">
                    <div className="space-y-2">
                      <h3 className="text-heading-3 text-ravo-charcoal group-hover:text-ravo-coral transition-colors duration-300">
                        {category.name}
                      </h3>
                      
                      <p className="text-body text-gray-600">
                        Discover the best in {category.name.toLowerCase()}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-3">
                        <span className="text-body text-ravo-charcoal font-medium group-hover:text-ravo-coral transition-colors duration-300">
                          Shop Collection
                        </span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          className="w-6 h-6 bg-gray-100 group-hover:bg-ravo-coral rounded-full flex items-center justify-center transition-all duration-300"
                        >
                          <ChevronRight size={14} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: 'power2.out' }}
                    className="h-0.5 bg-ravo-coral origin-left"
                  />
                </div>
              </Link>
            </div>
          ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ShopByCategory