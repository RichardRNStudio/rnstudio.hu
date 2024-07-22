import NPMIcon from '@/app/_components/Icons/NPMIcon';
import { ProjectItemNameProps } from './ProjectItemName.types';
import Link from 'next/link';

const ProjectItemName = ({
  name,
  isNPMPackage,
  npmLink,
}: ProjectItemNameProps) => (
  <>
    {name}
    {isNPMPackage && npmLink && (
      <Link href={npmLink} target="_blank">
        <NPMIcon width={30} height={30} className="mt-1" />
      </Link>
    )}
  </>
);

export default ProjectItemName;
