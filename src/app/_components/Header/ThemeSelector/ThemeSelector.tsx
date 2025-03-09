'use client';

import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import SunIcon from '../../Icons/SunIcon';
import NightIcon from '../../Icons/NightIcon';
import { THEMES } from '@/app/_shared/config';

const ThemeSelector = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const isLight = theme === THEMES.light;

  const onSwitchTheme = () => {
    const dot = ref.current;
    if (!dot) return;
    dot.classList.remove('left-1', 'right-1');
    if (isLight) {
      dot.classList.remove('animate-switch-light');
      dot.classList.add('animate-switch-dark');
      setTheme(THEMES.dark);
      return;
    }
    dot.classList.remove('animate-switch-dark');
    dot.classList.add('animate-switch-light');
    setTheme(THEMES.light);
  };

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    dot.classList.add(isLight ? 'left-1' : 'right-1');
    dot.classList.remove('opacity-0');
    dot.classList.add('animate-fade-in');
  }, []);

  return (
    <div
      className={
        'flex flex-row justify-between p-1 border-2 rounded-2xl border-slate-900 w-16 h-8 bg-slate-500 relative cursor-pointer'
      }
      onClick={onSwitchTheme}
    >
      <div
        ref={ref}
        className={classNames(
          'opacity-0',
          'w-5 h-5 bg-white z-20 absolute rounded-full ease-linear animation-fill-forwards'
        )}
      />
      <SunIcon width={20} height={20} color="yellow" />
      <NightIcon width={20} height={20} color="black" />
    </div>
  );
};

export default ThemeSelector;
