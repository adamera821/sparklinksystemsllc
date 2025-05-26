import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sparklinksystemsllc-rijdu5kc1-adamera821s-projects.vercel.app'
  
  // Add all your static routes here
  const routes = [
    '',
    '/about',
    '/contact',
    '/employers',
    '/industries',
    '/job-seekers',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
