import { Section } from '../../../components/Section/Section';
import Image from 'next/image';
import Time from '../Time/Time';

const Profile = () => (
  <Section className="mt-4">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row">
          <Time />
          <div className="text-sm text-stone-200 text-opacity-70 md:text-md">
            • Szeged, Hungary 🇭🇺
          </div>
        </div>
        <h1 className="text-2xl font-black mt-2 md:text-3xl">
          {`Hi, I'm Richárd Nagy`}
          <span className="ml-1">👋</span>
        </h1>
        <h2 className="italic md:text-xl md:mt-2">
          Senior Javascript Engineer
        </h2>
      </div>
      <div className="flex">
        <Image
          src="/profile.jpg"
          alt="Richárd Nagy"
          width={180}
          height={180}
          className="rounded-full aspect-square object-cover hidden sm:block"
        />
      </div>
    </div>
  </Section>
);

export default Profile;
