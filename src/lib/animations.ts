import { Variants } from 'framer-motion'

// Common animation variants
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export const fadeInCard: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Common props for consistent animations
export const fadeInProps = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true },
  transition: { duration: 0.5 }
}