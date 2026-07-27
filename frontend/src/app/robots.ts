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
          '/dashboard/',
          '/api',
          '/api/backend',
          '/application',
          '/login',
          '/signup',
        ],
      },
    ],
    sitemap: 'https://chartersunion.com/sitemap.xml',
  }
}