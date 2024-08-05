'use client';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useTheme } from 'next-themes';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import CloseIcon from '../../Icons/CloseIcon';
import { THEMES } from '@/app/_shared/config';

const MobileNavigation = () => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState<boolean>(false);
  const iconColor = isLight ? 'black' : 'white';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const isLight = theme === THEMES.light;
    setIsLight(isLight);
  }, [theme]);

  return (
    <>
      <div className="sm:hidden flex items-center order-last">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <HamburgerIcon width="30px" height="30px" color={iconColor} />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 min-h-screen flex items-center justify-center bg-white dark:bg-black z-20">
          <CloseIcon
            width="40px"
            height="40px"
            color={iconColor}
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex flex-col items-center gap-5">
            <Navigation />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
