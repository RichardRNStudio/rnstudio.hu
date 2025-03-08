import { HTMLAttributeAnchorTarget } from 'react';

/* eslint-disable no-unused-vars */
export enum STACK {
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  NEXT = 'Next.js',
  TYPESCRIPT = 'Typescript',
  C_SHARP = 'C#',
  FIREBASE = 'Firebase',
  TAILWIND = 'Tailwind CSS',
}
/* eslint-enable no-unused-vars */

export type ProjectMain = {
  name: string;
  stacks: STACK[];
  isNPMPackage?: boolean;
  isGooglePlayApp?: boolean;
  googlePlayLink?: string;
  npmPackageLink?: string;
};

export type Project = {
  description: string;
  link: string;
  isInternalLink?: boolean;
  stars: number;
  target?: HTMLAttributeAnchorTarget;
  year?: number;
  image?: string;
} & ProjectMain;

interface ProjectItemPropsBase {
  isLoadingSkeleton: boolean;
}

export interface ProjectShowItemProps extends ProjectItemPropsBase {
  isLoadingSkeleton: false;
  data: Project;
}

export interface ProjectShowSkeletonProps extends ProjectItemPropsBase {
  isLoadingSkeleton: true;
  data?: Project;
}

export type ProjectItemProps = ProjectItemPropsBase &
  (ProjectShowItemProps | ProjectShowSkeletonProps);
