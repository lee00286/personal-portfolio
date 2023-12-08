'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import getContentfulPage from '@/contentful/getContentfulPage';
import { ContentfulPage } from '@/contentful/types';
import { contentfulPageInitial } from '@/contentful/initial';
import { pathnameToSlug } from '@/utils/pageUtils';

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
  const [page, setPage] = useState(pathnameToSlug(pathname, true));

  useEffect(() => {
    const slug: string = pathnameToSlug(pathname, true);

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
