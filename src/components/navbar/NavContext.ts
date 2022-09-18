import { createContext } from 'react';

export interface NavbarContextState {
  setState(state: boolean): void;
}

export default createContext<NavbarContextState | null>(null);
