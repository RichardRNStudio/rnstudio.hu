import { HTMLAttributeAnchorTarget } from 'react';

/* eslint-disable no-unused-vars */
export enum STACK {
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  NEXT = 'Next.js',
  TYPESCRIPT = 'TYPESCRIPT',
  C_SHARP = 'C#',
  FIREBASE = 'Firebase',
  TAILWIND = 'Tailwind',
}
/* eslint-enable no-unused-vars */

export type ProjectMain = {
  name: string;
  stacks: STACK[];
  npmLink?: string;
};

export type Project = {
  description: string;
  link: string;
  stars: number;
  isNPMPackage?: boolean;
  isGooglePlayIcon?: boolean;
  googlePlayLink?: string;
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