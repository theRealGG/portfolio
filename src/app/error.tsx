'use client';

import ErrorTemplate from './error-template';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <ErrorTemplate
      subtitle="Error"
      title="A unkown error occured"
      description="A unkown error occured. I'm sorry for the inconvience"
      goHome="Go back home"
      reset={reset}
    />
  );
}
