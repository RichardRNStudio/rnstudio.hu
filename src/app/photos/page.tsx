import { Photo } from './photo.types';
import Image from 'next/image';
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google';
import classNames from 'classnames';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photos',
  alternates: {
    canonical: '/photos',
  },
  openGraph: {
    url: '/photos',
  },
};

const IMAGES: Photo[] = [
  {
    link: '/madrid_3.jpg',
    label: "Madrid YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_4.jpg',
    label: "Madrid YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_1.jpg',
    label: "Madrid YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_2.jpg',
    label: "Madrid YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/ub_1.jpg',
    label: "UltraBalaton YEAR' 🇭🇺",
    year: 2019,
  },
  {
    link: '/ub_2.jpg',
    label: "UltraBalaton YEAR' 🇭🇺",
    year: 2018,
  },
  {
    link: '/utt.jpg',
    label: "UTT YEAR' 🇭🇺",
    year: 2018,
  },
];

const font = Edu_VIC_WA_NT_Beginner({ subsets: ['latin'] });

const PhotosPage = () => {
  const sortedImagesByYear = IMAGES.sort((a, b) => b.year - a.year);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
      {sortedImagesByYear.map(({ link, label, year }, index) => {
        const title = label.replace('YEAR', `${year % 100}`);
        return (
          <div
            key={index}
            title={title}
            className="flex flex-col items-center gap-2 p-2 dark:bg-white rounded-lg shadow-lg transition-transform hover:rotate-1 max-w-xs"
          >
            <Image
              src={link}
              alt={title}
              width={350}
              height={300}
              loading={index < 4 ? 'eager' : 'lazy'}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1536px) 33vw, 25vw"
            />
            <span
              className={classNames(
                font.className,
                'text-black text-xl font-black tracking-wide',
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              )}
            >
              {title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PhotosPage;
