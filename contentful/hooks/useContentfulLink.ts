'use client';

import { useEffect, useState } from 'react';
import getContentfulEntry from './getContentfulEntry';

const useContentfulLink = (linkId: string) => {
  const [linkData, setLinkData]: any = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!linkId) return;
    if (!isFetching) return;
    getContentfulEntry(linkId).then((result) => {
      if (result !== null) setLinkData(result);
      setIsFetching(false);
    });
  }, [linkId, isFetching]);

  return linkData;
};

export default useContentfulLink;
