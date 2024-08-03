import NPMIcon from '@/app/_components/Icons/NPMIcon';
import { ProjectItemNameProps } from './ProjectItemName.types';
import GooglePlayIcon from '@/app/_components/Icons/GooglePlayIcon';

const ProjectItemName = ({
  name,
  isNPMPackage,
  isGooglePlayApp,
}: ProjectItemNameProps) => {
  return (
    <>
      {name}
      {isNPMPackage && <NPMIcon width={30} height={30} className="mt-1" />}
      {isGooglePlayApp && <GooglePlayIcon width={15} height={15} />}
    </>
  );
};

export default ProjectItemName;
