import React from 'react'
import { FC } from 'react'
import { ButtonHTMLAttributes } from 'react'
import { useClasses } from '../../hooks';
import './Button.style.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IProps> = ({ children, className, ...restProps }) => {
  const classNames = useClasses('button', className);

  return (
    <button className={classNames} {...restProps}>{children}</button>
  )
}
