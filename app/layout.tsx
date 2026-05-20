import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://aojie-ju.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aojie Ju — AI engineer & computational social scientist',
  description:
    'AI engineer at AristAI; IC2S2 2026 paper on computational social science; UIUC MS Data Science; bilingual EN/中文. I build AI products and study how they land across cultures.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aojie Ju — AI engineer & computational social scientist',
    description:
      'I build AI products and study how they land across cultures. AristAI · IC2S2 2026 · UIUC MS Data Science.',
    type: 'profile',
    url: siteUrl,
    siteName: 'Aojie Ju',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aojie Ju — AI engineer & computational social scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aojie Ju — AI engineer & computational social scientist',
    description: 'I build AI products and study how they land across cultures.',
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
  jobTitle: 'AI Engineer',
  worksFor: { '@type': 'Organization', name: 'AristAI' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of Illinois Urbana-Champaign' },
    { '@type': 'CollegeOrUniversity', name: 'George Washington University' },
    { '@type': 'CollegeOrUniversity', name: 'Nanjing University' },
  ],
  knowsAbout: [
    'Large language models',
    'Computational social science',
    'AI evaluation',
    'Political reasoning in AI',
    'AI in education',
    'Cross-cultural AI evaluation',
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
