import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Richárd Nagy - Javascript Engineer',
    short_name: 'Richárd Nagy',
    description: "I'm Richárd Nagy, a Javascript Engineer based in Hungary.",
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
