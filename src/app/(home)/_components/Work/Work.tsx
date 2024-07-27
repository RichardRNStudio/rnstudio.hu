import { JOBS } from '@/app/_shared/config';
import { Section } from '../../../_components/Section/Section';
import WorkItem from './WorkItem/WorkItem';

const Work = () => (
  <Section title="Work">
    <div className="flex flex-col gap-6">
      {JOBS.map((job, index) => (
        <WorkItem key={index} {...job} />
      ))}
    </div>
  </Section>
);

export default Work;
