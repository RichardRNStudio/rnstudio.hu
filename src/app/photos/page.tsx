import { Photo } from './photo.types';
import Image from 'next/image';
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google';
import classNames from 'classnames';

const IMAGES: Photo[] = [
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
  {
    link: '/profile.jpg',
    alt: 'My profile picture',
    label: "18'",
  },
];

const font = Edu_VIC_WA_NT_Beginner({ subsets: ['latin'] });

const PhotosPage = () => (
  <div className="grid grid-cols-3 gap-5">
    {IMAGES.map(({ link, alt, label }, index) => (
      <div
        key={index}
        className={classNames(
          'flex flex-col items-center gap-2 p-2 dark:bg-white rounded-lg shadow-lg transition-transform',
          index % 2 === 0
            ? 'rotate-1 hover:rotate-0'
            : '-rotate-1 hover:rotate-0'
        )}
      >
        <Image src={link} alt={alt} width={300} height={300} />
        <span
          className={classNames(
            font.className,
            'text-black text-lg font-black'
          )}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

export default PhotosPage;
