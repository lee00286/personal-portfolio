import React from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { MapPinIcon } from '@heroicons/react/24/outline';

function Location({ location }: { location: string }) {
  const bgColor = useColorModeValue('yellow.100', 'gray.400');

  return (
    <Flex
      justify="flex-start"
      align="center"
      gap="1"
      mb="4"
      pt="1"
      pb="1"
      pl="2"
      pr="2"
      borderRadius="lg"
      backgroundColor={bgColor}
    >
      <Box width="4">
        <MapPinIcon />
      </Box>
      <Text fontSize="xs">{location}</Text>
    </Flex>
  );
}

export default Location;
