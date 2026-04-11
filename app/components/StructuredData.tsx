export default function StructuredData() {
  const siteUrl = 'https://www.pixelmindstudio.co'

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pixelmind Studio',
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    foundingDate: '2020',
    description: 'Custom software development agency building mobile apps, web platforms, AI tools, and backend systems for ambitious founders and companies.',
    areaServed: 'Worldwide',
    sameAs: [
      'https://www.facebook.com/pixelmindstudio.co',
      'https://www.linkedin.com/company/pixelmindstudio',
      'https://www.instagram.com/pixelmind.studio/',
      'https://www.google.com/maps/place/Pixelmind+Studio/@1.2943816,103.8554961,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1732c47aae11:0xf95e87fd2fe105c4!8m2!3d1.2943816!4d103.858071!16s%2Fg%2F11n99ngfzq',
      'https://github.com/Pixelmind-Studio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${siteUrl}#contact`,
      email: 'hello@pixelmindstudio.co',
      availableLanguage: 'English',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pixelmind Studio',
    url: siteUrl,
    description: 'Custom software development agency building mobile apps, web platforms, AI tools, and backend systems.',
    publisher: {
      '@type': 'Organization',
      name: 'Pixelmind Studio',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pixelmind Studio',
    image: `${siteUrl}/android-chrome-512x512.png`,
    url: siteUrl,
    description: 'Custom software development agency building mobile apps, web platforms, AI tools, and backend systems for ambitious founders and companies.',
    priceRange: '$$',
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 1.2943816,
      longitude: 103.858071,
    },
    hasMap: 'https://www.google.com/maps/place/Pixelmind+Studio/@1.2943816,103.8554961,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1732c47aae11:0xf95e87fd2fe105c4!8m2!3d1.2943816!4d103.858071!16s%2Fg%2F11n99ngfzq',
    serviceType: [
      'Custom Software Development',
      'Mobile App Development',
      'Web Platform Development',
      'AI Integration',
      'Backend Systems & APIs',
      'Systems Integration',
      'Full Stack Development',
      'Technology Consulting',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native-quality iOS and Android apps built with React Native and Expo.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Platform Development',
            description: 'Full-stack web applications from landing pages to complex SaaS products using Next.js and React.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Integration',
            description: 'Practical AI features including semantic search, natural language interfaces, and intelligent automation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systems & Integrations',
            description: 'Backend infrastructure, third-party integrations, APIs, microservices, and automation pipelines.',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Pixelmind Studio offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pixelmind Studio offers custom software development including mobile app development (iOS & Android), web platform development, AI integration, and backend systems & API development.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Pixelmind Studio use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with React Native and Expo for mobile apps, Next.js and React for web platforms, and various LLM/AI APIs (OpenAI, embeddings, RAG) for AI features. Our backend stack includes Node.js, TypeScript, and modern API architectures.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We work with founders and companies at all stages — from early-stage startups validating ideas to scaling businesses building complex products. We are accepting new projects and respond within 24 hours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Pixelmind Studio based?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pixelmind Studio is based in Singapore and has delivered software products across multiple countries since 2020.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I start a project with Pixelmind Studio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via the contact form at pixelmindstudio.co or email us at hello@pixelmindstudio.co. We typically respond within 24 hours.',
        },
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
