import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sparklinksystemsllc-rijdu5kc1-adamera821s-projects.vercel.app/sitemap.xml',
  }
}
