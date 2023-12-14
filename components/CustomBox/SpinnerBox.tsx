import { Box, Spinner, useStyleConfig } from '@chakra-ui/react';
import { ISpinnerBox } from './types';

function SpinnerBox(props: ISpinnerBox) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('SpinnerBox', { variant });

  return (
    <Box __css={styles} {...rest}>
      <Spinner variant={variant} />
    </Box>
  );
}

export default SpinnerBox;
