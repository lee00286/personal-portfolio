'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import getContentfulPage from '@/contentful/getContentfulPage';
import { ContentfulPage } from '@/contentful/types';
import { contentfulPageInitial } from '@/contentful/initial';

interface IPageContext {
  pageData: ContentfulPage;
}

const initialState: IPageContext = {
  pageData: contentfulPageInitial
};

export const PageContext = createContext(initialState);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [isFetching, setisFetching] = useState(true);
  const [pageData, setPageData] = useState(contentfulPageInitial);
  const [page, setPage] = useState(
    pathname && pathname.length > 0 ? pathname.slice(1) : ''
  );

  useEffect(() => {
    const slug: string =
      pathname && pathname.length > 0 ? pathname.slice(1) : '';

    if (slug === page && !isFetching) return;
    setisFetching(true);

    getContentfulPage(slug).then((result) => {
      setPageData(result);
      setPage(slug);
      setisFetching(false);
    });
  }, [isFetching, pathname]);

  return (
    <PageContext.Provider value={{ pageData }}>{children}</PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
