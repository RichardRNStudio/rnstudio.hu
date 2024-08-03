import { Project } from '../ProjectItem/ProjectItem.types';

export interface ProjectItemNameProps {
  name: Project['name'];
  isNPMPackage: Project['isNPMPackage'];
  isGooglePlayApp: Project['isGooglePlayApp'];
}
