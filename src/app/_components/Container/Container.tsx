import React from 'react';
import classNames from 'classnames';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => (
  <div
    className={classNames(
      className,
      'mx-5 sm:mx-10 md:w-9/12 md:mx-auto xl:w-1/2'
    )}
  >
    {children}
  </div>
);

export default Container;
