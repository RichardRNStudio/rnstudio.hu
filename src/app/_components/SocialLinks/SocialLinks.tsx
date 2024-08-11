import GithubIcon from '@/app/_components/Icons/GithubIcon';
import LinkedInIcon from '@/app/_components/Icons/LinkedInIcon';
import XIcon from '@/app/_components/Icons/XIcon';
import {
  EMAIL,
  GITHUB_SOCIAL_URL,
  LINKED_IN_SOCIAL_URL,
  X_SOCIAL_URL,
} from '@/app/_shared/config';
import { SocialLink, SocialLinksProps } from './SocialLinks.types';
import GmailIcon from '../Icons/GmailIcon';

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    link: LINKED_IN_SOCIAL_URL,
    Logo: ({ width, height }) => <LinkedInIcon width={width} height={height} />,
    showInFooter: true,
  },
  {
    name: 'Github',
    link: GITHUB_SOCIAL_URL,
    Logo: ({ width, height }) => <GithubIcon width={width} height={height} />,
    showInFooter: true,
  },
  {
    name: 'Twitter',
    link: X_SOCIAL_URL,
    Logo: ({ width, height }) => <XIcon width={width} height={height} />,
    showInFooter: true,
  },
  {
    name: 'Gmail',
    link: `mailto:${EMAIL}`,
    Logo: ({ width, height }) => <GmailIcon width={width} height={height} color="currentColor" />,
    showInFooter: false,
  },
];

const SocialLinks = ({ className, isFooter }: SocialLinksProps) => {
  const iconSize = isFooter ? 18 : 15;
  return SOCIAL_LINKS.filter(({showInFooter}) => isFooter ? showInFooter : true).map(({ name, Logo, link }, index) => (
    <a
      key={index}
      href={link}
      className={className}
      title={name}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Logo width={iconSize} height={iconSize} />
      {!isFooter && <span>{name}</span>}
    </a>
  ));
};

export default SocialLinks;
