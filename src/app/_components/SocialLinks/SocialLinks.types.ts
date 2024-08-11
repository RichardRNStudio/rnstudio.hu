import React from 'react';
import { IconProps } from '../Icons/Icon.interface';

export type SocialLink = {
  link: string;
  name: string;
  Logo: ({ width, height }: Partial<IconProps>) => React.ReactNode;
  showInFooter?: boolean;
};

export interface SocialLinksProps {
  isFooter?: boolean;
  className?: string;
}
