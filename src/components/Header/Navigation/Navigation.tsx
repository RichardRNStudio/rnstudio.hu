'use client';

import { LINKS } from '@/shared/config';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  return LINKS.map(({ href, label, index }) => (
    <Link
      key={index}
      href={href}
      className={classNames(
        pathname === href
          ? 'text-black dark:text-white'
          : 'text-gray-500 dark:text-zinc-400',
        'hover:text-black dark:hover:text-white hover:transition hover:ease-in-out uppercase font-black text-lg sm:text-sm'
      )}
    >
      {label}
    </Link>
  ));
};
