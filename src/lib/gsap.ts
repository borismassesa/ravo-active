import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
import { TextPlugin } from 'gsap/TextPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin)
}

export { gsap, ScrollTrigger, Draggable, TextPlugin }

export const animationConfig = {
  ease: {
    power2: 'power2.out',
    power3: 'power3.out',
    power4: 'power4.out',
    back: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    bounce: 'bounce.out',
  },
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
}

export const createScrollTrigger = (element: string | Element, animation: gsap.core.Timeline | gsap.core.Tween, options?: ScrollTrigger.StaticVars) => {
  return ScrollTrigger.create({
    trigger: element,
    start: 'top 80%',
    end: 'bottom 20%',
    animation,
    toggleActions: 'play none none reverse',
    ...options,
  })
}

export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(element, 
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: animationConfig.duration.normal, ease: animationConfig.ease.power3, delay }
  )
}

export const staggerAnimation = (elements: string | Element[], delay = 0.1) => {
  return gsap.fromTo(elements,
    { y: 60, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: animationConfig.duration.normal, 
      ease: animationConfig.ease.power3,
      stagger: delay 
    }
  )
}