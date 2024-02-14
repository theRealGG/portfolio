import clsx from 'clsx';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export function mergeClasses(...classes: ClassNameValue[]) {
  return twMerge(clsx(classes));
}
