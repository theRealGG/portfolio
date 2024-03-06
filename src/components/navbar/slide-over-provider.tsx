/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { PropsWithChildren, useState } from 'react';
import { SlideOverContext } from './slide-over.provider';

export function SlideOverProvider({ children }: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);
  return <SlideOverContext.Provider value={{ open, setOpen }}>{children}</SlideOverContext.Provider>;
}
