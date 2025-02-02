import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // dynamically retrieve base url from request and generate sitemap
  const headersList = await headers();
  const host = headersList.get('host');

  return [
    {
      url: host,
      changeFrequency: 'weekly',
    },
    {
      url: host + '/leistungen',
      changeFrequency: 'weekly',
    },
    {
      url: host + '/impressionen',
      changeFrequency: 'daily',
    },
    {
      url: host + '/team',
      changeFrequency: 'weekly',
    },
    {
      url: host + '/kontakt',
      changeFrequency: 'weekly',
    },
    {
      url: host + '/impressum',
      changeFrequency: 'weekly',
    },
    {
      url: host + '/datenschutz',
      changeFrequency: 'weekly',
    },
    {
      url: host + '/news',
      changeFrequency: 'daily',
    },
  ];
}
