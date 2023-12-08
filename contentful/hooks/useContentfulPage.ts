'use client';

import { useEffect, useState } from 'react';
import { convertEntryToContentfulPage } from '@/contentful/utils';
import getContentfulEntry from './getContentfulEntry';

const useContentfulPage = (pageId: string) => {
  const [pageData, setPageData]: any = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!pageId) return;
    if (!isFetching) return;
    getContentfulEntry(pageId).then((result) => {
      const contentfulResult = convertEntryToContentfulPage(result);
      if (contentfulResult !== null) setPageData(contentfulResult);
      setIsFetching(false);
    });
  }, [pageId, isFetching]);

  return pageData;
};

export default useContentfulPage;
