'use client';

import React from 'react';
import {
  Box,
  Center,
  Image,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import useContentfulLink from '@/contentful/hooks/useContentfulLink';
import { LinkIcon } from '@heroicons/react/24/outline';

function Asset({ assetId }: { assetId: string }) {
  const linkData = useContentfulLink(assetId);

  const borderColor = useColorModeValue('gray.50', 'gray.300');
  const hoverBgColor = useColorModeValue('gray.50', 'gray.300');

  if (!assetId) return <Box></Box>;
  if (
    !linkData?.extension ||
    !linkData?.alt ||
    !linkData?.media?.fields?.file?.url
  )
    return <Box></Box>;

  const assetUrl = `https:${linkData.media.fields.file.url}`;

  if (['pdf', 'PDF'].includes(linkData.extension)) {
    return (
      <Link
        href={assetUrl}
        display="flex"
        justifyContent="flex-start"
        alignContent="center"
        border="1px"
        borderRadius="lg"
        borderColor={borderColor}
        p="4"
        _hover={{ background: hoverBgColor }}
        isExternal
      >
        <Center mr="2" width="4">
          <LinkIcon />
        </Center>
        <Text>{linkData.alt}</Text>
      </Link>
    );
  }

  return <Image src={assetUrl} alt={linkData.alt} />;
}

export default Asset;
