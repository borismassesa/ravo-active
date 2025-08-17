'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!footerRef.current) return

      // Stagger animation for footer sections
      gsap.fromTo('.footer-section',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Bounce animation for social icons
      gsap.set('.social-icon', { scale: 1 })
      
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer 
      ref={footerRef}
      className="bg-ravo-charcoal text-white relative overflow-hidden"
    >

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="footer-section lg:col-span-1">
              <Link 
                href="/" 
                className="mb-6 block hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/brandmark-design (1).svg"
                  alt="RavoActive"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premium activewear designed for athletes who demand excellence. 
                Elevate your performance with our cutting-edge designs and 
                sustainable materials.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-ravo-coral" />
                  <span className="text-body">1-800-RAVOACTIVE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-ravo-coral" />
                  <span className="text-body">hello@ravoactive.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-ravo-coral" />
                  <span className="text-body">Toronto, Canada</span>
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div className="footer-section">
              <h4 className="text-heading-3 mb-6">SHOP</h4>
              <ul className="space-y-3">
                {[
                  'New Arrivals',
                  'Best Sellers',
                  'Leggings',
                  'Sports Bras',
                  'Shorts',
                  'Tops',
                  'Outerwear',
                  'Accessories',
                  'Sale'
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/shop/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-ravo-coral transition-colors text-body"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div className="footer-section">
              <h4 className="text-heading-3 mb-6">CUSTOMER CARE</h4>
              <ul className="space-y-3">
                {[
                  'Size Guide',
                  'Shipping Info',
                  'Returns & Exchanges',
                  'FAQ',
                  'Contact Us',
                  'Track Your Order',
                  'Gift Cards',
                  'Student Discount',
                  'Loyalty Program'
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/support/${item.toLowerCase().replace(/[ &]/g, '-')}`}
                      className="text-gray-300 hover:text-ravo-coral transition-colors text-body"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer-section">
              <h4 className="text-heading-3 mb-6">COMPANY</h4>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Our Story',
                  'Sustainability',
                  'Careers',
                  'Press',
                  'Investors',
                  'Privacy Policy',
                  'Terms of Service',
                  'Accessibility'
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/company/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-ravo-coral transition-colors text-body"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              
              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <span className="text-body text-gray-400 mr-4">Follow Us:</span>
                {[
                  { icon: Instagram, href: 'https://instagram.com/ravoactive' },
                  { icon: Twitter, href: 'https://twitter.com/ravoactive' },
                  { icon: Facebook, href: 'https://facebook.com/ravoactive' },
                  { icon: Youtube, href: 'https://youtube.com/ravoactive' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon w-10 h-10 bg-gray-700 hover:bg-ravo-coral rounded-full flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-body text-gray-400 mb-2">
                  © {currentYear} RavoActive. All rights reserved.
                </p>
                <p className="text-caption text-gray-500 flex items-center justify-center md:justify-end">
                  Made with <Heart size={12} className="text-ravo-coral mx-1" /> in Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ravo-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ravo-mint/5 rounded-full blur-3xl" />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360, y: [-10, 10, -10] }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-20 right-20 w-4 h-4 bg-ravo-mint/20 transform rotate-45 hidden lg:block"
      />
    </footer>
  )
}

export default Footer