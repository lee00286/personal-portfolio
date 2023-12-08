'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Center, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { contentfulPageInitial } from '@/contentful/initial';
import getContentfulEntry from '@/contentful/getContentfulEntry';
import { convertEntryToContentfulPage } from '@/contentful/utils';
import { LinkIcon } from '@heroicons/react/24/outline';

function LinkToPage({ pageId }: { pageId: string }) {
  const pathname = usePathname();
  const borderColor = useColorModeValue('gray.200', 'gray.500');
  const hoverBgColor = useColorModeValue('gray.200', 'gray.500');

  const [pageData, setPageData] = useState(contentfulPageInitial);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (!pageId) return;
    if (!isFetching) return;
    getContentfulEntry(pageId).then((result) => {
      const contentfulResult = convertEntryToContentfulPage(result);
      if (contentfulResult !== null) setPageData(contentfulResult);
      console.log(contentfulResult);
      setIsFetching(false);
    });
  }, [pageId, isFetching]);

  return isFetching || pageData.slug === '' ? (
    <div></div>
  ) : (
    <Link
      href={`${pathname}/${pageData.slug}`}
      mt="4"
      display="flex"
      justifyContent="flex-start"
      alignContent="center"
      border="1px"
      borderRadius="lg"
      borderColor={borderColor}
      p="4"
      w="full"
      _hover={{ background: hoverBgColor }}
    >
      <Center mr="2" width="4">
        <LinkIcon />
      </Center>
      <Text>{pageData.title}</Text>
    </Link>
  );
}

export default LinkToPage;
