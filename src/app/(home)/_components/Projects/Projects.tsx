import { Suspense } from 'react';
import { Section } from '../../../_components/Section/Section';
import ProjectList from './ProjectList/ProjectList';
import ProjectItem from './ProjectItem/ProjectItem';
import { REPOSITORIES } from '@/app/_shared/config';

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Suspense
          fallback={new Array(REPOSITORIES.length)
            .fill(null)
            .map((_, index) => (
              <ProjectItem key={index} isLoadingSkeleton />
            ))}
        >
          <ProjectList />
        </Suspense>
      </div>
    </Section>
  );
};

export default Projects;
