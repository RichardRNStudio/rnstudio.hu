import { Project } from '@/app/(home)/_components/Projects/ProjectItem/ProjectItem.types';
import { CUSTOM_REPOSITORIES, REPOSITORIES } from '../../config';
import { GithubRepository } from './github.types';

export const transformGithubRepositories = (
  data: GithubRepository[]
): Project[] =>
  data
    .reduce((projects, repository) => {
      const project = REPOSITORIES.find(
        (project) => project.name === repository.name
      );

      if (!project) {
        return projects;
      }

      return [
        ...projects,
        {
          ...project,
          description: repository.description,
          stars: repository.stargazers_count,
          githubLink: repository.html_url,
          isNPMPackage: !!project.npmLink,
        },
      ];
    }, CUSTOM_REPOSITORIES)
    .sort((a, b) => b.stars - a.stars);
