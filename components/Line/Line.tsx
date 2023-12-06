import { useEffect, useState } from 'react';
import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { renderContentfulRichText } from '@/contentful/utils';
import getContentfulLine from '@/contentful/getContentfulLine';
import { contentfulLineInitial } from '@/contentful/initial';
import Date from '@/components/Date/Date';
import Location from '@/components/Location/Location';

function Line({ lineId }: { lineId: string }) {
  const borderColor = useColorModeValue('yellow.200', 'gray.500');
  const [lineData, setLineData] = useState(contentfulLineInitial);
  const [isFetching, setIsFetching] = useState(true);

  const lineTitle: string =
    lineData?.isTitleVisible && lineData.title ? lineData.title : '';
  const lineText =
    lineData?.text && renderContentfulRichText(lineData.text as Document);
  const lineStartDate = lineData?.startDate && lineData.startDate;
  const lineEndDate = lineData?.endDate && lineData.endDate;
  const lineLocation = lineData?.location && lineData.location;

  useEffect(() => {
    if (!lineId) return;
    if (!isFetching) return;
    getContentfulLine(lineId).then((result) => {
      setLineData(result);
      setIsFetching(false);
    });
  }, [lineId, isFetching]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      mt="2"
      mb="2"
      w="full"
      fontFamily="sans-serif"
    >
      {lineTitle && (
        <Heading as="h3" size="md" mb="2">
          {lineTitle}
        </Heading>
      )}
      {lineStartDate && (
        <Date startDate={lineStartDate} endDate={lineEndDate} />
      )}
      {(lineStartDate || lineLocation) && (
        <Flex gap={{ md: '2' }} direction={{ base: 'column', md: 'row' }}>
          {lineStartDate && (
            <Date startDate={lineStartDate} endDate={lineEndDate} />
          )}
          {lineLocation && <Location location={lineLocation} />}
        </Flex>
      )}
      {lineText && (
        <Box
          border="1px"
          borderRadius="lg"
          borderColor={borderColor}
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
