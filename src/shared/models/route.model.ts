import { pathnames } from '@/config';
import { LinkModel } from './link.model';

export type Route = LinkModel<keyof typeof pathnames>;
export type Routes = Array<Route>;
