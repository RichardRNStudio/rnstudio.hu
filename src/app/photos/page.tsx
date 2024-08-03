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
    link: '/madrid_2.jpeg',
    label: "Madrid YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_4.jpeg',
    label: "Madrid YEAR' 🇪🇦",
    year: 2022,
  },
  // {
  //   link: '/utt.jpg',
  //   label: "UTT YEAR' 🇭🇺",
  //   year: 2018,
  // },
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
              width={300}
              height={300}
              loading={index < 4 ? 'eager' : 'lazy'}
              style={{ width: '100%', height: '100%' }}
            />
            <span
              className={classNames(
                font.className,
                'text-black text-xl font-black',
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
