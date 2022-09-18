import { FC, PropsWithChildren } from 'react';
import Container from '../container/Container';

interface ISectionProps extends PropsWithChildren {
  id: string;
}

const Section: FC<ISectionProps> = ({ children, id }) => {
  return (
    <section data-testid='section' id={id} className='grid pt-header-spacing pb-[1rem] px-0'>
      <Container className='grid gap-[1.25rem]'>{children}</Container>
    </section>
  );
};

export default Section;
