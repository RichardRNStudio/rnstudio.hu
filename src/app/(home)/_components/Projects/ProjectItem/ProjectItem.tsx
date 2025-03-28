import StackList from '@/app/_components/StackList/StackList/StackList';
import classNames from 'classnames';
import ProjectItemName from '../ProjectItemName/ProjectItemName';
import ProjectItemStars from '../ProjectItemStars/ProjectItemStars';
import { ProjectItemProps } from './ProjectItem.types';
import Link from 'next/link';

const ProjectSummaryItem = ({ data, isLoadingSkeleton }: ProjectItemProps) => {
  const wrapperClassName = classNames(
    isLoadingSkeleton && 'animate-pulse',
    'p-4 border border-neutral-500 border-opacity-30 rounded-xl hover:bg-zinc-300 dark:hover:bg-zinc-800 cursor-pointer min-h-40 flex flex-col justify-between'
  );

  const Skeleton = () => (
    <div className={classNames(isLoadingSkeleton && wrapperClassName)}>
      <h4
        className={classNames(
          'font-black flex flex-row items-center gap-2 mb-2  text-black dark:text-white'
        )}
      >
        {!isLoadingSkeleton ? (
          <ProjectItemName
            name={data.name}
            isNPMPackage={data.isNPMPackage}
            isGooglePlayApp={data.isGooglePlayApp}
          />
        ) : (
          <div className="bg-slate-700 rounded w-60 h-5" />
        )}
      </h4>
      <p
        className={classNames(
          isLoadingSkeleton && 'bg-slate-700 rounded w-8',
          'min-h-20 lg:min-h-16 text-gray-500 dark:text-gray-400'
        )}
      >
        {!isLoadingSkeleton && data.description}
      </p>
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex flex-row gap-2">
          {!isLoadingSkeleton ? (
            <StackList stacks={data.stacks} />
          ) : (
            <div className="bg-slate-700 rounded w-16 h-4" />
          )}
        </div>
        <div className="flex flex-row gap-1 items-center justify-center text-gray-500 dark:text-gray-200">
          {!isLoadingSkeleton ? (
            <ProjectItemStars stars={data.stars} />
          ) : (
            <div className="bg-slate-700 rounded w-8 h-4" />
          )}
        </div>
      </div>
    </div>
  );

  if (isLoadingSkeleton) {
    return <Skeleton />;
  }

  return (
    <div className={wrapperClassName}>
      {data.isInternalLink ? (
        <Link href={data.link} target={data?.target} title={data.name}>
          <Skeleton />
        </Link>
      ) : (
        <a
          href={data.link}
          target={data?.target}
          rel="noopener noreferrer"
          title={data.name}
        >
          <Skeleton />
        </a>
      )}
    </div>
  );
};

export default ProjectSummaryItem;
