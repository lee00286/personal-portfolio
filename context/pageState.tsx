'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import getContentfulPage from '@/contentful/getContentfulPage';
import { ContentfulPage } from '@/contentful/types';
import { contentfulPageInitial } from '@/contentful/initial';
import { useMenuContext } from '@/context/menuState';

interface IPageContext {
  pageData: ContentfulPage;
}

const initialState: IPageContext = {
  pageData: contentfulPageInitial
};

export const PageContext = createContext(initialState);

export function PageProvider({ children }: { children: React.ReactNode }) {
  const { currentPage } = useMenuContext();

  const [isFetching, setisFetching] = useState(true);
  const [pageData, setPageData] = useState(contentfulPageInitial);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if (currentPage === page && !isFetching) return;
    setisFetching(true);

    let slug: string = 'profile';
    if (currentPage === 0) slug = 'profile';
    else if (currentPage === 1) slug = 'education';
    else if (currentPage === 2) slug = 'professionalExperiences';
    else if (currentPage === 3) slug = 'otherExperiences';
    else if (currentPage === 4) slug = 'extracurricularActivities';
    else if (currentPage === 5) slug = 'awardsAndCertification';

    getContentfulPage(slug).then((result) => {
      setPageData(result);
      setPage(currentPage);
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
