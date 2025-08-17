'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface StyleBannerProps {
  title: string
  subtitle?: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
  textPosition?: 'left' | 'center' | 'right'
}

const StyleBanner = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage,
  textPosition = 'left' 
}: StyleBannerProps) => {
  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-100"
        >
          {/* Background */}
          <div className="absolute inset-0">
            {backgroundImage.startsWith('http') ? (
              <>
                <Image
                  src={backgroundImage}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </>
            ) : (
              /* Gradient Background Fallback */
              <div className="absolute inset-0 bg-gradient-to-r from-ravo-coral via-ravo-mint to-ravo-electric opacity-90" />
            )}
          </div>

          {/* Content */}
          <div className={`relative h-full flex items-center z-10 ${
            textPosition === 'center' ? 'justify-center text-center' :
            textPosition === 'right' ? 'justify-end text-right' :
            'justify-start text-left'
          }`}>
            <div className={`space-y-6 ${
              textPosition === 'center' ? 'max-w-2xl' : 'max-w-lg'
            } px-8 lg:px-12`}>
              
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white tracking-wide leading-tight">
                  {title}
                </h2>
                
                {subtitle && (
                  <p className="text-xl lg:text-2xl font-display font-light text-white/90 italic">
                    {subtitle}
                  </p>
                )}
              </motion.div>

              {/* CTA Button */}
              <div>
                <Link href={ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/90 hover:bg-white text-ravo-charcoal px-8 py-3 rounded-lg font-medium text-body uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
                  >
                    {ctaText}
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StyleBanner