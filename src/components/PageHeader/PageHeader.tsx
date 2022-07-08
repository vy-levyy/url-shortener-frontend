import React, { FC } from 'react'
import { ReactNode } from 'react';
import { useClasses } from '../../hooks';
import './PageHeader.style.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const PageHeader: FC<IProps> = ({ children, className }) => {
  const classNames = useClasses('page-header', className);

  return (
    <header className={classNames}>{children}</header>
  )
}
