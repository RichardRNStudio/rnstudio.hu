'use client';

import NightIcon from '@/components/Icons/NightIcon';
import SunIcon from '@/components/Icons/SunIcon';
import { THEMES } from '@/shared/config';
import classNames from 'classnames';
import { useTheme } from 'next-themes';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === THEMES.light;
  return (
    <div
      className={
        'flex flex-row justify-between p-1 border-2 rounded-2xl border-slate-900 w-16 h-8 bg-slate-500 shadow-lg relative cursor-pointer'
      }
      onClick={() => setTheme(isLight ? THEMES.dark : THEMES.light)}
    >
      <div
        className={classNames(
          !isLight ? 'animate-switch-dark' : 'animate-switch-light',
          'w-5 h-5 bg-white z-10 absolute rounded-full ease-linear animation-fill-forwards'
        )}
      />
      <SunIcon width={20} height={20} color="yellow" className="flex" />
      <NightIcon width={20} height={20} color="black" className="flex" />
    </div>
  );
};

export default ThemeSelector;
