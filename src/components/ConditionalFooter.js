'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  const excludedPages = ['/study-in-philippines', '/diy-guide'];
  const isExcludedPage = excludedPages.includes(pathname);

  if (isExcludedPage) {
    return null;
  }

  return <Footer />;
}