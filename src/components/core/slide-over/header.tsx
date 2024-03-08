'use client';

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { Headline, Text } from '../../ui';

export default function Header() {
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
