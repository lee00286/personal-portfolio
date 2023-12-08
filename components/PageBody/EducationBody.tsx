'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { renderContentfulRichText } from '@/contentful/utils';
import { Document } from '@contentful/rich-text-types';
import { usePageContext } from '@/context/pageState';
import Section from '@/components/Section/Section';

function EducationBody() {
  const { pageData } = usePageContext();

  const pageEmoji: string = pageData.emoji ? pageData.emoji : '';
  const pageTitle: string =
    pageData?.isTitleVisible && pageData.title ? pageData.title : '';
  const pageText =
    pageData?.text && renderContentfulRichText(pageData.text as Document);
  const pageSections = pageData?.sections && pageData.sections;

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
        <Flex mb="4">
          {pageEmoji && (
            <Heading as="h1" size="2xl" mr="4" fontFamily="Menlo">
              {pageEmoji}
            </Heading>
          )}
          <Heading as="h1" size="2xl" fontFamily="Menlo">
            {pageTitle}
          </Heading>
        </Flex>
      )}
      <Box>{pageText}</Box>
      {pageSections &&
        pageSections.length > 0 &&
        pageSections.map((section, index: number) => (
          <Section
            key={`education-section-${index}`}
            sectionData={section.fields}
          />
        ))}
    </Box>
  );
}

export default EducationBody;
