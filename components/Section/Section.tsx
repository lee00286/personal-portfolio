import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { ContentfulSection } from '@/contentful/types';
import { renderContentfulRichText } from '@/contentful/utils';
import Line from '@/components/Line/Line';

function Section({ sectionData }: { sectionData: ContentfulSection }) {
  const borderColor = useColorModeValue('yellow.200', 'gray.500');

  const sectionTitle: string = sectionData?.title && sectionData.title;
  const sectionText =
    sectionData?.text && renderContentfulRichText(sectionData.text as Document);
  const sectionLines = sectionData?.lines && sectionData.lines;

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
        <Heading as="h2" size="lg" mb="2">
          {sectionTitle}
        </Heading>
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
            key={`profile-section-${sectionData.sectionId}-line-${index}`}
            lineId={line.sys.id}
          />
        ))}
    </Box>
  );
}

export default Section;
