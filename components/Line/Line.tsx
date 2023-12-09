'use client';

import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react';
import { Document } from '@contentful/rich-text-types';
import { renderContentfulRichText } from '@/contentful/utils';
import Assets from '@/components/Assets/Assets';
import Date from '@/components/Date/Date';
import Location from '@/components/Location/Location';
import { ContentfulLine } from '@/contentful/types';

function Line({ lineData }: { lineData: ContentfulLine }) {
  const borderColor = useColorModeValue('yellow.200', 'gray.500');

  if (!lineData)
    return (
      <Center my="4" w="full" _last={{ mb: '0' }}>
        <Spinner color="yellow.500" />
      </Center>
    );

  const lineTitle: string =
    lineData?.isTitleVisible && lineData.title ? lineData.title : '';
  const lineText =
    lineData?.text && renderContentfulRichText(lineData.text as Document);
  const lineStartDate = lineData?.startDate && lineData.startDate;
  const lineEndDate = lineData?.endDate && lineData.endDate;
  const lineLocation = lineData?.location && lineData.location;
  const lineMedia = lineData?.media && lineData.media;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      my="2"
      w="full"
      fontFamily="sans-serif"
      _last={{ mb: '0' }}
    >
      {lineTitle && (
        <Heading as="h3" size="sm" fontFamily="Menlo" mr="2" mb="2">
          {lineTitle}
        </Heading>
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
      {lineMedia && lineMedia.length > 0 && <Assets assets={lineMedia} />}
    </Box>
  );
}

export default Line;
