import StarIcon from '@/app/_components/Icons/StarIcon';
import { ProjectItemStarsProps } from './ProjectItemStars.types';

const ProjectItemStars = ({ stars }: ProjectItemStarsProps) => {
  if (stars === 0) return null;
  return (
    <>
      <StarIcon width={16} height={16} />
      <span className="text-sm tracking-wide">{stars}</span>
    </>
  );
};

export default ProjectItemStars;
