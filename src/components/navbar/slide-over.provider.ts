import { createContext, useContext } from 'react';

export type SlideOverContent = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const SlideOverContext = createContext<SlideOverContent>({ open: false, setOpen: () => {} });

export const useSlideOverContext = () => useContext(SlideOverContext);
