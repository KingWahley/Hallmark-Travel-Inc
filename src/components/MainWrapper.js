'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname && pathname.startsWith('/dashboard');
  const excludedRoutes = ['/study-in-philippines', '/diy-guide'];
  const isExcludedFromPadding = excludedRoutes.includes(pathname);

  return (
    <main className={`flex-grow ${isDashboard || isExcludedFromPadding ? '' : 'pt-[73px] md:pt-[85px]'}`}>
      {children}
    </main>
  );
}
