import { SectionProps } from './Section.types';

export const Section = ({
  title,
  children,
  className = 'mt-8',
}: SectionProps) => (
  <section className={className}>
    {title && <h1 className="font-black text-2xl">{title}</h1>}
    <div className="mt-4">{children}</div>
  </section>
);
