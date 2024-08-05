import { LinkProps } from 'next/link';
import { STORAGE_ITEMS } from './config';

export type LocalStorageItemValue = {
  [STORAGE_ITEMS.OPEN_TO_WORK_CLOSED]: boolean;
};

type LocalStorageItems = typeof STORAGE_ITEMS;
export type LocalStorageItem = LocalStorageItems[keyof LocalStorageItems];

export type NavigationLink = {
  index: number;
  href: LinkProps['href'];
  label: string;
  isHidden?: boolean;
  isAvailable?: boolean;
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority: number;
};
