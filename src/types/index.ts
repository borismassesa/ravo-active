export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  images: string[]
  category: string
  sizes: string[]
  colors: string[]
  rating: number
  reviewCount: number
  isNew?: boolean
  isBestSeller?: boolean
  tags: string[]
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

export interface WishlistItem {
  id: string
  productId: string
  name: string
  price: number
  image: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  preferences: {
    size: string[]
    activities: string[]
    styles: string[]
  }
}

export interface Category {
  id: string
  name: string
  image: string
  productCount: number
}

export interface Activity {
  id: string
  name: string
  description: string
  image: string
  video?: string
}