import { MouseEventHandler } from 'react';
import { BoxProps, MenuItemProps } from '@chakra-ui/react';

export interface IContainerBox extends BoxProps {
  variant?: 'page' | 'section' | 'line' | undefined;
}

export interface IContentBox extends BoxProps {
  variant?: '' | undefined;
}

export interface IHeadingBox extends BoxProps {
  variant?: 'page' | 'section' | undefined;
  emoji?: string | undefined;
  title: string;
}

export interface IIconTagBox extends BoxProps {
  variant?: 'date' | 'location' | undefined;
  text: string;
}

export interface IMenuItemBox extends MenuItemProps {
  variant?: '' | undefined;
  onMenuItem?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface INavBox extends BoxProps {
  variant?: 'default' | 'current' | 'mobile' | 'body' | undefined;
}

export interface ISidebarBox extends BoxProps {
  variant?: '' | undefined;
}

export interface ISpinnerBox extends BoxProps {
  variant?: 'line' | 'asset' | undefined;
}
