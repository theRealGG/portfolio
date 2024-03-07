import { CompactFooter } from '@/components/core/footer';
import { Icons } from '@/components/ui';
import { Routes, SocialLinks } from '@/shared/models';
import NotFoundTemplate from './not-found-template';

// due to a limitation in the build system this export is required
export const dynamic = 'force-dynamic';

const routes = [
  {
    key: 'home',
    href: '/',
    name: 'Home',
    description: 'General information about Hisham Görner"',
    icon: Icons.routes.home,
  },
  {
    key: 'about',
    href: '/about',
    name: 'About',
    description: 'Detailed information about Hisham Görner',
    icon: Icons.routes.about,
  },
  {
    key: 'blog',
    href: '/blog',
    name: 'Blog',
    description: 'Get my latest article',
    icon: Icons.routes.blog,
  },
  {
    key: 'faq',
    href: '/faq',
    name: 'Faq',
    description: 'Frequently asket question',
    icon: Icons.routes.faq,
  },
  {
    key: 'contact',
    href: '/contact',
    name: 'Contact',
    description: 'Get in contact with me',
    icon: Icons.routes.contact,
  },
] as Routes;

const socialLinks = [
  {
    key: 'linkedin',
    href: '/',
    name: 'Linkedin',
    description: 'My Linkedin profile',
    icon: Icons.social.linkedin,
  },
  {
    key: 'github',
    href: '/',
    name: 'Github',
    description: 'My Github profile',
    icon: Icons.social.github,
  },
  {
    key: 'twitter',
    href: '/',
    name: 'Twitter',
    description: 'My X (formerly Twitter) profile',
    icon: Icons.social.twitter,
  },
  {
    key: 'instagram',
    href: '/',
    name: 'instagram',
    description: 'My Instagram profile',
    icon: Icons.social.instagram,
  },
] as SocialLinks;

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <NotFoundTemplate
          title="This page does not exist"
          description="Sorry, we couldn't find the page you're looking for"
          routes={routes}
          homeButtonText="Go back home"
          pagesHeadline="Show my pages"
        />
        <CompactFooter links={socialLinks} />
      </body>
    </html>
  );
}
