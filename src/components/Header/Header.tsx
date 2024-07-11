import Link from 'next/link';
import Container from '../Container/Container';

const links = [
  { index: 1, href: '/', label: 'About' },
  { index: 2, href: '/projects', label: 'Projects' },
  { index: 2, href: '/uses', label: 'Uses' },
];

const Header = () => {
  return (
    <header>
      <div className="min-h-16" />
      <div className="min-h-16 flex items-center border-opacity-30 border-neutral-500 border-b shadow-sm max-w-full fixed top-0 left-0 right-0 backdrop-blur-md">
        <Container>
          <div className="flex justify-between">
            <div>RNStudio</div>
            <div className="flex justify-between w-64">
              {links.map(({ href, label, index }) => (
                <Link
                  key={index}
                  href={href}
                  className="hover:text-gray-400 tracking-wider"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
