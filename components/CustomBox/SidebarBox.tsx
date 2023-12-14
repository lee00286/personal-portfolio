import { Box, useStyleConfig } from '@chakra-ui/react';
import { ISidebarBox } from './types';

function SidebarBox(props: ISidebarBox) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('SidebarBox', { variant });

  return <Box __css={styles} {...rest} />;
}

export default SidebarBox;
