import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coming Soon - RavoActive | High-Performance Activewear',
  description: 'RavoActive is launching soon! Join our waitlist for exclusive early access to premium athletic wear engineered for performance. Be the first to know when we launch.',
  keywords: ['activewear', 'sportswear', 'fitness', 'coming soon', 'waitlist', 'athletic wear', 'RavoActive'],
  authors: [{ name: 'RavoActive' }],
  creator: 'RavoActive',
  publisher: 'RavoActive',
  metadataBase: new URL('https://ravoactive.com'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ravoactive.com',
    siteName: 'RavoActive',
    title: 'Coming Soon - RavoActive | High-Performance Activewear',
    description: 'RavoActive is launching soon! Join our waitlist for exclusive early access to premium athletic wear engineered for performance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RavoActive - Premium Activewear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coming Soon - RavoActive | High-Performance Activewear',
    description: 'RavoActive is launching soon! Join our waitlist for exclusive early access to premium athletic wear.',
    images: ['/og-image.jpg'],
    creator: '@ravoactive',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} smooth-scroll`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}