import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://aojie-ju.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aojie Ju — data scientist & computational social scientist',
  description:
    'Data scientist at AristAI; IC2S2 2026 paper on LLM agents; UIUC M.S. Data Science; bilingual EN/中文. I test whether AI systems, and the numbers built on them, can be trusted.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aojie Ju — data scientist & computational social scientist',
    description:
      'I test whether AI systems, and the numbers built on them, can be trusted. AristAI · IC2S2 2026 · UIUC M.S. Data Science.',
    type: 'profile',
    url: siteUrl,
    siteName: 'Aojie Ju',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aojie Ju — data scientist & computational social scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aojie Ju — data scientist & computational social scientist',
    description: 'I test whether AI systems, and the numbers built on them, can be trusted.',
    images: ['/og-image.png'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aojie Ju',
  givenName: 'Aojie',
  familyName: 'Ju',
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: 'Data Scientist',
  worksFor: { '@type': 'Organization', name: 'AristAI' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Illinois Urbana-Champaign' },
    { '@type': 'CollegeOrUniversity', name: 'George Washington University' },
    { '@type': 'CollegeOrUniversity', name: 'Nanjing University' },
  ],
  knowsAbout: [
    'Data science',
    'AI evaluation',
    'Large language models',
    'Computational social science',
    'Causal inference',
    'Survey research',
  ],
  knowsLanguage: ['English', 'Mandarin Chinese'],
  email: 'mailto:aojieju@gmail.com',
  sameAs: [
    'https://www.linkedin.com/in/aojie-ju-3b499216b/',
    'https://github.com/aojie-ju',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  )
}
