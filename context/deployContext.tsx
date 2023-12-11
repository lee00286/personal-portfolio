'use client';

import React, { createContext, useContext } from 'react';
import { prefix } from '@/config/config';

interface IDeployContext {
  prefix: string;
}

const initialState: IDeployContext = {
  prefix: ''
};

export const DeployContext = createContext(initialState);

export function DeployProvider({ children }: { children: React.ReactNode }) {
  return (
    <DeployContext.Provider value={{ prefix }}>
      {children}
    </DeployContext.Provider>
  );
}

export function useDeployContext() {
  return useContext(DeployContext);
}
