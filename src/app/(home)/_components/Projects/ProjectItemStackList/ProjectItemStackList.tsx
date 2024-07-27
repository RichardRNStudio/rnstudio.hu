import { STACK } from '../ProjectItem/ProjectItem.types';
import StackImage from '../StackImage/StackImage';
import { ProjectItemStackListProps } from './ProjectItemStackList.types';

const ProjectItemStackList = ({ stacks }: ProjectItemStackListProps) =>
  stacks.map((stack) => {
    if (stack === STACK.REACT) {
      return (
        <StackImage
          key={STACK.REACT}
          width={59}
          height={20}
          stack={STACK.REACT}
          src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=FFF"
        />
      );
    }
    if (stack === STACK.REACT_NATIVE) {
      return (
        <StackImage
          key={STACK.REACT_NATIVE}
          width={97}
          height={20}
          stack={STACK.REACT_NATIVE}
          src="https://img.shields.io/badge/-React_Native-61DAFB?style=flat&logo=react&logoColor=FFF"
        />
      );
    }
    if (stack === STACK.TYPESCRIPT) {
      return (
        <StackImage
          key={STACK.TYPESCRIPT}
          width={85}
          height={20}
          stack={STACK.TYPESCRIPT}
          src="https://img.shields.io/badge/-Typescript-3178C6?style=flat&logo=typescript&logoColor=FFF"
        />
      );
    }
    if (stack === STACK.C_SHARP) {
      return (
        <StackImage
          key={STACK.C_SHARP}
          width={27}
          height={20}
          stack={STACK.C_SHARP}
          src="https://img.shields.io/badge/-C%23-239120?style=flat&logo=c-sharp&logoColor=white&logoColor=FFF"
        />
      );
    }
    if (stack === STACK.NEXT)
      <StackImage
        key={STACK.NEXT}
        stack={STACK.NEXT}
        src="https://img.shields.io/badge/-Next.js-000?style=flat&logo=next.js&logoColor=FFF"
        width={67}
        height={20}
      />;
  });

export default ProjectItemStackList;
