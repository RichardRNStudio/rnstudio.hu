import {
  Project,
  ProjectMain,
  STACK,
} from '../(home)/_components/Projects/ProjectItem/ProjectItem.types';
import { Job } from '../(home)/_components/Work/WorkItem/WorkItem.types';
import { NavigationLink } from './types';

export const WEBSITE = 'https://rnstudio.hu';
export const EMAIL = 'riiichj@gmail.com';
export const IS_OPEN_TO_WORK = false;

export const LINKED_IN_SOCIAL_URL =
  'https://www.linkedin.com/in/richard-nagy-rnstudio';
export const GITHUB_SOCIAL_URL = 'https://github.com/RichardRNStudio';
export const X_SOCIAL_ID = 'Richard94231126';
export const X_SOCIAL_URL = `https://x.com/${X_SOCIAL_ID}`;

export const STORAGE_ITEMS = {
  OPEN_TO_WORK_CLOSED: 'isOpenToWorkBannerClosed',
} as const;

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
    position: 'Medior Software Engineer',
    startDate: new Date('2017-02-01'),
    endDate: new Date('2019-07-19'),
  },
  {
    company: {
      name: 'PC Trade Systems',
      link: 'https://pctrade.hu',
    },
    position: 'Junior Software Engineer',
    startDate: new Date('2015-05-01'),
    endDate: new Date('2017-01-31'),
  },
];

export const REPOSITORIES: ProjectMain[] = [
  {
    name: 'react-native-slider-intro',
    stacks: [STACK.REACT_NATIVE, STACK.TYPESCRIPT],
    isNPMPackage: true,
    npmPackageLink: 'https://www.npmjs.com/package/react-native-slider-intro',
  },
  {
    name: 'react-native-find-local-devices',
    stacks: [STACK.REACT_NATIVE, STACK.TYPESCRIPT],
    isNPMPackage: true,
    npmPackageLink:
      'https://www.npmjs.com/package/react-native-find-local-devices',
  },
  {
    name: 'rnstudio.hu',
    stacks: [STACK.NEXT, STACK.REACT, STACK.TYPESCRIPT, STACK.TAILWIND],
  },
];

export const PC_CONTROLLER_NAVIGATION_LINK = '/projects/pccontroller';

export const LINKS: NavigationLink[] = [
  {
    index: 1,
    href: '/',
    label: 'About',
    changeFrequency: 'monthly',
    priority: 1,
    isAvailable: true,
  },
  {
    index: 2,
    href: PC_CONTROLLER_NAVIGATION_LINK,
    label: 'PC Controller',
    changeFrequency: 'monthly',
    priority: 0.6,
    isHidden: true,
    isAvailable: true,
  },
  {
    index: 3,
    href: '/photos',
    label: 'Photos',
    changeFrequency: 'monthly',
    priority: 0.5,
    isAvailable: true,
  },
];

export const PC_CONTROLLER_PROJECT: Project = {
  name: 'PC Controller',
  description:
    'Allows you to seamlessly control your Windows machine from your Android phone.',
  stacks: [STACK.REACT_NATIVE, STACK.TYPESCRIPT, STACK.C_SHARP, STACK.FIREBASE],
  isGooglePlayApp: true,
  link: PC_CONTROLLER_NAVIGATION_LINK,
  googlePlayLink:
    'https://play.google.com/store/apps/details?id=com.pccontroller',
  stars: 0,
  year: 2020,
  image: '/pc_controller_mockup.png',
};

export const CUSTOM_REPOSITORIES: Project[] = [PC_CONTROLLER_PROJECT];
