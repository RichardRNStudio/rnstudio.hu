import Container from '../Container/Container';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';

const Header = () => {
  return (
    <header className="min-h-16 flex items-center sticky top-0 left-0 right-0 backdrop-blur-md border-opacity-30 border-neutral-500 border-b shadow-sm">
      <Container className="w-full">
        <nav className="flex justify-between">
          <div className="flex items-center">RNStudio</div>
          <DesktopNavigation />
          <MobileNavigation />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
