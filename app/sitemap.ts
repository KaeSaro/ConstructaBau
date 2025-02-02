import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // dynamically retrieve base url from request and generate sitemap
  const headersList = await headers();
  const protocol = headersList.get('x-forwarded-proto') || 'https'; 
  const host = headersList.get('host');
    const baseUrl = `${protocol}://${host}`

  return [
    {
      url: `${baseUrl}`,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/leistungen`,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/impressionen`,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/team`,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/kontakt`,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/impressum`,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/datenschutz`,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/news`,
      changeFrequency: 'daily',
    },
  ];
}
