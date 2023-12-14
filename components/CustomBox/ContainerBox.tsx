import { Box, useStyleConfig } from '@chakra-ui/react';
import { IContainerBox } from './types';

function ContainerBox(props: IContainerBox) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('ContainerBox', { variant });

  return <Box __css={styles} {...rest} />;
}

export default ContainerBox;
