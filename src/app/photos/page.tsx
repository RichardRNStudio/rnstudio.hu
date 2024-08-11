import { Photo } from './photo.types';
import Image from 'next/image';
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google';
import classNames from 'classnames';
import { Metadata } from 'next';
import Container from '../_components/Container/Container';

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
    label: "Madrid trip YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_4.jpg',
    label: "Madrid trip YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_1.jpg',
    label: "Madrid trip YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/madrid_2.jpg',
    label: "Madrid trip YEAR' 🇪🇦",
    year: 2022,
  },
  {
    link: '/ub_1.jpg',
    label: "UltraBalaton running YEAR' 🇭🇺",
    year: 2019,
  },
  {
    link: '/ub_2.jpg',
    label: "UltraBalaton running YEAR' 🇭🇺",
    year: 2018,
  },
];

const font = Edu_VIC_WA_NT_Beginner({ subsets: ['latin'] });

const PhotosPage = () => {
  const sortedImagesByYear = IMAGES.sort((a, b) => b.year - a.year);

  return (
    <Container className="md:w-10/12 xl:w-9/12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
        {sortedImagesByYear.map(({ link, label, year }, index) => {
          const title = label.replace('YEAR', `${year % 100}`);
          return (
            <div
              key={index}
              title={title}
              className="flex flex-col items-center gap-2 pb-2 dark:bg-white rounded-xl shadow-xl transition-transform hover:rotate-1"
            >
              <Image
                src={link}
                alt={title}
                className="rounded-t-xl"
                width={400}
                height={400}
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
    </Container>
  );
};

export default PhotosPage;
