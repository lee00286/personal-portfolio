'use client';

import { Box, Button, Center, Heading, useStyleConfig } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { errorTexts } from '@/utils/errorTexts';
import { IErrorBox } from './types';

function ErrorBox(props: IErrorBox) {
  const { variant, reset, ...rest } = props;

  const styles = useStyleConfig('ErrorBox', { variant });

  const errorText = variant ? errorTexts[variant] : errorTexts['general'];

  return (
    <Box __css={styles} {...rest}>
      <Heading variant="error">
        {variant} | {errorText.heading}
      </Heading>
      <Center>
        {reset && errorText.tryAgain && (
          <Button onClick={reset}>{errorText.tryAgain}</Button>
        )}
        <Link variant="error" href={errorText.buttonPath}>
          {errorText.buttonText}
        </Link>
      </Center>
    </Box>
  );
}

export default ErrorBox;
