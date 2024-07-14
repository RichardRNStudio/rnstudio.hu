'use client';

import React, { useEffect } from 'react';

const Time = () => {
  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-stone-600 dark:text-stone-200 text-opacity-70 min-w-36.5">
      {time.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      })}
    </div>
  );
};

export default Time;
