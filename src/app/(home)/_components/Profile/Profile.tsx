'use client';

import Emoji from '@/app/_components/Emoji/Emoji';
import Image from 'next/image';
import { Section } from '../../../_components/Section/Section';
import { useEffect, useRef, type CSSProperties } from 'react';

const Profile = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const circle = svg.querySelector('circle');

    // Function to generate random dash patterns and speeds
    function randomizeLines() {
      const numSegments = Math.floor(Math.random() * 5) + 8; // Random number of segments (8-12)
      const segments = [];

      for (let i = 0; i < numSegments; i++) {
        const lineLength = Math.random() * 80 + 20; // Random line length (20-80px)
        const gapLength = Math.random() * 30 + 30; // Random gap length (30-60px)
        segments.push(`${lineLength} ${gapLength}`);
      }

      // Apply the dash pattern
      circle.setAttribute('stroke-dasharray', segments.join(' '));

      // Set a random animation duration (8-15 seconds)
      const newDuration = (Math.random() * 20 + 50).toFixed(1);
      svg.style.setProperty('--orbit-duration', `${newDuration}s`);
    }

    // Initial randomization
    randomizeLines();

    // Randomize on each animation iteration
    svg.addEventListener('animationiteration', randomizeLines);

    return () => {
      svg.removeEventListener('animationiteration', randomizeLines);
    };
  }, []);

  return (
    <Section className="mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-center text-black dark:text-white">
        <div className="flex flex-col justify-center order-last sm:order-first sm:gap-3">
          {/* <div className="hidden sm:flex flex-row items-center justify-between max-w-72">
          <Time />
          <div className="text-sm text-stone-600 dark:text-stone-200 text-opacity-70 md:text-md">
            Szeged, Hungary
          </div>
          <Emoji label="hungarian-flag" className="ml-1">
            🇭🇺
          </Emoji>
        </div> */}
          {/* <h1 className="sm:hidden text-2xl font-black text-center mt-2">
          Richárd Nagy
        </h1> */}
          <h2 className="md:text-xl md:mt-2 tracking-wide">
            Senior Javascript Engineer
          </h2>
          <div className="flex flex-row items-center gap-1">
            <h2 className="font-black text-6xl tracking-wide">{`Hello`}</h2>
            <Emoji label="wave" className="ml-1 text-6xl">
              👋
            </Emoji>
            <h2 className="font-black text-6xl tracking-wide">{`I'm`}</h2>
          </div>
          <h1 className="font-black text-7xl text-custom-blue-2 tracking-wide">
            Richárd Nagy
          </h1>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Profile Picture */}
          <div className="relative w-[480px] h-[480px] z-10">
            <Image
              src="/profile.png"
              alt="Profile"
              layout="fill"
              className="rounded-full aspect-square object-cover"
            />
          </div>

          <div className="absolute animate-rotate">
            <svg
              ref={svgRef}
              width="500"
              height="500"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              style={{ '--orbit-duration': '10s' } as CSSProperties}
              className="animate-orbit"
            >
              <circle
                cx="250"
                cy="250"
                r="245" // Radius of the circle
                stroke="#0084f1" // Line color
                strokeWidth="10" // Line thickness
                fill="none" // No fill color
                strokeDasharray="40 40" // Default dash pattern (will be replaced dynamically)
                strokeDashoffset="0" // No offset initially
              />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
