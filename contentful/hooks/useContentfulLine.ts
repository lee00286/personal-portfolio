'use client';

import { useEffect, useState } from 'react';
import { convertEntryToContentfulLine } from '@/contentful/utils';
import getContentfulEntry from './getContentfulEntry';

const useContentfulLine = (lineId: string) => {
  const [lineData, setLineData]: any = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!lineId) return;
    if (!isFetching) return;
    getContentfulEntry(lineId).then((result) => {
      const contentfulResult = convertEntryToContentfulLine(result);
      if (contentfulResult !== null) setLineData(contentfulResult);
      setIsFetching(false);
    });
  }, [lineId, isFetching]);

  return lineData;
};

export default useContentfulLine;
