import {
  GITHUB_SOCIAL_URL,
  LINKED_IN_SOCIAL_URL,
  X_SOCIAL_URL,
} from '@/app/_shared/config';
import Container from '../Container/Container';
import GithubIcon from '../Icons/GithubIcon';
import LinkedInIcon from '../Icons/LinkedInIcon';
import XIcon from '../Icons/XIcon';

const Footer = () => {
  const linkClassName =
    'transition-colors hover:text-gray-400 dark:hover:text-slate-400';
  return (
    <footer className="border-neutral-500 border-t border-opacity-30 text-black dark:text-white">
      <Container className="min-h-16 flex items-center justify-between gap-2">
        <div>Richárd Nagy © {new Date().getFullYear()}</div>
        <div className="flex flex-row gap-5">
          <a
            href={LINKED_IN_SOCIAL_URL}
            className={linkClassName}
            title="LinkedIn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={GITHUB_SOCIAL_URL}
            title="GitHub"
            className={linkClassName}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href={X_SOCIAL_URL}
            title="X"
            className={linkClassName}
            rel="noopener noreferrer"
            target="_blank"
          >
            <XIcon width={18} height={18} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
