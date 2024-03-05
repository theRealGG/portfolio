import { ComponentPropsWithoutRef } from 'react';
import {
  HiBars3,
  HiBriefcase,
  HiChatBubbleLeft,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiComputerDesktop,
  HiHome,
  HiNewspaper,
  HiQuestionMarkCircle,
  HiXMark,
} from 'react-icons/hi2';
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri';

export const Icons = {
  action: {
    burger: (props: ComponentPropsWithoutRef<typeof HiChevronRight>) => <HiBars3 {...props} />,
    close: (props: ComponentPropsWithoutRef<typeof HiXMark>) => <HiXMark {...props} />,
  },
  navigation: {
    right: (props: ComponentPropsWithoutRef<typeof HiChevronRight>) => <HiChevronRight {...props} />,
    burger: (props: ComponentPropsWithoutRef<typeof HiChevronRight>) => <HiBars3 {...props} />,
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
