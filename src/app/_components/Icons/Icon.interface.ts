import React from 'react';

export interface IconProps {
  width: React.CSSProperties['width'];
  height: React.CSSProperties['height'];
  color?: React.CSSProperties['color'];
  className?: string;
  onClick?: () => void;
}
