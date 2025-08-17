'use client'

import { useState, FormEvent, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, CheckCircle, AlertCircle, Sparkles, Instagram, Facebook, Youtube } from 'lucide-react'

// Custom TikTok icon component
const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      setIsSubmitted(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Launch countdown - 1 month from now with real-time updates
  useEffect(() => {
    // Set launch date inside useEffect to avoid dependency issues
    const launchDate = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000))
    
    // Calculate initial time left
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = launchDate.getTime() - now
      return Math.max(0, difference)
    }

    // Set initial time
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, []) // Empty dependency array
  
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative">
      {/* Top Left Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-20"
      >
        <Image
          src="/brandmark-design (1).svg"
          alt="RavoActive Logo"
          width={80}
          height={80}
          priority
        />
      </motion.div>

      {/* Two Column Layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Coming Soon Badge - Top */}
              <div className="inline-flex items-center space-x-2 mb-6">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 h-4 text-ravo-coral" />
                </motion.div>
                <span className="text-ravo-coral font-medium text-sm uppercase tracking-wider">Coming Soon</span>
                <motion.div
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Sparkles className="w-4 h-4 text-ravo-coral" />
                </motion.div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                <span className="block">STRENGTH</span>
                <span className="block">
                  <span>MEETS </span>
                  <span className="text-ravo-coral">STYLE</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-lg">
                Premium activewear designed for athletes who demand excellence. Get ready to elevate your performance.
              </p>

              {/* Countdown Timer */}
              <div className="mb-8">
                <h2 className="text-lg font-medium text-gray-400 mb-6 uppercase tracking-wider">
                  Launch Countdown
                </h2>
                <div className="flex space-x-4">
                  {[
                    { value: days, label: "Days" },
                    { value: hours, label: "Hours" },
                    { value: minutes, label: "Minutes" },
                    { value: seconds, label: "Seconds" }
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mb-2 min-w-[60px]">
                        <span className="text-xl md:text-2xl font-bold text-white">
                          {item.value}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-4">Follow our journey:</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: 'https://instagram.com/ravoactive', label: 'Instagram' },
                    { icon: TikTokIcon, href: 'https://tiktok.com/@ravoactive', label: 'TikTok' },
                    { icon: Facebook, href: 'https://facebook.com/ravoactive', label: 'Facebook' },
                    { icon: Youtube, href: 'https://youtube.com/ravoactive', label: 'YouTube' }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-ravo-coral border border-gray-700 hover:border-ravo-coral rounded-lg flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-8"
            >
              {!isSubmitted ? (
                <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Get Notified at Launch
                  </h3>
                  <div className="mb-8">
                    <div className="inline-flex items-center space-x-2 mb-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        🎁 Early Bird Special
                      </span>
                    </div>
                    <p className="text-gray-400 text-base mb-2">
                      Join our exclusive waitlist for early access, special discounts, and insider updates.
                    </p>
                    <p className="text-ravo-coral font-semibold text-base">
                      Get 20% off your first order when we launch!
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ravo-coral focus:border-transparent text-lg"
                      />
                    </div>
                    
                    {error && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-ravo-coral hover:bg-ravo-coral/90 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          <span>Join the Waitlist</span>
                        </>
                      )}
                    </button>
                  </form>
                  
                  <div className="mt-6 text-center space-y-2">
                    <p className="text-gray-500 text-sm">
                      No spam, unsubscribe at any time.
                    </p>
                    <p className="text-gray-600 text-xs">
                      We respect your privacy • Contact us: hello@ravoactive.com
                    </p>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-green-900/40 border border-green-700 rounded-2xl p-8 lg:p-12 text-center backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-semibold text-white mb-3"
                  >
                    You&apos;re on the list! 🎉
                  </motion.h3>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-gray-300 text-base mb-4">
                      Thanks for joining our waitlist. You&apos;ll be the first to know when RavoActive launches!
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                      <span>🎁</span>
                      <span>20% off secured for you!</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Social Proof below form */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-center"
              >
                <p className="text-gray-500 text-sm">
                  Join <span className="text-ravo-coral font-medium">1,000+</span> athletes already on the waitlist
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon