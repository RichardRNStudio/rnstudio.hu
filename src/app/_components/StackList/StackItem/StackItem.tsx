import { STACK } from '@/app/(home)/_components/Projects/ProjectItem/ProjectItem.types';
import Image from 'next/image';
import { StackItemProps } from './StackItem.types';

const StackItem = ({ src, stack, width, height }: StackItemProps) => (
  <span key={STACK.REACT} title={stack}>
    <Image src={src} width={width} height={height} alt={stack} />
  </span>
);

export default StackItem;
