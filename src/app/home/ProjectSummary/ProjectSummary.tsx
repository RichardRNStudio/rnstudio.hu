import { Section } from '@/components/Section/Section';
import ProjectSummaryItem from './ProjectSummaryItem/ProjectSummaryItem';
import { Project, Stack } from './ProjectSummaryItem/ProjectSummaryItem.types';

const projects: Project[] = [
  {
    name: 'react-native-slider-intro',
    description:
      'A simple and full customizable React Native package which implements a unique slider.',
    stars: 119,
    stacks: [Stack.REACT_NATIVE],
    isNPMPackage: true,
  },
  {
    name: 'react-native-find-local-devices',
    description:
      'This package loads all of the local devices for react native.',
    stars: 31,
    stacks: [Stack.REACT_NATIVE],
    isNPMPackage: true,
  },
  {
    name: 'rnstudio.hu',
    description: 'My personal website',
    stars: 0,
    stacks: [Stack.NEXT, Stack.REACT],
  },
];

const ProjectSummaryList = () => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectSummaryItem key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectSummaryList;
