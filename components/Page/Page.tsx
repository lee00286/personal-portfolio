'use client';

import { usePathname } from 'next/navigation';
import { Box, Center, Flex, Heading, Spinner } from '@chakra-ui/react';
import { renderContentfulRichText } from '@/contentful/utils';
import { Document } from '@contentful/rich-text-types';
import { usePageContext } from '@/context/pageState';
import Assets from '@/components/Assets/Assets';
import Section from '@/components/Section/Section';
import { pathnameToSlug } from '@/utils/pageUtils';

function Page() {
  const { pageData } = usePageContext();
  const pathname = usePathname();

  const slug: string = pathnameToSlug(pathname, true);

  if (!pageData || pageData.pageId < 0)
    return (
      <Center p="4" w="full">
        <Spinner color="yellow.500" />
      </Center>
    );

  const pageEmoji: string = pageData.emoji ? pageData.emoji : '';
  const pageTitle: string =
    pageData?.isTitleVisible && pageData.title ? pageData.title : '';
  const pageText =
    pageData?.text && renderContentfulRichText(pageData.text as Document);
  const pageSections = pageData?.sections && pageData.sections;
  const pageMedia = pageData?.media && pageData.media;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      p="4"
      w="full"
      fontFamily="sans-serif"
    >
      {(pageEmoji || pageTitle) && (
        <Flex flexDir={{ base: 'column', md: 'row' }} mb="4">
          {pageEmoji && (
            <Heading
              as="h1"
              size={{ base: 'xl', md: '2xl' }}
              mr="4"
              fontFamily="Menlo"
            >
              {pageEmoji}
            </Heading>
          )}
          <Heading as="h1" size={{ base: 'xl', md: '2xl' }} fontFamily="Menlo">
            {pageTitle}
          </Heading>
        </Flex>
      )}
      <Box>{pageText}</Box>
      {pageSections &&
        pageSections.length > 0 &&
        pageSections.map((section, index: number) => (
          <Section key={`${slug}-page-${index}`} sectionData={section.fields} />
        ))}
      {pageMedia && pageMedia.length > 0 && <Assets assets={pageMedia} />}
    </Box>
  );
}

export default Page;
