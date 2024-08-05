import { MetadataRoute } from 'next';
import { LINKS, WEBSITE } from './_shared/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return LINKS.filter(({ isAvailable }) => isAvailable).map(
    ({ href, changeFrequency, priority }) => ({
      url: `${WEBSITE}${href}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );
}
