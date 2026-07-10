import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/dashboard',
          '/api',
          '/application',
          '/login',
          '/signup',
        ],
      },
    ],
    sitemap: 'https://chartersbusiness.com/sitemap.xml',
  }
}