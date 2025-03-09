import { JOBS } from '@/app/_shared/config';
import classNames from 'classnames';
import { Section } from '../../../_components/Section/Section';
import WorkItem from './WorkItem/WorkItem';

const Work = () => (
  <Section title="Work">
    <div className="flex flex-col gap-6 relative group">
      <div
        className={classNames(
          'flex dark:bg-zinc-800 bg-zinc-300 min-h-18 w-full rounded-md absolute top-0 z-0',
          'opacity-0 transition-all duration-300 group-hover:opacity-100'
        )}
        style={{ transform: 'translateY(var(--bar-offset, 0px))' }}
      />
      {JOBS.map((job, index) => (
        <WorkItem key={index} {...job} />
      ))}
    </div>
  </Section>
);

export default Work;
