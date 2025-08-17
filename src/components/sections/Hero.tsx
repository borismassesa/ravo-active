'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { staggerContainer } from '@/lib/framer-variants'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current || !backgroundRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) return

      // Set initial states for background
      gsap.set(backgroundRef.current, {
        scale: 1.2,
      })

      // Set initial states for content elements
      gsap.set([subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 100,
      })

      // Set initial states for title spans
      const titleSpans = titleRef.current.querySelectorAll('span')
      if (titleSpans.length > 0) {
        gsap.set(titleSpans, {
          opacity: 0,
          y: 100,
        })
      } else {
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 100,
        })
      }

      // Create main timeline - runs only once
      const tl = gsap.timeline({
        delay: 0.5,
      })

      // Animate background with Ken Burns effect
      tl.to(backgroundRef.current, {
        scale: 1,
        duration: 2,
        ease: 'power2.out',
      }, 0)

      // Animate title words with stagger for dynamic effect
      if (titleSpans.length > 0) {
        tl.to(titleSpans, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: {
            amount: 0.4,
            from: "start"
          }
        }, 0.3)
      } else {
        // Fallback for single title element
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, 0.3)
      }

      // Animate subtitle
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.8)

      // Animate CTA container
      tl.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, 1.0)

      // Animate individual CTA buttons with stagger for athletic dynamic effect
      const ctaButtons = ctaRef.current.querySelectorAll('button')
      if (ctaButtons.length > 0) {
        gsap.set(ctaButtons, { opacity: 0, scale: 0.8 })
        tl.to(ctaButtons, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: {
            amount: 0.2,
            from: "start"
          }
        }, 1.2)
      }

      // Parallax effect on scroll - only affects background
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          gsap.set(backgroundRef.current, {
            y: progress * 200,
            scale: 1 + (progress * 0.1), // Subtle scale effect
          })
        },
      })

      // Subtle floating animation for CTA - only after initial animation completes
      tl.to(ctaRef.current, {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 1,
      }, 2.5)

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden bg-ravo-navy"
    >
      {/* Background Image */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/unsplash_01.jpg')`,
          }}
        />
        <div 
          className="absolute inset-0 w-full h-full bg-black/60"
        />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-left text-white px-8 lg:px-16 max-w-7xl mx-auto w-full"
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-lg"
        >

          {/* Main Headline */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 leading-tight text-white"
          >
            <span className="block">STRENGTH</span>
            <span className="block">
              <span>MEETS</span>
              <span className="text-ravo-coral ml-4">STYLE</span>
            </span>
          </h1>

          {/* Subheading */}
          <p
            ref={subtitleRef}
            className="text-body-lg text-gray-300 mb-8 max-w-md"
          >
            High-performance activewear engineered for athletes who demand excellence.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="btn-primary"
            >
              Shop Performance Gear
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-outline-white"
            >
              View Collection
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero