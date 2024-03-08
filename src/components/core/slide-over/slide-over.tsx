/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { Fragment, PropsWithChildren } from 'react';
import { Button, Icons } from '../../ui';
import Header from './header';
import Panel from './panel';
import { useSlideOverContext } from './provider';
import Root from './root';

function SlideOverComponent({ children }: PropsWithChildren<{}>) {
  const { open, setOpen } = useSlideOverContext();
  const t = useTranslations('header');
  return (
    <>
      <Button
        intent="ghost"
        className="bg-seasalt shadow-none ring-0  active:ring-2 lg:hidden"
        size="lg"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">{t('open')}</span>
        <Icons.action.burger className="size-6" />
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => setOpen(false)}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">{children}</Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export const SlideOver = Object.assign(SlideOverComponent, { Root, Header, Panel });
