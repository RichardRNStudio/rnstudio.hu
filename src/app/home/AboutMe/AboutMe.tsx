import { Section } from '../../../components/Section/Section';

const AboutMe = () => {
  return (
    <Section title="Introduction">
      <div className="flex flex-col">
        <p className="leading-7">
          {`I'm a Javascript Engineer living in Hungary. I have a passion for coding and love diving into technologies like
        JavaScript, TypeScript, React, Next.js, and React Native. Continuously
        learning and exploring new stacks keeps me energized and motivated.`}
        </p>
        <p className="my-2 leading-7">
          {`Currently, I'm working at`}{' '}
          <a
            href="https://one-beyond.com"
            className="underline hover:text-gray-300"
            target="_blank"
          >
            One Beyond
          </a>
          {` as a Senior Frontend Engineer, where I'm focusing on developing a large booking system that aims
        to enhance user experience and streamline booking processes through advanced frontend technologies.`}
        </p>
        <p className="leading-7">
          {`When I'm not coding, I enjoy gardening, engaging in various sports,
        mostly running, and traveling with my family. My commitment to
        innovation and personal growth fuels my journey in the ever-evolving
        world of frontend development.`}
        </p>
      </div>
    </Section>
  );
};

export default AboutMe;
