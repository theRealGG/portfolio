import { Routes } from '@/shared/models';
import { ComponentPropsWithoutRef } from 'react';

export type NavbarProps = { routes: Routes } & ComponentPropsWithoutRef<'nav'>;
