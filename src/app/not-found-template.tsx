import { Container, Headline, Icons, Text } from '@/components/ui';
import { Link } from '@/navigation';
import { Routes } from '@/shared/models';
import Image from 'next/image';

type NotFoundTemplateProps = {
  title: string;
  description: string;
  pagesHeadline: string;
  routes: Routes;
  homeButtonText: string;
};

export default function NotFoundTemplate({
  routes,
  pagesHeadline,
  title,
  description,
  homeButtonText,
}: NotFoundTemplateProps) {
  return (
    <Container className="w-full px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <Image
        src="/no-clue.png"
        width={128}
        height={128}
        alt="Hisham Görner - Ups"
        className="rounded-full mx-auto shadow-md"
      />
      <header className="mx-auto mt-16 max-w-2xl text-center sm:mt-24">
        <Text intent="text" className="font-semibold leading-8 text-zomp">
          404
        </Text>
        <Headline as="h1" intent="primary" text="standard" className="mt-4">
          {title}
        </Headline>
        <Text intent="text" text="secondary" className="mt-4 sm:mt-6">
          {description}
        </Text>
      </header>
      <section className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">{pagesHeadline}</h2>
        <ul className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
          {routes.map((link) => (
            <li key={link.key} className="relative flex gap-x-6 py-6">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                <link.icon className="h-6 w-6 text-zomp" aria-hidden="true" />
              </div>
              <div className="flex-auto">
                <Headline text="secondary" intent="card">
                  <Link href={link.href}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {link.name}
                  </Link>
                </Headline>
                <Text className="mt-2" intent="note" text="secondary">
                  {link.description}
                </Text>
              </div>
              <div className="flex-none self-center">
                <Icons.navigation.right className="h-5 w-5 text-charcoal" aria-hidden />
              </div>
            </li>
          ))}
        </ul>
        <footer className="mt-10 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-indigo-600">
            <Icons.navigation.left className="h5 w-5 font-semibold text-charcoal" aria-hidden />
            {homeButtonText}
          </Link>
        </footer>
      </section>
    </Container>
  );
}
