export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pixelmind Studio',
    url: 'https://www.pixelmindstudio.co',
    logo: 'https://www.pixelmindstudio.co/android-chrome-512x512.png',
    description: 'We craft software, with a pixel-perfect touch. Built for the ambitious.',
    sameAs: [
      'https://twitter.com/pixelmindstudio',
      'https://www.instagram.com/pixelmind.studio/',
      'https://www.facebook.com/pixelmindstudio.co',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://www.pixelmindstudio.co#contact',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pixelmind Studio',
    url: 'https://www.pixelmindstudio.co',
    description: 'We craft software, with a pixel-perfect touch. Built for the ambitious.',
    publisher: {
      '@type': 'Organization',
      name: 'Pixelmind Studio',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixelmind Studio',
    image: 'https://www.pixelmindstudio.co/android-chrome-512x512.png',
    url: 'https://www.pixelmindstudio.co',
    description: 'We craft software, with a pixel-perfect touch. Built for the ambitious.',
    priceRange: '$$',
    areaServed: 'Worldwide',
    serviceType: [
      'Software Development',
      'Mobile Engineering',
      'Web Development',
      'Point of Sale Systems',
      'Artificial Intelligence',
      'Digital Transformation',
      'Technology Consulting',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}
