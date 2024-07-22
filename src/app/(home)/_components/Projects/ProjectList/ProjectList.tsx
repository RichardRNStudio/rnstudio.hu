import { fetchRepositories } from '@/app/_shared/api/github';
import { use } from 'react';
import ProjectSummaryItem from '../ProjectItem/ProjectItem';

const ProjectList = () => {
  const repositories = use(fetchRepositories());
  return repositories.map((project) => (
    <ProjectSummaryItem
      key={project.name}
      isLoadingSkeleton={false}
      data={project}
    />
  ));
};

export default ProjectList;
