'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Box, Center, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { LinkIcon } from '@heroicons/react/24/outline';
import useContentfulPage from '@/contentful/hooks/useContentfulPage';

function LinkToPage({ pageId }: { pageId: string }) {
  const pathname = usePathname();
  const pageData = useContentfulPage(pageId);
  const assetColor = useColorModeValue('assetBg.light', 'assetBg.dark');

  return pageData ? (
    <Link
      href={`${pathname}/${pageData.slug}`}
      mt="4"
      display="flex"
      justifyContent="flex-start"
      alignContent="center"
      border="1px"
      borderRadius="lg"
      borderColor={assetColor}
      p="4"
      w="full"
      _hover={{ background: assetColor }}
    >
      <Center mr="2" width="4">
        <LinkIcon />
      </Center>
      <Text>{pageData.title}</Text>
    </Link>
  ) : (
    <Box></Box>
  );
}

export default LinkToPage;
