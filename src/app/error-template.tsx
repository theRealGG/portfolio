import { Container, Headline, Text } from '@/components/ui';
import { Link } from '@/navigation';

type ErrorTemplateProps = {
  subtitle: string;
  title: string;
  description: string;
  goHome: string;
};

export default function ErrorTemplate({ subtitle, title, description, goHome }: ErrorTemplateProps) {
  return (
    <Container className="flex w-full flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <Text intent="text" className="font-semibold text-zomp">
        {subtitle}
      </Text>
      <Headline intent="primary" text="standard" className="mt-4 sm:text-5xl">
        {title}
      </Headline>
      <Text intent="text" text="secondary" className="mt-6">
        {description}
      </Text>
      <div className="mt-10">
        <Link href="/" className="inline-flex text-sm font-semibold leading-7 text-zomp">
          {goHome}
        </Link>
      </div>
    </Container>
  );
}
