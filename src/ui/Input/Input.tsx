import { FC, InputHTMLAttributes } from "react";
import { useClasses } from "../../hooks";
import './Input.style.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IProps> = ({ className, ...restProps }) => {
  const classNames = useClasses('input', className);

  return (
    <input className={classNames} {...restProps} />
  );
};
