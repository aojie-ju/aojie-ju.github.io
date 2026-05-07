import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aojie Ju — AI engineer & computational social scientist',
  description:
    'AI engineer at AristAI; IC2S2 2026 paper on computational social science; UIUC MS Data Science; bilingual EN/中文. I build AI products and study how they land across cultures.',
  openGraph: {
    title: 'Aojie Ju',
    description: 'I build AI products and study how they land across cultures.',
    type: 'profile',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  )
}
