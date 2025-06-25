import { env } from '@/env';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  // Liste des pages publiques
  const routes = ['', '/about'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8
  }));

  // Log pour debug
  console.log('Sitemap URL:', `${baseUrl}/sitemap.xml`);
  console.log('Sitemap entries:', JSON.stringify(routes, null, 2));

  return routes;
}
