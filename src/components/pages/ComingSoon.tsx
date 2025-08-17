'use client'

import { useState, FormEvent, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'

// Custom social media icon components
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

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const YoutubeIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const ComingSoon = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)
  const [submittedEmails, setSubmittedEmails] = useState<Set<string>>(new Set())

  // Load submitted emails from localStorage on component mount
  useEffect(() => {
    const savedEmails = localStorage.getItem('ravoactive-submitted-emails')
    if (savedEmails) {
      try {
        const emailArray = JSON.parse(savedEmails)
        setSubmittedEmails(new Set(emailArray))
      } catch (error) {
        console.error('Failed to load submitted emails from localStorage:', error)
      }
    }
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const triggerConfetti = () => {
    // Trigger multiple confetti bursts
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      
      // Fire confetti from two different positions
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff6b35', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffa726']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff6b35', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffa726']
      })
    }, 250)
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

    const normalizedEmail = email.toLowerCase().trim()
    
    // Check if this email was already submitted in this session
    if (submittedEmails.has(normalizedEmail)) {
      setError('You have already subscribed with this email!')
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
      
      // Track this email as submitted to prevent duplicates
      setSubmittedEmails(prev => {
        const newSet = new Set(prev).add(normalizedEmail)
        // Save to localStorage
        localStorage.setItem('ravoactive-submitted-emails', JSON.stringify(Array.from(newSet)))
        return newSet
      })
      
      setIsSubmitted(true)
      setEmail('')
      
      // Trigger confetti celebration!
      setTimeout(() => {
        triggerConfetti()
      }, 500)

      // Reset form after confetti animation completes
      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000) // 500ms delay + 3000ms confetti duration + 500ms buffer
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative w-full overflow-x-hidden">
      {/* Top Logo - Responsive positioning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 left-4 md:top-8 md:left-8 z-20"
      >
        <Image
          src="/brandmark-design (1).svg"
          alt="RavoActive Logo"
          width={60}
          height={60}
          className="md:w-20 md:h-20"
          priority
        />
      </motion.div>

      {/* Main Layout */}
      <div className="relative z-10 w-full py-8 md:py-16 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center pt-20 md:pt-0 max-w-7xl mx-auto">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Coming Soon Badge - Top */}
              <div className="inline-flex items-center space-x-2 mb-4 md:mb-6">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-ravo-coral" />
                </motion.div>
                <span className="text-ravo-coral font-medium text-xs md:text-sm uppercase tracking-wider">Coming Soon</span>
                <motion.div
                  animate={{ rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-ravo-coral" />
                </motion.div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 md:mb-8 leading-tight">
                <span className="block">STRENGTH</span>
                <span className="block">
                  <span>MEETS </span>
                  <span className="text-ravo-coral">STYLE</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Premium activewear designed for athletes who demand excellence. Get ready to elevate your performance.
              </p>

              {/* Countdown Timer */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-sm md:text-lg font-medium text-gray-400 mb-4 md:mb-6 uppercase tracking-wider text-center lg:text-left">
                  Launch Countdown
                </h2>
                <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4">
                  {[
                    { value: days, label: "Days" },
                    { value: hours, label: "Hours" },
                    { value: minutes, label: "Min" },
                    { value: seconds, label: "Sec" }
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-2 sm:p-3 mb-1 sm:mb-2 min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white block">
                          {item.value}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide block">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Links - Desktop Only */}
              <div className="mb-6 md:mb-8 hidden lg:block">
                <p className="text-gray-400 text-sm mb-3 md:mb-4 text-left">Follow our journey:</p>
                <div className="flex justify-start space-x-3 md:space-x-4">
                  {[
                    { icon: InstagramIcon, href: 'https://instagram.com/ravoactive', label: 'Instagram' },
                    { icon: TikTokIcon, href: 'https://tiktok.com/@ravoactive', label: 'TikTok' },
                    { icon: FacebookIcon, href: 'https://facebook.com/ravoactive', label: 'Facebook' },
                    { icon: YoutubeIcon, href: 'https://youtube.com/ravoactive', label: 'YouTube' }
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
                <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 text-center lg:text-left">
                    Get Notified at Launch
                  </h3>
                  <div className="mb-6 sm:mb-8">
                    <div className="flex justify-center lg:justify-start mb-3 sm:mb-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        🎁 Early Bird Special
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base mb-2 text-center lg:text-left">
                      Join our exclusive waitlist for early access, special discounts, and insider updates.
                    </p>
                    <p className="text-ravo-coral font-semibold text-sm sm:text-base text-center lg:text-left">
                      Get 20% off your first order when we launch!
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="relative">
                      <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          // Clear error when user starts typing
                          if (error) setError('')
                        }}
                        placeholder="Enter your email address"
                        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ravo-coral focus:border-transparent text-base sm:text-lg"
                      />
                    </div>
                    
                    {error && (
                      <div className="flex items-center space-x-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-ravo-coral hover:bg-ravo-coral/90 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base sm:text-lg"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Join the Waitlist</span>
                        </>
                      )}
                    </button>
                  </form>
                  
                  <div className="mt-4 sm:mt-6 text-center space-y-2 sm:space-y-3">
                    <p className="text-gray-500 text-sm">
                      No spam, unsubscribe at any time.
                    </p>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-xs">
                        🔒 We respect your privacy and protect your data
                      </p>
                      <p className="text-gray-600 text-xs">
                        Questions? Reach us at{' '}
                        <a 
                          href="mailto:monalisaskawa69@gmail.com" 
                          className="text-ravo-coral hover:text-ravo-coral/80 transition-colors break-all"
                        >
                          monalisaskawa69@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-green-900/40 border border-green-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-4 sm:mb-6" />
                  </motion.div>
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl font-semibold text-white mb-3"
                  >
                    You&apos;re on the list! 🎉
                  </motion.h3>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-gray-300 text-sm sm:text-base mb-4">
                      Thanks for joining our waitlist. You&apos;ll be the first to know when RavoActive launches!
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 sm:px-4 py-2 rounded-full text-sm font-medium">
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
                className="mt-4 sm:mt-6 text-center"
              >
                <p className="text-gray-500 text-xs sm:text-sm px-4">
                  Join <span className="text-ravo-coral font-medium">1,000+</span> athletes already on the waitlist
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Mobile Footer with Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="lg:hidden relative z-10 w-full"
      >
        <div className="w-full px-4 sm:px-6 py-6">
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm">Follow our journey:</p>
            <div className="flex justify-center space-x-4">
              {[
                { icon: InstagramIcon, href: 'https://instagram.com/ravoactive', label: 'Instagram' },
                { icon: TikTokIcon, href: 'https://tiktok.com/@ravoactive', label: 'TikTok' },
                { icon: FacebookIcon, href: 'https://facebook.com/ravoactive', label: 'Facebook' },
                { icon: YoutubeIcon, href: 'https://youtube.com/ravoactive', label: 'YouTube' }
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
        </div>
      </motion.div>
    </div>
  )
}

export default ComingSoon