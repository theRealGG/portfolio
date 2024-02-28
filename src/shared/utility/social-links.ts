import { SocialLinks } from '@/shared/models';
import { Icons } from '../../components/ui/icon';

export const socialLinks = [
  {
    key: 'linkedin',
    href: '/',
    name: 'socialLinks.linkedin.name',
    description: 'socialLinks.linkedin.description',
    icon: Icons.social.linkedin,
  },
  {
    key: 'github',
    href: '/',
    name: 'socialLinks.github.name',
    description: 'socialLinks.github.description',
    icon: Icons.social.github,
  },
  {
    key: 'twitter',
    href: '/',
    name: 'socialLinks.twitter.name',
    description: 'socialLinks.twitter.description',
    icon: Icons.social.twitter,
  },
  {
    key: 'facebook',
    href: '/',
    name: 'socialLinks.facebook.name',
    description: 'socialLinks.facebook.description',
    icon: Icons.social.facebook,
  },

  {
    key: 'instagram',
    href: '/',
    name: 'socialLinks.instagram.name',
    description: 'socialLinks.instagram.description',
    icon: Icons.social.instagram,
  },
] as SocialLinks;
