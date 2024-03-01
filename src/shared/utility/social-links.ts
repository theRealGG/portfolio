import { SocialLinks } from '@/shared/models';
import { Icons } from '../../components/ui/icon';

export const socialLinks = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/username',
    name: 'socialLinks.linkedin.name',
    description: 'socialLinks.linkedin.description',
    icon: Icons.social.linkedin,
  },
  {
    key: 'github',
    href: 'https://www.github.com/username',
    name: 'socialLinks.github.name',
    description: 'socialLinks.github.description',
    icon: Icons.social.github,
  },
  {
    key: 'twitter',
    href: 'https://www.twitter.com/username',
    name: 'socialLinks.twitter.name',
    description: 'socialLinks.twitter.description',
    icon: Icons.social.twitter,
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/username',
    name: 'socialLinks.facebook.name',
    description: 'socialLinks.facebook.description',
    icon: Icons.social.facebook,
  },

  {
    key: 'instagram',
    href: 'https://www.instagram.com/username',
    name: 'socialLinks.instagram.name',
    description: 'socialLinks.instagram.description',
    icon: Icons.social.instagram,
  },
] as SocialLinks;
