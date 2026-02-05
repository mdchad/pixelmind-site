export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pixelmind Studio',
    url: 'https://www.pixelmindstudio.co',
    logo: 'https://www.pixelmindstudio.co/api/og',
    description: 'At Pixelmind Studio, we specialize in bridging the gap between business and technology. Our team delivers custom software solutions, mobile engineering, web platforms, point of sale systems, and AI-powered applications.',
    sameAs: [
      'https://twitter.com/pixelmindstudio',
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
    description: 'Building Bridges Between Business and Technology',
    publisher: {
      '@type': 'Organization',
      name: 'Pixelmind Studio',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixelmind Studio',
    image: 'https://www.pixelmindstudio.co/api/og',
    url: 'https://www.pixelmindstudio.co',
    description: 'Custom software development, mobile engineering, web platforms, and AI solutions.',
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
