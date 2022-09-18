import { FC, PropsWithChildren } from 'react';
import { IStyleableComponent } from '../../../utility/styleableComponent';

type ContainerProps = PropsWithChildren & IStyleableComponent;

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  const containerClasses = 'container mx-auto';
  return (
    <div
      data-testid='fixed-container'
      className={`${containerClasses} ${typeof className === 'string' ? className : className?.join(' ')} `}
    >
      {children}
    </div>
  );
};

export default Container;
