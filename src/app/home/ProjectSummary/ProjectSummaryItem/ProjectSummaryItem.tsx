import NPMIcon from '@/components/Icons/NPMIcon';
import StarIcon from '@/components/Icons/StarIcon';
import { Project, Stack } from './ProjectSummaryItem.types';
import StackImage from './StackImage';

const ProjectSummaryItem = ({
  name,
  description,
  stacks,
  stars,
  isNPMPackage,
}: Project) => (
  <div className="p-4 border border-1 border-neutral-500 border-opacity-30 text-black dark:text-white rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer">
    <h4 className="font-black flex flex-row items-center gap-2">
      {name}
      {isNPMPackage && <NPMIcon width={30} height={30} className="mt-1" />}
    </h4>
    <p className="mt-1 min-h-12">{description}</p>
    <div className="flex flex-row mt-2 items-center justify-between gap-3">
      <div className="flex flex-row gap-2">
        {stacks.map((stack) => {
          if (stack === Stack.REACT) {
            return (
              <StackImage
                key={Stack.REACT}
                width={59}
                height={20}
                stack={Stack.REACT}
                src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=FFF"
              />
            );
          }
          if (stack === Stack.REACT_NATIVE) {
            return (
              <StackImage
                key={Stack.REACT_NATIVE}
                width={97}
                height={20}
                stack={Stack.REACT_NATIVE}
                src="https://img.shields.io/badge/-React_Native-61DAFB?style=flat&logo=react&logoColor=FFF"
              />
            );
          }
          if (stack === Stack.NEXT) {
            return (
              <StackImage
                key={Stack.NEXT}
                stack={Stack.NEXT}
                src="https://img.shields.io/badge/-Next.js-000?style=flat&logo=next.js&logoColor=FFF"
                width={67}
                height={20}
              />
            );
          }
        })}
      </div>
      <div className="flex flex-row gap-1 items-center justify-center">
        <StarIcon width={15} height={15} color="gray" />
        <span className="text-sm tracking-wider">{stars}</span>
      </div>
    </div>
  </div>
);

export default ProjectSummaryItem;
