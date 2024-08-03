import { STORAGE_ITEMS } from './constants';

export type LocalStorageItemValue = {
  [STORAGE_ITEMS.OPEN_TO_WORK_CLOSED]: boolean;
};

type LocalStorageItems = typeof STORAGE_ITEMS;
export type LocalStorageItem = LocalStorageItems[keyof LocalStorageItems];
