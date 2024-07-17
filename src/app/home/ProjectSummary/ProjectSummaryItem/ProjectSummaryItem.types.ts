export enum Stack {
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  NEXT = 'Next.js',
}

export interface Project {
  name: string;
  description: string;
  stars: number;
  stacks: Stack[];
  isNPMPackage?: boolean;
}
