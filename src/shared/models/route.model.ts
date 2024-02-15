import { LinkModel } from './link.model';
import { pathnames } from '@/config';

export type Route = LinkModel<keyof typeof pathnames>;
export type Routes = Array<Route>;
