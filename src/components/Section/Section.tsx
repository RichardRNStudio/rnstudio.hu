import { SectionProps } from './Section.types';

export const Section = ({
  title,
  children,
  className = 'mt-8 sm:mt-10',
}: SectionProps) => (
  <section className={className}>
    {title && (
      <h1 className="font-black text-2xl  text-black dark:text-white">
        {title}
      </h1>
    )}
    <div className="mt-4 sm:mt-6">{children}</div>
  </section>
);
