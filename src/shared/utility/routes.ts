import { Routes } from '@/shared/models';
import { Icons } from '@/components/ui/icon';

export const routes = [
  {
    key: 'home',
    href: '/',
    name: 'routes.home.name',
    description: 'routes.home.description',
    icon: Icons.routes.home,
  },
  {
    key: 'about',
    href: '/about',
    name: 'routes.about.name',
    description: 'routes.about.description',
    icon: Icons.routes.about,
  },
  {
    key: 'projects',
    href: '/projects',
    name: 'routes.projects.name',
    description: 'routes.projects.description',
    icon: Icons.routes.projects,
  },
  {
    key: 'blog',
    href: '/blog',
    name: 'routes.blog.name',
    description: 'routes.blog.description',
    icon: Icons.routes.blog,
  },
  {
    key: 'faq',
    href: '/faq',
    name: 'routes.faq.name',
    description: 'routes.faq.description',
    icon: Icons.routes.faq,
  },
  {
    key: 'contact',
    href: '/contact',
    name: 'routes.contact.name',
    description: 'routes.contact.description',
    icon: Icons.routes.contact,
  },
] as Routes;
