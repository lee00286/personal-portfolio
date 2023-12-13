'use client';

import React from 'react';
import { ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import { DeployProvider } from '@/context/deployContext';
import { PageProvider } from '@/context/pageState';
import SidebarWithHeader from '@/components/SidebarWithHeader';

function PageMain({ children }: { children: React.ReactNode }) {
  const bgColor = useColorModeValue('yellow.50', 'gray.900');

  const styles = `min-h-screen flex justify-center items-center md:p-16 md:p-0 font-mono ${bgColor} select-none`;

  return (
    <ChakraProvider>
      <DeployProvider>
        <PageProvider>
          <main className={styles}>
            <SidebarWithHeader>{children}</SidebarWithHeader>
          </main>
        </PageProvider>
      </DeployProvider>
    </ChakraProvider>
  );
}

export default PageMain;
