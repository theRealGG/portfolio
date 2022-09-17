import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

import type { PreloadedState } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../plugins/redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>;
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
};

function mockFunction<T extends (...args: any[]) => any>(fn: T): jest.MockedFunction<T> {
  return fn as jest.MockedFunction<T>;
}

export default mockFunction;
