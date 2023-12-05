import { useEffect, useState } from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { ContentfulLine } from '@/contentful/types';
import { renderContentfulRichText } from '@/contentful/utils';
import getContentfulLine from '@/contentful/getContentfulLine';
import { contentfulLineInitial } from '@/contentful/initial';

function Line({ lineId }: { lineId: string }) {
  const [lineData, setLineData] = useState(contentfulLineInitial);
  const lineTitle: string = lineData?.title && lineData.title;
  const lineText =
    lineData?.text && renderContentfulRichText(lineData.text as Document);

  useEffect(() => {
    if (!lineId) return;
    getContentfulLine(lineId).then((result) => {
      setLineData(result);
    });
  }, [lineId]);

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
      {lineTitle && (
        <Heading as="h3" size="md" mb="2">
          {lineTitle}
        </Heading>
      )}
      {lineText && (
        <Box
          border="1px"
          borderRadius="lg"
          borderColor={useColorModeValue('yellow.200', 'gray.500')}
          p="4"
          w="full"
        >
          {lineText}
        </Box>
      )}
    </Box>
  );
}

export default Line;
