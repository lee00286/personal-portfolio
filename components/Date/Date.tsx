import React from 'react';
import { Center, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

function Date({
  startDate,
  endDate
}: {
  startDate: string;
  endDate: string | undefined;
}) {
  const bgColor = useColorModeValue('yellow.100', 'gray.600');

  return (
    <Flex
      justify="flex-start"
      align="center"
      gap="1"
      mb={{ base: '2', md: '4' }}
      borderRadius="lg"
      px="2"
      py="1"
      backgroundColor={bgColor}
    >
      <Center width="4">
        <CalendarDaysIcon />
      </Center>
      <Text fontSize="xs">
        {startDate} {endDate && `~ ${endDate}`}
      </Text>
    </Flex>
  );
}

export default Date;
