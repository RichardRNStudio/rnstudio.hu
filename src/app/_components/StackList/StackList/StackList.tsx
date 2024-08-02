import { STACK } from '@/app/(home)/_components/Projects/ProjectItem/ProjectItem.types';
import { StackListProps } from './StackList.types';
import StackItem from '../StackItem/StackItem';

const StackList = ({ stacks }: StackListProps) =>
  stacks.map((stack) => {
    switch (stack) {
      case STACK.REACT:
        return (
          <StackItem
            key={STACK.REACT}
            stack={STACK.REACT}
            width={59}
            height={20}
            src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=FFF"
          />
        );
      case STACK.REACT_NATIVE:
        return (
          <StackItem
            key={STACK.REACT_NATIVE}
            stack={STACK.REACT_NATIVE}
            width={97}
            height={20}
            src="https://img.shields.io/badge/-React_Native-61DAFB?style=flat&logo=react&logoColor=FFF"
          />
        );
      case STACK.TYPESCRIPT:
        return (
          <StackItem
            key={STACK.TYPESCRIPT}
            stack={STACK.TYPESCRIPT}
            width={85}
            height={20}
            src="https://img.shields.io/badge/-Typescript-3178C6?style=flat&logo=typescript&logoColor=FFF"
          />
        );
      case STACK.C_SHARP:
        return (
          <StackItem
            key={STACK.C_SHARP}
            stack={STACK.C_SHARP}
            width={27}
            height={20}
            src="https://img.shields.io/badge/-C%23-239120?style=flat&logo=c-sharp&logoColor=white&logoColor=FFF"
          />
        );
      case STACK.NEXT:
        return (
          <StackItem
            key={STACK.NEXT}
            stack={STACK.NEXT}
            src="https://img.shields.io/badge/-Next.js-000?style=flat&logo=next.js&logoColor=FFF"
            width={67}
            height={20}
          />
        );
      case STACK.FIREBASE:
        return (
          <StackItem
            key={STACK.FIREBASE}
            stack={STACK.FIREBASE}
            src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=FFF"
            width={75}
            height={20}
          />
        );
      case STACK.TAILWIND:
        return (
          <StackItem
            key={STACK.TAILWIND}
            stack={STACK.TAILWIND}
            src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=FFF"
            width={99}
            height={20}
          />
        );
      default:
        return null;
    }
  });

export default StackList;
