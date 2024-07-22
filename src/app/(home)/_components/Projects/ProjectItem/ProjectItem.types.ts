export enum STACK {
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  NEXT = 'Next.js',
  TYPESCRIPT = 'TYPESCRIPT',
}

export type ProjectMain = {
  name: string;
  stacks: STACK[];
  npmLink?: string;
};

export type Project = {
  description: string;
  stars: number;
  githubLink: string;
  isNPMPackage?: boolean;
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
