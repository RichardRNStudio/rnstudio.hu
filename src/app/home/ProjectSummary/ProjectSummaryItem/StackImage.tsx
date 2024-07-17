import { Stack } from './ProjectSummaryItem.types';
import Image from 'next/image';
import { StackImageProps } from './StackImage.types';

const StackImage = ({ src, stack, width, height }: StackImageProps) => (
  <span key={Stack.REACT} title={stack}>
    <Image src={src} width={width} height={height} alt={stack} />
  </span>
);

export default StackImage;
