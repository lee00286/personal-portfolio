'use client';

import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { DeployProvider } from '@/context/deployContext';
import { PageProvider } from '@/context/pageState';
import theme from '@/theme/theme';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={theme.config}>
        <DeployProvider>
          <PageProvider>{children}</PageProvider>
        </DeployProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default Providers;
