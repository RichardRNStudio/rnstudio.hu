import classNames from 'classnames';
import { MarketingBarItemProps } from './MarketingBarItem.types';

const MarketingBarItem = ({
  value,
  label,
  isLoadingSkeleton,
}: MarketingBarItemProps & { isLoadingSkeleton?: boolean }) => (
  <div className="flex flex-row items-center gap-2 text-zinc-500 dark:text-neutral-300">
    <div
      className={classNames(
        'flex font-protestStrike text-7xl',
        isLoadingSkeleton &&
          'bg-slate-700 text-slate-700 rounded-md h-16 animate-pulse'
      )}
    >
      {value}
    </div>
    <div
      className={classNames(
        'flex text-base font-bold text-center max-w-20',
        isLoadingSkeleton &&
          'bg-slate-700  text-slate-700 rounded-md h-16 animate-pulse'
      )}
    >
      {label}
    </div>
  </div>
);

export default MarketingBarItem;
