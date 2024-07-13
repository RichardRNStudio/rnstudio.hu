'use client';
import CloseIcon from '@/components/Icons/CloseIcon/CloseIcon';
import HamburgerIcon from '@/components/Icons/HamburgerIcon/HamburgerIcon';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';

const MobileNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <HamburgerIcon width="30px" height="30px" color="white" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed z-10 top-0 bottom-0 left-0 right-0 min-h-screen flex items-center justify-center bg-black">
          <CloseIcon
            width="40px"
            height="40px"
            color="white"
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
