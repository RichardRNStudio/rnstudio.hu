import { REPOSITORIES } from '@/app/_shared/config';
import { Suspense } from 'react';
import { Section } from '../../../_components/Section/Section';
import ProjectItem from './ProjectItem/ProjectItem';
import ProjectList from './ProjectList/ProjectList';

const Projects = () => (
  <Section title="Projects">
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Suspense
        fallback={new Array(REPOSITORIES.length).fill(null).map((_, key) => (
          <ProjectItem key={`${key}-loading-skeleton`} isLoadingSkeleton />
        ))}
      >
        <ProjectList />
      </Suspense>
    </div>
  </Section>
);

export default Projects;
