'use client';

import React from 'react';
import { Center, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import SpinnerBox from '@/components/CustomBox/SpinnerBox';
import useContentfulLink from '@/contentful/hooks/useContentfulLink';
import { LinkIcon } from '@heroicons/react/24/outline';

function Asset({ assetId }: { assetId: string }) {
  const linkData = useContentfulLink(assetId);
  const assetColor = useColorModeValue('asset.light', 'asset.dark');

  if (
    !assetId ||
    !linkData?.extension ||
    !linkData?.alt ||
    !linkData?.media?.fields?.file?.url
  )
    return <SpinnerBox variant="asset" />;

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
        borderColor={assetColor}
        p="4"
        _hover={{ background: assetColor }}
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
