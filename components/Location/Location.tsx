import React from 'react';
import { Center, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { MapPinIcon } from '@heroicons/react/24/outline';

function Location({ location }: { location: string }) {
  const bgColor = useColorModeValue('yellow.100', 'gray.600');

  return (
    <Flex
      justify="flex-start"
      align="center"
      gap="1"
      mb="4"
      borderRadius="lg"
      px="2"
      py="1"
      backgroundColor={bgColor}
    >
      <Center width="4">
        <MapPinIcon />
      </Center>
      <Text fontSize="xs">{location}</Text>
    </Flex>
  );
}

export default Location;
