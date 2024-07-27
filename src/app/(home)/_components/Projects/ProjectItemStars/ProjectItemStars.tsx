import StarIcon from '@/app/_components/Icons/StarIcon';
import { ProjectItemStarsProps } from './ProjectItemStars.types';

const ProjectItemStars = ({ stars }: ProjectItemStarsProps) => {
  if (stars === 0) return null;
  return (
    <>
      <StarIcon width={15} height={15} color="gray" />
      <span className="text-sm tracking-wider">{stars}</span>
    </>
  );
};

export default ProjectItemStars;
