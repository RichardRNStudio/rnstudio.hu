import { ImageProps } from 'next/image';

export interface StackItemProps {
  src: ImageProps['src'];
  stack: string;
  width: ImageProps['width'];
  height: ImageProps['height'];
}
