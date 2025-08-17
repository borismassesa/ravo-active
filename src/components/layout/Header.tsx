'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCartStore, useWishlistStore, useUIStore } from '@/store'
import { gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { getTotalItems } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()
  const { 
    isSearchOpen, 
    isMobileMenuOpen, 
    toggleSearch, 
    toggleMobileMenu, 
    closeAll 
  } = useUIStore()

  const navigationItems = [
    { name: 'SHOP', href: '/shop' },
    { name: 'COLLECTIONS', href: '/collections' },
    { name: 'ABOUT', href: '/about' },
    { name: 'LOYALTY', href: '/loyalty' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const header = document.querySelector('.header')
    if (header) {
      gsap.fromTo(header,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
    }
  }, [])

  const cartItemCount = getTotalItems()

  return (
    <>
      {/* Main Header */}
      <header 
        className={cn(
          'header fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg' 
            : 'bg-transparent'
        )}
      >
        <div className="container-fluid relative z-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "lg:hidden p-2 hover:text-ravo-coral transition-colors",
                isScrolled ? "text-ravo-charcoal" : "text-white"
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link 
              href="/" 
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/brandmark-design (1).svg"
                alt="RavoActive"
                width={200}
                height={60}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "font-medium text-body tracking-wide hover:text-ravo-coral transition-colors",
                      isScrolled ? "text-ravo-charcoal" : "text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className={cn(
                  "p-2 hover:text-ravo-coral transition-colors",
                  isScrolled ? "text-ravo-charcoal" : "text-white"
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className={cn(
                  "relative p-2 hover:text-ravo-coral transition-colors",
                  isScrolled ? "text-ravo-charcoal" : "text-white"
                )}
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-ravo-coral text-white text-caption w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {wishlistItems.length}
                  </motion.span>
                )}
              </Link>


              {/* Account */}
              <Link
                href="/account"
                className={cn(
                  "hidden sm:block p-2 hover:text-ravo-coral transition-colors",
                  isScrolled ? "text-ravo-charcoal" : "text-white"
                )}
                aria-label="Account"
              >
                <User size={20} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className={cn(
                  "relative p-2 hover:text-ravo-coral transition-colors",
                  isScrolled ? "text-ravo-charcoal" : "text-white"
                )}
                aria-label="Shopping cart"
              >
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-ravo-coral text-white text-caption w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-full bg-white border-t border-gray-200 z-50"
            >
              <div className="container-fluid py-6">
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      className="w-full pl-12 pr-4 py-3 text-body-lg border-2 border-gray-300 focus:border-ravo-electric"
                      autoFocus
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                  <div className="mt-4 text-body text-gray-600">
                    Popular searches: Leggings, Sports Bras, FlexFlow, PowerLift
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-ravo-charcoal border-t border-gray-700"
            >
              <nav className="container-fluid py-6">
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-white hover:text-ravo-coral transition-colors text-body-lg font-medium"
                        onClick={closeAll}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.1 }}
                  >
                    <Link
                      href="/account"
                      className="block text-white hover:text-ravo-coral transition-colors text-lg font-medium"
                      onClick={closeAll}
                    >
                      ACCOUNT
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header