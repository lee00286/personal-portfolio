'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import getContentfulPage from '@/contentful/contentfulApi';
import { ContentfulPage } from '@/contentful/types';
import { contentfulPage } from '@/contentful/initial';
import { useMenuContext } from '@/context/menuState';

interface IPageContext {
  pageData: ContentfulPage;
}

const initialState: IPageContext = {
  pageData: contentfulPage
};

export const PageContext = createContext(initialState);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const { currentPage } = useMenuContext();

  const [isFetching, setisFetching] = useState(true);
  const [pageData, setPageData] = useState(contentfulPage);

  useEffect(() => {
    if (!isFetching) return;

    let slug: string = 'profile';
    if (currentPage === 0) slug = 'profile';
    else if (currentPage === 1) slug = 'education';
    else if (currentPage === 2) slug = 'professionalExperiences';
    else if (currentPage === 3) slug = 'otherExperiences';
    else if (currentPage === 4) slug = 'extracurricularActivities';
    else if (currentPage === 5) slug = 'awardsAndCertification';

    getContentfulPage(slug).then((result) => {
      setPageData(result);
      setisFetching(false);
    });
  }, [isFetching, currentPage]);

  return (
    <PageContext.Provider value={{ pageData }}>{children}</PageContext.Provider>
  );
}

export function usePageContext() {
  return useContext(PageContext);
}
