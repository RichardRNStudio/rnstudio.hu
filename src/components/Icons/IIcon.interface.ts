import React from 'react';

export interface IIcon {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
  color?: React.CSSProperties['color'];
  className?: string;
  onClick?: () => void;
}
