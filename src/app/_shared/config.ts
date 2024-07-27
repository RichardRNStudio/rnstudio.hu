import {
  Project,
  ProjectMain,
  STACK,
} from '../(home)/_components/Projects/ProjectItem/ProjectItem.types';
import { Job } from '../(home)/_components/Work/WorkItem/WorkItem.types';

export const LINKS = [
  { index: 1, href: '/', label: 'About' },
  { index: 2, href: '/test', label: 'Projects' },
  { index: 3, href: '/office', label: 'Office' },
] as const;

export const THEMES = {
  light: 'light',
  dark: 'dark',
} as const;

export const JOBS: Job[] = [
  {
    company: {
      name: 'One Beyond',
      link: 'https://one-beyond.com',
      logo: {
        src: '/one_beyond_logo.jpeg',
        alt: 'One Beyond logo',
      },
    },
    position: 'Senior Software Engineer',
    startDate: new Date('2019-07-22'),
    endDate: new Date(),
  },
  {
    company: {
      name: 'PC Trade Systems',
      link: 'https://pctrade.hu',
      logo: {
        src: '/pc_trade_systems_logo.jpeg',
        alt: 'PC Trade Systems logo',
      },
    },
    position: 'Junior Software Engineer',
    startDate: new Date('2017-02-01'),
    endDate: new Date('2019-07-19'),
  },
  {
    company: {
      name: 'PC Trade Systems',
      link: 'https://pctrade.hu',
    },
    position: 'Intern',
    startDate: new Date('2015-05-01'),
    endDate: new Date('2017-01-31'),
  },
];

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

export const CUSTOM_REPOSITORIES: Project[] = [
  {
    name: 'PC Controller',
    description:
      'Allows you to seamlessly control your Windows machine from your Android phone.',
    stacks: [STACK.REACT_NATIVE, STACK.TYPESCRIPT, STACK.C_SHARP],
    isGooglePlayIcon: true,
    googlePlayLink:
      'https://play.google.com/store/apps/details?id=com.pccontroller',
    link: '/projects',
    stars: 0,
  },
];

export const LINKED_IN_SOCIAL_URL =
  'https://www.linkedin.com/in/richard-nagy-rnstudio';
export const GITHUB_SOCIAL_URL = 'https://github.com/RichardRNStudio';
export const X_SOCIAL_URL = 'https://x.com/Richard94231126';

export const GITHUB_API_URL = 'https://api.github.com';
export const GITHUB_USER = 'RichardRNStudio';
export const GITHUB_TOKEN = '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'; // TODO: Remove it from here (and generate a new one before publishing the project)
