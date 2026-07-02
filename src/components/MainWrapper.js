'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname && pathname.startsWith('/dashboard');
  const isStudyPhilippines = pathname === '/study-in-philippines';

  return (
    <main className={`flex-grow ${isDashboard || isStudyPhilippines ? '' : 'pt-[73px] md:pt-[85px]'}`}>
      {children}
    </main>
  );
}
