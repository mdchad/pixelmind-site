import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans"
import { Space_Mono, Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import StructuredData from '@/components/StructuredData'

const siteUrl = process.env.NEXT_PUBLIC_URL || 'https://www.pixelmindstudio.co'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pixelmind Studio | Building Bridges Between Business and Technology',
    template: '%s | Pixelmind Studio',
  },
  description: 'At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, mobile engineering, web platforms, point of sale systems, and AI-powered applications that help businesses grow.',
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
    title: 'Pixelmind Studio | Building Bridges Between Business and Technology',
    description: 'At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, mobile engineering, web platforms, and AI-powered applications.',
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
    title: 'Pixelmind Studio | Building Bridges Between Business and Technology',
    description: 'Custom software solutions, mobile engineering, web platforms, and AI-powered applications that help businesses grow.',
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

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const spaceMono = Space_Mono({
	weight: '400',
	variable: "--font-space-mono",
	subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="zaNyWUg7p8IwSpbD_oEv_rVc8J_i4FGlHinRB3EZIZA" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
