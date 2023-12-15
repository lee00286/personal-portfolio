'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import getContentfulPage from '@/contentful/getContentfulPage';
import { ContentfulPage } from '@/contentful/types';
import { contentfulPageInitial } from '@/contentful/initial';
import { pathnameToSlug } from '@/utils/pageUtils';

interface IPageContext {
  [key: string]: ContentfulPage;
}

const initialState: IPageContext = {
  pageData: contentfulPageInitial
};

export const PageContext = createContext(initialState);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [isFetching, setisFetching] = useState(true);
  const [pageData, setPageData]: any = useState(null);
  const [currPageData, setCurrPageData]: any = useState(null);
  const [page, setPage] = useState(pathnameToSlug(pathname, true));

  useEffect(() => {
    const slug: string = pathnameToSlug(pathname, true);

    if (slug === page && !isFetching) return;
    setisFetching(true);

    if (pageData && pageData[slug]) {
      setCurrPageData(pageData[slug]);
      setPage(slug);
      setisFetching(false);
    } else {
      getContentfulPage(slug).then((result) => {
        setPageData({ [slug]: result, ...pageData });
        setCurrPageData(result);
        setPage(slug);
        setisFetching(false);
      });
    }
  }, [isFetching, pathname]);

  return (
    <PageContext.Provider value={{ pageData: currPageData }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
