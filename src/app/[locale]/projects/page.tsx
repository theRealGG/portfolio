import { Container } from '@/components/ui';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function Work({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <Container> Projects works</Container>;
}
