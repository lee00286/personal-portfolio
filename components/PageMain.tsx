import React from 'react';
import SidebarWithHeader from '@/components/SidebarWithHeader';

function PageMain({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <SidebarWithHeader>{children}</SidebarWithHeader>
    </main>
  );
}

export default PageMain;
