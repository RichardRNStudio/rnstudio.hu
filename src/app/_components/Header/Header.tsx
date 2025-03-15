import Link from 'next/link';
import Container from '../Container/Container';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';
import ThemeSelector from './ThemeSelector/ThemeSelector';
import Image from 'next/image';

const Header = () => (
  <header className="min-h-18 flex items-center sticky top-0 left-0 right-0 backdrop-blur-xl border-opacity-30 border-neutral-500 border-b shadow-sm z-20">
    <Container className="w-full">
      <nav className="flex justify-between text-black dark:text-white">
        <div className="flex items-center">
          <Link href="/" className="hover:text-gray-300">
            <Image src="/logo.png" width={150} height={80} alt="RNStudio" />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <DesktopNavigation />
          <MobileNavigation />
          <ThemeSelector />
        </div>
      </nav>
    </Container>
  </header>
);

export default Header;
