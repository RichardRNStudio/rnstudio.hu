import { Section } from '@/components/Section/Section';
import WorkItem from './WorkItem/WorkItem';

const Work = () => (
  <Section title="Work">
    <div className="flex flex-col gap-6">
      <WorkItem
        src="/one_beyond_logo.jpeg"
        alt="One Beyond logo"
        companyName="One Beyond"
        position="Senior Software Engineer"
        startDate="2019"
        endDate="Now"
        link="https://onebeyond.com"
      />
      <WorkItem
        src="/pc_trade_systems_logo.jpeg"
        alt="PC Trade Systems logo"
        companyName="PC Trade Systems"
        position="Junior Software Developer"
        startDate="2017"
        endDate="2019"
        link="https://pctrade.hu"
      />
      <WorkItem
        companyName="PC Trade Systems"
        position="Intern"
        startDate="2015"
        endDate="2017"
        link="https://pctrade.hu"
      />
    </div>
  </Section>
);

export default Work;
