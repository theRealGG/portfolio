import {
  HiHome,
  HiBriefcase,
  HiNewspaper,
  HiQuestionMarkCircle,
  HiChatBubbleLeft,
  HiChevronUp,
  HiChevronDown,
  HiComputerDesktop,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi2';
import { RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterXFill, RiFacebookFill } from 'react-icons/ri';
import { ComponentPropsWithoutRef } from 'react';

export const Icons = {
  navigation: {
    right: (props: ComponentPropsWithoutRef<typeof HiChevronRight>) => <HiChevronRight {...props} />,

    left: (props: ComponentPropsWithoutRef<typeof HiChevronLeft>) => <HiChevronLeft {...props} />,
    up: ({ className, ...props }: ComponentPropsWithoutRef<typeof HiChevronUp>) => <HiChevronUp {...props} />,
    down: (props: ComponentPropsWithoutRef<typeof HiChevronDown>) => <HiChevronDown {...props} />,
  },
  social: {
    twitter: (props: ComponentPropsWithoutRef<typeof RiTwitterXFill>) => <RiTwitterXFill {...props} />,
    linkedin: (props: ComponentPropsWithoutRef<typeof RiLinkedinFill>) => <RiLinkedinFill {...props} />,
    instagram: (props: ComponentPropsWithoutRef<typeof RiInstagramFill>) => <RiInstagramFill {...props} />,
    github: (props: ComponentPropsWithoutRef<typeof RiGithubFill>) => <RiGithubFill {...props} />,
    facebook: (props: ComponentPropsWithoutRef<typeof RiFacebookFill>) => <RiFacebookFill {...props} />,
  },
  routes: {
    home: (props: ComponentPropsWithoutRef<typeof HiHome>) => <HiHome {...props} />,
    about: (props: ComponentPropsWithoutRef<typeof HiBriefcase>) => <HiBriefcase {...props} />,
    blog: (props: ComponentPropsWithoutRef<typeof HiNewspaper>) => <HiNewspaper {...props} />,
    faq: (props: ComponentPropsWithoutRef<typeof HiQuestionMarkCircle>) => <HiQuestionMarkCircle {...props} />,
    contact: (props: ComponentPropsWithoutRef<typeof HiChatBubbleLeft>) => <HiChatBubbleLeft {...props} />,
    projects: (props: ComponentPropsWithoutRef<typeof HiComputerDesktop>) => <HiComputerDesktop {...props} />,
  },
};
