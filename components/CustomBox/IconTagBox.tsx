import { Box, Center, Text, useStyleConfig } from '@chakra-ui/react';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { IIconTagBox } from './types';

function IconTagBox(props: IIconTagBox) {
  const { variant, text, ...rest } = props;

  const styles = useStyleConfig('IconTagBox', { variant });

  const icon =
    variant === 'date' ? (
      <CalendarDaysIcon />
    ) : variant === 'location' ? (
      <MapPinIcon />
    ) : (
      <></>
    );

  return (
    <Box __css={styles} {...rest}>
      <Center width="4">{icon}</Center>
      <Text fontSize="xs">{text}</Text>
    </Box>
  );
}

export default IconTagBox;
