'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface IMenuContext {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const initialState: IMenuContext = {
  currentPage: 0,
  setCurrentPage: () => {}
};

export const MenuContext = createContext(initialState);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <MenuContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
