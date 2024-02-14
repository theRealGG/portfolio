import { ReactNode } from 'react';
import '@/style/style.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
