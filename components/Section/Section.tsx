import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { ContentfulSection } from '@/contentful/types';
import { renderContentfulRichText } from '@/contentful/utils';
import Date from '@/components/Date/Date';
import Line from '@/components/Line/Line';
import Location from '@/components/Location/Location';
import LinkToPage from '@/components/SubPage/LinkToPage';

function Section({ sectionData }: { sectionData: ContentfulSection }) {
  const borderColor = useColorModeValue('yellow.200', 'gray.500');

  const sectionTitle: string =
    sectionData?.isTitleVisible && sectionData.title ? sectionData.title : '';
  const sectionText =
    sectionData?.text && renderContentfulRichText(sectionData.text as Document);
  const sectionLines = sectionData?.lines && sectionData.lines;
  const sectionStartDate = sectionData?.startDate && sectionData.startDate;
  const sectionEndDate = sectionData?.endDate && sectionData.endDate;
  const sectionLocation = sectionData?.location && sectionData.location;
  const sectionSubPages = sectionData?.subPages && sectionData.subPages;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      mt="4"
      mb="4"
      w="full"
      fontFamily="sans-serif"
    >
      {sectionTitle && (
        <Heading as="h2" size="md" fontWeight="bold" mb="2" fontFamily="Menlo">
          {sectionTitle}
        </Heading>
      )}
      {(sectionStartDate || sectionLocation) && (
        <Flex gap={{ md: '2' }} direction={{ base: 'column', md: 'row' }}>
          {sectionStartDate && (
            <Date startDate={sectionStartDate} endDate={sectionEndDate} />
          )}
          {sectionLocation && <Location location={sectionLocation} />}
        </Flex>
      )}
      {sectionText && (
        <Box
          border="1px"
          borderRadius="lg"
          borderColor={borderColor}
          p="4"
          w="full"
        >
          {sectionText}
        </Box>
      )}
      {sectionLines &&
        sectionLines.length > 0 &&
        sectionLines.map((line, index: number) => (
          <Line
            key={`section-${sectionData.sectionId}-line-${index}`}
            lineId={line.sys.id}
          />
        ))}
      {sectionSubPages &&
        sectionSubPages.length > 0 &&
        sectionSubPages.map((page, index: number) => (
          <LinkToPage
            key={`section-${sectionData.sectionId}-subpage-${index}`}
            pageId={page.sys.id}
          />
        ))}
    </Box>
  );
}

export default Section;
