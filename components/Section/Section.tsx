import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { ContentfulSection } from '@/contentful/types';
import { renderContentfulRichText } from '@/contentful/utils';
import Assets from '@/components/Assets/Assets';
import Date from '@/components/Date/Date';
import Line from '@/components/Line/Line';
import Location from '@/components/Location/Location';
import LinkToPage from '@/components/SubPage/LinkToPage';

function Section({ sectionData }: { sectionData: ContentfulSection }) {
  const borderColor = useColorModeValue('yellow.200', 'gray.500');

  if (!sectionData) return <Box></Box>;

  const sectionEmoji: string = sectionData.emoji ? sectionData.emoji : '';
  const sectionTitle: string =
    sectionData?.isTitleVisible && sectionData.title ? sectionData.title : '';
  const sectionText =
    sectionData?.text && renderContentfulRichText(sectionData.text as Document);
  const sectionLines = sectionData?.lines && sectionData.lines;
  const sectionStartDate = sectionData?.startDate && sectionData.startDate;
  const sectionEndDate = sectionData?.endDate && sectionData.endDate;
  const sectionLocation = sectionData?.location && sectionData.location;
  const sectionSubPages = sectionData?.subPages && sectionData.subPages;
  const sectionMedia = sectionData?.media && sectionData.media;

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
      {(sectionEmoji || sectionTitle) && (
        <Flex mb="2">
          {sectionEmoji && (
            <Heading as="h2" size="md" fontFamily="Menlo" mr="2">
              {sectionEmoji}
            </Heading>
          )}
          <Heading as="h2" size="md" fontWeight="bold" fontFamily="Menlo">
            {sectionTitle}
          </Heading>
        </Flex>
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
      {sectionMedia && sectionMedia.length > 0 && (
        <Assets assets={sectionMedia} />
      )}
    </Box>
  );
}

export default Section;
