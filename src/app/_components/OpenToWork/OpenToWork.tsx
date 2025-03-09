'use client';

import { EMAIL, STORAGE_ITEMS } from '@/app/_shared/config';
import { getLocalStorageItem, setLocalStorageItem } from '@/app/_shared/utils';
import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import CloseIcon from '../Icons/CloseIcon';
import GmailIcon from '../Icons/GmailIcon';
import classNames from 'classnames';

const OpenToWork = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
    setLocalStorageItem(STORAGE_ITEMS.OPEN_TO_WORK_CLOSED, true);
  };

  useEffect(() => {
    const isStorageClosed =
      getLocalStorageItem(STORAGE_ITEMS.OPEN_TO_WORK_CLOSED) === true;
    if (!isStorageClosed) {
      setIsOpen(true);
    }
  }, []);

  return (
    <div
      className={classNames(
        'sticky top-16 left-0 right-0 py-1 bg-green-900 shadow-sm z-20 min-h-8 transition-opacity ease-in duration-700',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
    >
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
          onClick={handleClose}
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
