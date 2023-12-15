'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DeployProvider } from '@/context/deployContext';
import { PageProvider } from '@/context/pageState';
import theme from '@/theme/theme';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <DeployProvider>
        <PageProvider>{children}</PageProvider>
      </DeployProvider>
    </ChakraProvider>
  );
}

export default Providers;
