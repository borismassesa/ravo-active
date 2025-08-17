'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ChevronRight } from 'lucide-react'
import { activities } from '@/data/products'

const ShopByActivity = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Removed complex GSAP animations for better performance

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gray-50 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Section Header */}
        <div className="text-left mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-display text-ravo-charcoal mb-4"
          >
            Shop by Activity
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-gray-600 max-w-2xl"
          >
            Find gear designed for your favorite activities
          </motion.p>
        </div>

        {/* Featured Activity Highlight */}
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
                  src={activities[activeIndex]?.image || activities[0].image}
                  alt={activities[activeIndex]?.name || activities[0].name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-ravo-coral text-white px-3 py-1.5 rounded-full text-sm font-bold">
                    Featured Activity
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-display text-ravo-charcoal">
                  {activities[activeIndex]?.name || activities[0].name}
                </h3>
                <p className="text-body text-gray-600">
                  {activities[activeIndex]?.description || activities[0].description}
                </p>
                <Link
                  href={`/activities/${activities[activeIndex]?.id || activities[0].id}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Shop {activities[activeIndex]?.name || activities[0].name}</span>
                  <ChevronRight size={16} />
                </Link>

                {/* Activity Selector */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {activities.slice(0, 5).map((activity, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`px-3 py-1.5 rounded-lg text-caption font-medium transition-all duration-200 ${
                        index === activeIndex 
                          ? 'bg-ravo-coral text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {activity.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean Activity Cards Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="activity-card group"
            >
              <Link href={`/activities/${activity.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                  
                  {/* Activity Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Play Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-ravo-coral rounded-full flex items-center justify-center shadow-lg">
                        <Play size={16} className="text-white ml-0.5" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Activity Info */}
                  <div className="p-4">
                    <div className="space-y-2">
                      <h3 className="text-heading-3 text-ravo-charcoal group-hover:text-ravo-coral transition-colors duration-300">
                        {activity.name}
                      </h3>
                      
                      <p className="text-body text-gray-600">
                        {activity.description}
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
    </section>
  )
}

export default ShopByActivity