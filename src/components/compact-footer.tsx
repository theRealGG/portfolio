import { SocialLinks } from '@/shared/models';

export default function Footer({ links }: { links: SocialLinks }) {
  return (
    <footer className="border-t border-gray-100 py-6 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
        <p className="text-sm leading-7 text-gray-400">&copy; Your Company, Inc. All rights reserved.</p>
        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200" />
        <div className="flex gap-x-4">
          {links.map((item) => (
            <a key={item.key} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
