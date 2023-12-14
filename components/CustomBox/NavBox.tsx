import { Box, useStyleConfig } from '@chakra-ui/react';
import { INavBox } from './types';

function NavBox(props: INavBox) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('NavBox', { variant });

  return <Box __css={styles} {...rest} />;
}

export default NavBox;
