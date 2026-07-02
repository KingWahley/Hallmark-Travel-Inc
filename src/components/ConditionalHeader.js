'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isExcludedPage = pathname === '/study-in-philippines';

  if (isExcludedPage) {
    return null;
  }

  return <Header />;
}