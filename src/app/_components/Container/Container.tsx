import React from 'react';
import classNames from 'classnames';
import { ContainerProps } from './Container.types';

const Container = ({
  children,
  className,
  classNameWidth = 'md:w-9/12 xl:w-1/2',
}: ContainerProps) => (
  <div
    className={classNames(
      className,
      'mx-5 sm:mx-10 md:mx-auto',
      classNameWidth
    )}
  >
    {children}
  </div>
);

export default Container;
