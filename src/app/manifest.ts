import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: 'Hisham Görner - Portfolio',
    short_name: 'Hisham Görner',
    description: 'Personal portfolio page of Hisham Görner',
    start_url: '/',
    shortcuts: [
      {
        name: 'About',
        url: '/about',
        description: 'Some informations about Hisham Görner',
      },
      {
        name: 'Projects',
        url: '/projects',
        description: 'A curated of cool projecs Hisham Görner worked on',
      },
      {
        name: 'Contact',
        url: '/contact',
        description: 'Get in contact with Hisham Görner',
      },
    ],
    theme_color: '#F9FAFB',
  };
}
