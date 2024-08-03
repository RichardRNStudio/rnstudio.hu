import { PC_CONTROLLER_PROJECT } from '@/app/_shared/config';
import { Metadata } from 'next';
import Image from 'next/image';
import Template from '../_components/Template/Template';

export const metadata: Metadata = {
  title: PC_CONTROLLER_PROJECT.name,
  alternates: {
    canonical: '/projects/pccontroller',
  },
};

const PCControllerPage = () => (
  <Template
    title={PC_CONTROLLER_PROJECT.name}
    year={PC_CONTROLLER_PROJECT.year}
    stacks={PC_CONTROLLER_PROJECT.stacks}
    image={PC_CONTROLLER_PROJECT?.image}
  >
    <p className="mb-3 text-justify">
      <b>{PC_CONTROLLER_PROJECT.name}</b> is a cutting-edge mobile application
      developed with React Native and TypeScript, designed to bring the power of
      your Windows PC right to your Android phone. This app transforms your
      smartphone into a versatile remote control, providing seamless interaction
      with your PC from anywhere in the room.
    </p>
    <h2 className="mb-3 text-md font-black">Key Features:</h2>
    <ul className="ml-2 sm:ml-3 space-y-4 list-disc list-inside text-justify">
      <li>
        <strong>Intuitive Dashboard:</strong> The user-friendly dashboard is
        equipped with essential control buttons that include:
        <ol className="ps-5 mt-4 space-y-2 list-disc list-inside">
          <li>
            <strong>Volume Changer:</strong> Adjust your {`PC's`} volume with
            ease.
          </li>
          <li>
            <strong>Light Settings:</strong> Modify the lighting settings of
            your setup.
          </li>
          <li>
            <strong>Media Controls:</strong> Play, pause, and mute your media
            instantly.
          </li>
        </ol>
      </li>
      <li>
        <strong>Real-Time Monitoring:</strong> Using Google Firebase, the app
        ensures reliable real-time data synchronization and user authentication.
      </li>
      <li>
        <strong>User Analytics:</strong> Integrated with Google Analytics, PC
        Controller tracks user actions and provides valuable insights to
        continuously enhance the {`app's`} functionality and user experience.
      </li>
    </ul>
    <h2 className="my-3 text-md font-black">Backend Integration:</h2>
    <ul className="ml-2 sm:ml-3 space-y-4 list-disc list-inside text-justify">
      <li>
        <strong>Robust Backend:</strong> The backend of the app is a C# Windows
        application that processes all incoming requests efficiently, ensuring
        smooth and responsive control of your PC.
      </li>
    </ul>
    <p className="my-5 text-justify">
      Experience the convenience of controlling your Windows PC right from your
      Android phone with PC Controller. Whether you need to adjust the volume,
      control media playback, or change light settings, this app has you
      covered.
    </p>
    <a
      href={PC_CONTROLLER_PROJECT.link ?? '#'}
      rel="noopener noreferrer"
      target="_blank"
      title={PC_CONTROLLER_PROJECT.name}
    >
      <Image
        src="https://img.shields.io/badge/-Available_on_Google_Play-414141?style=flat&logo=google-play&logoColor=FFF"
        width={250}
        height={75}
        alt="Available on Google Play"
      />
    </a>
  </Template>
);

export default PCControllerPage;
