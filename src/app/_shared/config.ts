import {
  ProjectMain,
  STACK,
} from '../(home)/_components/Projects/ProjectItem/ProjectItem.types';

export const LINKS = [
  { index: 1, href: '/', label: 'About' },
  { index: 2, href: '/test', label: 'Projects' },
  { index: 3, href: '/office', label: 'Office' },
] as const;

export const THEMES = {
  light: 'light',
  dark: 'dark',
} as const;

export const REPOSITORIES: ProjectMain[] = [
  {
    name: 'react-native-slider-intro',
    stacks: [STACK.REACT_NATIVE, STACK.TYPESCRIPT],
    npmLink: 'https://www.npmjs.com/package/react-native-slider-intro',
  },
  {
    name: 'react-native-find-local-devices',
    stacks: [STACK.REACT_NATIVE, STACK.TYPESCRIPT],
    npmLink: 'https://www.npmjs.com/package/react-native-find-local-devices',
  },
];

export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_USER = 'RichardRNStudio';
export const GITHUB_TOKEN = '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'; // TODO: Remove it from here (and generate a new one before publishing the project)
