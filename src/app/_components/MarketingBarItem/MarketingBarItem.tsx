'use client';

import classNames from 'classnames';
import { MarketingBarItemProps } from './MarketingBarItem.types';
import { useEffect, useState } from 'react';

const MarketingBarItem = ({
  value,
  label,
  duration,
  isLoadingSkeleton,
}: MarketingBarItemProps & { isLoadingSkeleton?: boolean }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const increment = value / (duration / 50);
    console.log({ increment });
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + increment;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center justify-center gap-4 text-zinc-500 dark:text-neutral-300 min-w-52">
      <div
        className={classNames(
          'flex font-protestStrike text-7xl',
          isLoadingSkeleton &&
            'bg-slate-700 text-slate-700 rounded-md h-16 animate-pulse'
        )}
      >
        {Math.round(count)}
      </div>
      <div
        className={classNames(
          'flex text-base font-bold text-left max-w-20 opacity-80'
        )}
      >
        {label}
      </div>
    </div>
  );
};

export default MarketingBarItem;
