'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Black': 'bg-black',
      'White': 'bg-white border-gray-300',
      'Coral': 'bg-ravo-coral',
      'Mint': 'bg-ravo-mint',
      'Navy': 'bg-blue-900',
      'Charcoal': 'bg-gray-600',
      'Cream': 'bg-ravo-cream',
      'Electric': 'bg-ravo-electric',
      'Olive': 'bg-green-600'
    }
    return colorMap[color] || 'bg-gray-400'
  }

  return (
    <motion.div
      className="group relative bg-white overflow-hidden z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center"
          sizes="320px"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3">
          {product.isNew && (
            <span className="bg-black text-white text-caption px-2 py-1 font-medium uppercase tracking-wide">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100">
          <Heart size={16} className="text-gray-600" />
        </button>

        {/* Quick Add Section - Shows on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 20 
          }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t z-20 shadow-lg"
        >
          <div className="text-caption font-medium text-black mb-2 uppercase tracking-wide">
            QUICK ADD
          </div>
          
          {/* Color Selection */}
          <div className="flex items-center space-x-2 mb-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color ? 'border-black scale-110' : 'border-gray-200'
                } ${getColorClass(color)}`}
                title={color}
              />
            ))}
          </div>

          {/* Size Selection */}
          <div className="flex items-center space-x-1 mb-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-caption font-medium border transition-all duration-200 ${
                  selectedSize === size 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="text-body font-medium text-black mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-caption text-gray-600 mb-2">
          {selectedColor}
        </p>
        
        <div className="text-body font-medium text-black">
          ${product.price}.00 CAD
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard