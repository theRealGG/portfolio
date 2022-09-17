import { ReactElement } from 'react';

export interface IRestrictedChildren<T> {
  children: ReactElement<T> | Array<ReactElement<T>>;
}
