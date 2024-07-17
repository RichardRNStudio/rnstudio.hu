import { ImageProps } from 'next/image';

export interface StackImageProps {
  src: ImageProps['src'];
  stack: string;
  width: ImageProps['width'];
  height: ImageProps['height'];
}
