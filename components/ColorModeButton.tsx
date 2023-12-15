'use client';

import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function ColorModeButton() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
      p="1"
      bgColor={useColorModeValue('btnBg.light', 'btnBg.dark')}
      _hover={{ bgColor: useColorModeValue('btnHover.light', 'btnHover.dark') }}
      onClick={toggleColorMode}
    ></IconButton>
  );
}

export default ColorModeButton;
