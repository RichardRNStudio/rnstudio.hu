import { LocalStorageItem, LocalStorageItemValue } from './utils.types';

export const getLocalStorageItem = <
  R extends LocalStorageItemValue[LocalStorageItem],
>(
  key: LocalStorageItem
): R | null => {
  try {
    const item = window.localStorage.getItem(key);
    return typeof item === 'string' ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const setLocalStorageItem = <
  R extends LocalStorageItemValue[LocalStorageItem],
>(
  key: LocalStorageItem,
  value: R
) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return null;
  }
};
