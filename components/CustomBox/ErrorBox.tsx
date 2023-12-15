'use client';

import { Box, Heading, useStyleConfig } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { errorTexts } from '@/utils/errorTexts';
import { IErrorBox } from './types';

function ErrorBox(props: IErrorBox) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('ErrorBox', { variant });

  const errorText = variant ? errorTexts[variant] : errorTexts['general'];

  return (
    <Box __css={styles} {...rest}>
      <Heading variant="error">
        {variant} | {errorText.heading}
      </Heading>
      <Link variant="error" href={errorText.buttonPath}>
        {errorText.buttonText}
      </Link>
    </Box>
  );
}

export default ErrorBox;
