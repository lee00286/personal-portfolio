'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DeployProvider } from '@/context/deployContext';
import { PageProvider } from '@/context/pageState';
import SidebarWithHeader from '@/components/SidebarWithHeader';
import theme from '@/theme/theme';

function PageMain({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <DeployProvider>
        <PageProvider>
          <main>
            <SidebarWithHeader>{children}</SidebarWithHeader>
          </main>
        </PageProvider>
      </DeployProvider>
    </ChakraProvider>
  );
}

export default PageMain;
