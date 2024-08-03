import { STACK } from '@/app/(home)/_components/Projects/ProjectItem/ProjectItem.types';
import React from 'react';

export interface ProjectsTemplateProps {
  children: React.ReactNode;
  title: string;
  stacks: STACK[];
  image?: string;
  year?: number;
}
