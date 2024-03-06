/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Fragment, PropsWithChildren } from 'react';
import { Button, Headline, Icons, Text } from '../ui';
import { useSlideOverContext } from './slide-over.provider';

function Header() {
  return (
    <Dialog.Title as="div" className="flex flex-col items-center justify-center self-center">
      <Headline as="h3" text="primary" intent="primary">
        Hisham Görner
      </Headline>
      <Text as="span" className="mt-2 block" intent="note" text="secondary">
        Fullstack Developer
      </Text>
      <Image src="/hisham.png" className="mt-4 rounded-full" width={128} height={128} alt="Hisham" />
    </Dialog.Title>
  );
}

function Panel({ children }: PropsWithChildren<{}>) {
  const t = useTranslations('header');
  const { setOpen } = useSlideOverContext();
  return (
    <div className="relative flex h-full flex-col overflow-y-scroll bg-seasalt/60 py-6 shadow-xl backdrop-blur-md">
      <div className="px-4 sm:px-6">
        <div className="flex justify-center">
          <Header />
          <div className="absolute right-4 top-4 ml-3 flex h-7 items-center">
            <Button
              type="button"
              className="bg-seasalt/60 shadow-none ring-0  backdrop-blur-md active:ring-2"
              onClick={() => setOpen(false)}
            >
              <span className="absolute -inset-2.5" />
              <span className="sr-only">{t('close')}</span>
              <Icons.action.close className="size-6" />
            </Button>
          </div>
        </div>
      </div>
      <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
    </div>
  );
}

export default function SlideOver({ children }: PropsWithChildren<{}>) {
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
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <Panel>{children}</Panel>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
