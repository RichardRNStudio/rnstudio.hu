import React from 'react';
import classNames from 'classnames';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => (
  <div className={classNames(className, 'w-7/12 mx-auto')}>{children}</div>
);

export default Container;
