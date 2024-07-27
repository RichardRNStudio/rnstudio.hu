import NPMIcon from '@/app/_components/Icons/NPMIcon';
import { ProjectItemNameProps } from './ProjectItemName.types';
import Link from 'next/link';
import GooglePlayIcon from '@/app/_components/Icons/GooglePlayIcon';

const ProjectItemName = ({
  name,
  isNPMPackage,
  npmLink,
  isGooglePlayApp,
  googlePlayLink,
}: ProjectItemNameProps) => (
  <>
    {name}
    {isNPMPackage && npmLink && (
      <Link href={npmLink} target="_blank">
        <NPMIcon width={30} height={30} className="mt-1" />
      </Link>
    )}
    {isGooglePlayApp && googlePlayLink && (
      <Link href={googlePlayLink} target="_blank">
        <GooglePlayIcon width={15} height={15} />
      </Link>
    )}
  </>
);

export default ProjectItemName;
