'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const isExcludedPage = pathname === '/study-in-philippines';

  if (isExcludedPage) {
    return null;
  }

  return <Footer />;
}