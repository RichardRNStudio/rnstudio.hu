import { LINKS } from '@/shared/config';
import Link from 'next/link';

export const Navigation = () =>
  LINKS.map(({ href, label, index }) => (
    <Link
      key={index}
      href={href}
      className="hover:text-gray-400 hover:transition hover:ease-in-out font-black uppercase text-lg text-white sm:text-sm"
    >
      {label}
    </Link>
  ));
