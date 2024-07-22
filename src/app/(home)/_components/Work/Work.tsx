import { Section } from '../../../_components/Section/Section';
import WorkItem from './WorkItem/WorkItem';
import { Job } from './WorkItem/WorkItem.types';

const Jobs: Job[] = [
  {
    company: {
      name: 'One Beyond',
      link: 'https://one-beyond.com',
      logo: {
        src: '/one_beyond_logo.jpeg',
        alt: 'One Beyond logo',
      },
    },
    position: 'Senior Software Engineer',
    startDate: new Date('2019-07-22'),
    endDate: new Date(),
  },
  {
    company: {
      name: 'PC Trade Systems',
      link: 'https://pctrade.hu',
      logo: {
        src: '/pc_trade_systems_logo.jpeg',
        alt: 'PC Trade Systems logo',
      },
    },
    position: 'Junior Software Developer',
    startDate: new Date('2017-02-01'),
    endDate: new Date('2019-07-19'),
  },
  {
    company: {
      name: 'PC Trade Systems',
      link: 'https://pctrade.hu',
    },
    position: 'Intern',
    startDate: new Date('2015-05-01'),
    endDate: new Date('2017-01-31'),
  },
];

const Work = () => (
  <Section title="Work">
    <div className="flex flex-col gap-6">
      {Jobs.map((job, index) => (
        <WorkItem key={index} {...job} />
      ))}
    </div>
  </Section>
);

export default Work;
