import { Routes } from '@/shared/models';
import { mergeClasses } from '@/shared/utility';
import { ComponentPropsWithoutRef } from 'react';
import { NavbarLink } from './link';
import SlideOver from './slide-over';

type NavbarProps = { routes: Routes } & ComponentPropsWithoutRef<'nav'>;

export function Navbar({ routes, className, children, ...props }: NavbarProps) {
  return (
    <nav className={mergeClasses(className, 'flex items-center justify-center')} {...props}>
      {routes.map((route) => (
        <NavbarLink key={route.key} href={route.href}>
          <route.icon className="size-6" />
          {route.name}
        </NavbarLink>
      ))}
    </nav>
  );
}

export function VerticalNavbar({ routes, className, children, ...props }: NavbarProps) {
  return (
    <SlideOver>
      <ul className="flex flex-col gap-y-8 ">
        {routes.map((route) => (
          <NavbarLink className="inline-flex items-center gap-x-2 p-4 text-lg" key={route.key} href={route.href}>
            <route.icon className="size-6" />
            {route.name}
          </NavbarLink>
        ))}
      </ul>
    </SlideOver>
  );
}
