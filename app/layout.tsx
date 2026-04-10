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
    default: 'Pixelmind Studio — Software Development Agency',
    template: '%s | Pixelmind Studio',
  },
  description: 'Custom software development for ambitious founders and companies. We build mobile apps, web platforms, AI tools, and backend systems — pixel-perfect, always shipped.',
  keywords: [
    'software development agency',
    'custom software development',
    'mobile app development agency',
    'web development agency',
    'AI software development',
    'React Native development',
    'Next.js development',
    'Singapore software agency',
    'software studio Singapore',
    'backend systems development',
    'full stack development agency',
    'software development company',
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
    title: 'Pixelmind Studio — Software Development Agency',
    description: 'Custom software development for ambitious founders and companies. We build mobile apps, web platforms, AI tools, and backend systems — pixel-perfect, always shipped.',
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
    title: 'Pixelmind Studio — Software Development Agency',
    description: 'Custom software development for ambitious founders and companies. We build mobile apps, web platforms, AI tools, and backend systems — pixel-perfect, always shipped.',
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5AFAC5" />
        <meta name="theme-color" content="#000000" />
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
