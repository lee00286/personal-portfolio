import React from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react';

function Date({
  startDate,
  endDate
}: {
  startDate: string;
  endDate: string | undefined;
}) {
  const bgColor = useColorModeValue('yellow.100', 'gray.400');

  return (
    <Text
      mb="4"
      pt="1"
      pb="1"
      pl="2"
      pr="2"
      borderRadius="lg"
      backgroundColor={bgColor}
      fontSize="xs"
    >
      {startDate} {endDate && `~ ${endDate}`}
    </Text>
  );
}

export default Date;
