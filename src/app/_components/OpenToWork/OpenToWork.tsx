'use client';

import { EMAIL } from '@/app/_shared/config';
import { useState } from 'react';
import Container from '../Container/Container';
import CloseIcon from '../Icons/CloseIcon';
import GmailIcon from '../Icons/GmailIcon';

const OpenToWork = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  if (!isOpen) return null;
  return (
    <div className="sticky top-16 left-0 right-0 py-1 bg-green-900 shadow-sm z-10">
      <Container className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <h2>Currently open to work</h2>
          <a
            href={`mailto:${EMAIL}`}
            rel="noopener noreferrer"
            title="Email me"
          >
            <GmailIcon width={18} height={18} className="cursor-pointer" />
          </a>
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
