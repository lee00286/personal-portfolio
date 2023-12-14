import { Box, Heading, useStyleConfig } from '@chakra-ui/react';
import { IHeadingBox } from './types';

function HeadingBox(props: IHeadingBox) {
  const { variant, emoji, title, ...rest } = props;

  const styles = useStyleConfig('HeadingBox', { variant });

  return (
    <Box __css={styles} {...rest}>
      {emoji && <Heading variant={variant}>{emoji}</Heading>}
      <Heading variant={variant}>{title}</Heading>
    </Box>
  );
}

export default HeadingBox;
