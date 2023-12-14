import { ColorModeScript } from '@chakra-ui/react';
import theme from '@/theme/theme';

function ColorModeScriptWrapper() {
  return <ColorModeScript initialColorMode={theme.config.initialColorMode} />;
}

export default ColorModeScriptWrapper;
