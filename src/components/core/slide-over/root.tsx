/* eslint-disable react/jsx-no-constructed-context-values */
import { PropsWithChildren, useState } from 'react';
import { SlideOverContext } from './provider';

export default function Root({ children }: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);
  return <SlideOverContext.Provider value={{ open, setOpen }}>{children}</SlideOverContext.Provider>;
}
