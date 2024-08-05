import Image from 'next/image';
import { StackItemProps } from './StackItem.types';

const StackItem = ({ src, stack, width, height }: StackItemProps) => (
  <span key={stack} title={stack}>
    <Image src={src} width={width} height={height} alt={stack} />
  </span>
);

export default StackItem;
