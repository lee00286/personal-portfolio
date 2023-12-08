import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { PageProvider } from '@/context/pageState';
import SidebarWithHeader from '@/components/SidebarWithHeader';

export const styles =
  'min-h-screen flex justify-center items-center md:p-16 md:p-0 font-mono bg-yellow-50 select-none';

function PageMain({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <PageProvider>
        <main className={styles}>
          <SidebarWithHeader>{children}</SidebarWithHeader>
        </main>
      </PageProvider>
    </ChakraProvider>
  );
}

export default PageMain;
