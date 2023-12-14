import { MenuItem, useStyleConfig } from '@chakra-ui/react';
import { IMenuItemBox } from './types';

function MenuItemBox(props: IMenuItemBox) {
  const { variant, onMenuItem, ...rest } = props;

  const styles = useStyleConfig('MenuItemBox', { variant });

  return <MenuItem __css={styles} onClick={onMenuItem} {...rest} />;
}

export default MenuItemBox;
