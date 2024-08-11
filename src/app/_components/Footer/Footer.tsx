import Container from '../Container/Container';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = () => (
  <footer className="border-neutral-500 border-t border-opacity-30 text-black dark:text-white">
    <Container className="min-h-16 flex items-center justify-between gap-2">
      <div>Richárd Nagy © {new Date().getFullYear()}</div>
      <div className="flex flex-row gap-5">
        <SocialLinks
          className="transition-colors hover:text-gray-400 dark:hover:text-slate-400"
          isFooter
        />
      </div>
    </Container>
  </footer>
);

export default Footer;
