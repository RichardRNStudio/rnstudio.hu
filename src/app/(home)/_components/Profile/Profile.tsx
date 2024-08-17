import Image from 'next/image';
import Time from './Time/Time';
import { Section } from '../../../_components/Section/Section';
import Emoji from '@/app/_components/Emoji/Emoji';

const Profile = () => (
  <Section className="mt-4">
    <div className="flex flex-col sm:flex-row justify-between items-center text-black dark:text-white">
      <div className="flex flex-col justify-center order-last sm:order-first">
        <div className="hidden sm:flex flex-row items-center justify-between max-w-72">
          <Time />
          <div className="text-sm text-stone-600 dark:text-stone-200 text-opacity-70 md:text-md">
            Szeged, Hungary
          </div>
          <Emoji label="hungarian-flag" className="ml-1">
            🇭🇺
          </Emoji>
        </div>
        <h1 className="sm:hidden text-2xl font-black text-center mt-2">
          Richárd Nagy
        </h1>
        <h1 className="hidden font-black mt-2 md:text-3xl sm:block">
          {`Hi, I'm Richárd Nagy`}
          <Emoji label="wave" className="ml-1">
            👋
          </Emoji>
        </h1>
        <h2 className="italic md:text-xl md:mt-2">
          Senior Javascript Engineer
        </h2>
      </div>
      <div className="relative flex order-first sm:order-last w-40 h-40 sm:w-52 sm:h-52">
        <Image
          src="/profile.jpg"
          alt="Richárd Nagy"
          layout="fill"
          className="rounded-full aspect-square object-cover"
        />
      </div>
    </div>
  </Section>
);

export default Profile;
