'use client';

import { useState } from 'react';
import Container from '../Container/Container';
import CloseIcon from '../Icons/CloseIcon';
import GmailIcon from '../Icons/GmailIcon';
import Link from 'next/link';
import { EMAIL } from '@/app/_shared/config';

const OpenToWork = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  if (!isOpen) return null;
  return (
    <div className="sticky top-16 left-0 right-0 py-1 bg-lime-700 shadow-sm z-20">
      <Container className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <h2>Currently open to work</h2>
          <Link href={`mailto:${EMAIL}`}>
            <GmailIcon width={18} height={18} className="cursor-pointer" />
          </Link>
        </div>
        <CloseIcon
          onClick={() => setIsOpen(false)}
          width={22}
          height={22}
          color="white"
          className="cursor-pointer"
        />
      </Container>
    </div>
  );
};

export default OpenToWork;
