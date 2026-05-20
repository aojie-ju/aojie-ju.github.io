import type { MetadataRoute } from 'next'

const siteUrl = 'https://aojie-ju.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
