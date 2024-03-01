import { RenderOptions, render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren, ReactElement } from 'react';

function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
  return <NextIntlClientProvider locale="en">{children}</NextIntlClientProvider>;
}

export default function renderWithProviders(ui: ReactElement, { ...renderOptions }: RenderOptions = {}) {
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
