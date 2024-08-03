'use client';

import React, { useEffect, useState } from 'react';

const getDate = () =>
  new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

const Time = () => {
  const [time, setTime] = useState<string>(getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-sm text-stone-600 dark:text-stone-200 text-opacity-70 min-w-36.5"
      suppressHydrationWarning
    >
      {time}
    </div>
  );
};

export default Time;
