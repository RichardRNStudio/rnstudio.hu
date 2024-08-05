import { MetadataRoute } from 'next';
import { WEBSITE } from './_shared/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${WEBSITE}/sitemap.xml`,
  };
}
