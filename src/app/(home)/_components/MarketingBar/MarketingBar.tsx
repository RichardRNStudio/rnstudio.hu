import { Section } from '@/app/_components/Section/Section';
import { Suspense } from 'react';
import { MARKETING_BAR_ITEMS } from '@/app/_shared/config';
import MarketingBarList from '@/app/(home)/_components/MarketingBar/MarketingBarList/MarketingBarList';
import MarketingBarItem from '@/app/_components/MarketingBarItem/MarketingBarItem';

const MarketingBar = () => (
  <Section title="">
    <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:justify-between">
      <Suspense
        fallback={MARKETING_BAR_ITEMS.map((item, key) => (
          <MarketingBarItem
            key={`${key}-loading-skeleton`}
            {...item}
            isLoadingSkeleton={item.isAPIRequired}
          />
        ))}
      >
        <MarketingBarList />
      </Suspense>
    </div>
  </Section>
);

export default MarketingBar;
