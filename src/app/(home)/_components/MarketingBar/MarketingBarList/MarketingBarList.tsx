import { fetchRepositories } from '@/app/_shared/api/github';
import { MARKETING_BAR_ITEMS } from '@/app/_shared/config';
import { use } from 'react';
import { Project } from '@/app/(home)/_components/Projects/ProjectItem/ProjectItem.types';
import { MarketingBarCategory } from '@/app/_components/MarketingBarItem/MarketingBarItem.types';
import MarketingBarItem from '@/app/_components/MarketingBarItem/MarketingBarItem';

const transformProjects = (repositories: Project[]) =>
  MARKETING_BAR_ITEMS.map((item) => {
    if (item.type === MarketingBarCategory.projects) {
      return {
        ...item,
        value: repositories.length,
      };
    }
    if (item.type === MarketingBarCategory.givenStars) {
      return {
        ...item,
        value: repositories.reduce((acc, project) => acc + project.stars, 0),
      };
    }
    return item;
  });

const MarketingBarList = () => {
  const repositories = use(fetchRepositories());

  return transformProjects(repositories).map((item, index) => (
    <MarketingBarItem key={index} {...item} />
  ));
};

export default MarketingBarList;
