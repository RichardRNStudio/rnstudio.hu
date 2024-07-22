import { Project } from '../ProjectItem/ProjectItem.types';

export interface ProjectItemNameProps {
  name: Project['name'];
  isNPMPackage: Project['isNPMPackage'];
  npmLink: Project['npmLink'];
}
