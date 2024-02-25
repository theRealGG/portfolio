import { Container, Headline } from '@/components/ui';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <Container>
      <Headline as="h1">Home works</Headline>
    </Container>
  );
}
