import type { Metadata } from 'next'
import { Cardo, Figtree } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const cardo = Cardo({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cardo',
  subsets: ['latin'],
  display: 'swap',
})

const figtree = Figtree({
  weight: ['400', '500', '600'],
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.pixelmindstudio.co'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pixelmind Studio — We Craft Software, Pixel by Pixel',
    template: '%s | Pixelmind Studio',
  },
  description: 'We craft software, with a pixel-perfect touch. Built for the ambitious.',
  keywords: [
    'custom technology solutions',
    'web design',
    'software development',
    'mobile engineering',
    'digital marketing',
    'business growth',
    'technology consulting',
    'innovation',
    'digital transformation',
    'artificial intelligence',
    'project management',
    'user experience',
    'point of sale systems',
    'web platforms',
  ],
  authors: [{ name: 'Pixelmind Studio' }],
  creator: 'Pixelmind Studio',
  publisher: 'Pixelmind Studio',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pixelmind Studio',
    title: 'Pixelmind Studio — We Craft Software, Pixel by Pixel',
    description: 'We craft software, with a pixel-perfect touch. Built for the ambitious.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Pixelmind Studio - Digital Architecture Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixelmindstudio',
    creator: '@pixelmindstudio',
    title: 'Pixelmind Studio — We Craft Software, Pixel by Pixel',
    description: 'We craft software, with a pixel-perfect touch. Built for the ambitious.',
    images: ['/api/og'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#C17A5B" />
        <meta name="theme-color" content="#FAF8F5" />
        <meta name="google-site-verification" content="zaNyWUg7p8IwSpbD_oEv_rVc8J_i4FGlHinRB3EZIZA" />
        <StructuredData />
      </head>
      <body className={`${cardo.variable} ${figtree.variable} antialiased`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
