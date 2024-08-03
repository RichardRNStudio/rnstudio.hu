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
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
    {IMAGES.map(({ link, alt, label }, index) => (
      <div
        key={index}
        title={label}
        className="flex flex-col items-center gap-2 p-2 dark:bg-white rounded-lg shadow-lg transition-transform hover:rotate-1 max-w-xs"
      >
        <Image
          src={link}
          alt={alt}
          width={300}
          height={300}
          loading={index < 4 ? 'eager' : 'lazy'}
        />
        <span
          className={classNames(
            font.className,
            'text-black text-3xl font-black'
          )}
        >
          {label}
        </span>
      </div>
    ))}
  </div>
);

export default PhotosPage;
