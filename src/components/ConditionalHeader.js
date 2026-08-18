'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  const excludedPages = ['/study-in-philippines', '/diy-guide'];
  const isExcludedPage = excludedPages.includes(pathname);

  if (isExcludedPage) {
    return null;
  }

  return <Header />;
}