import React from 'react';
import { IconProps } from './Icon.interface';

const CloseIcon = ({ width, height, color, className, onClick }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
  >
    <path
      d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

export default CloseIcon;