'use client';
import { useState } from 'react';
import CloseIcon from '../../Icons/CloseIcon';
import HamburgerIcon from '../../Icons/HamburgerIcon';
import { Navigation } from '../Navigation/Navigation';

const MobileNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sm:hidden flex items-center order-last">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <HamburgerIcon width="30px" height="30px" color="currentColor" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 min-h-screen flex items-center justify-center bg-white dark:bg-black z-20">
          <CloseIcon
            width="40px"
            height="40px"
            color="currentColor"
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex flex-col items-center gap-5">
            <Navigation onMenuClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
