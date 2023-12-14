import { Box, useStyleConfig } from '@chakra-ui/react';
import { IContentBox } from './types';

function ContentBox(props: IContentBox) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('ContentBox', { variant });

  return <Box __css={styles} {...rest} />;
}

export default ContentBox;
