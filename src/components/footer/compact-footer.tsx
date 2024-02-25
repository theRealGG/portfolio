import { SocialLinks } from '@/shared/models';
import { Container, Text } from '../ui';

export function CompactFooter({ links }: { links: SocialLinks }) {
  return (
    <footer className="border-t border-gray-100 py-6 sm:py-10">
      <Container className="flex flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
        <Text intent="note" text="secondary" className="leading-7">
          &copy; Hisham Görner
        </Text>
        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-charcoal" />
        <div className="flex gap-x-4">
          {links.map((item) => (
            <Text as="a" intent="text" text="secondary" className="hover:text-zomp" href={item.href} key={item.key}>
              <span className="sr-only">{item.name}</span>
              <item.icon className="size-6" aria-hidden="true" />
            </Text>
          ))}
        </div>
      </Container>
    </footer>
  );
}
