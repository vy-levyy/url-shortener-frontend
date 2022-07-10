import { forwardRef, InputHTMLAttributes } from "react";
import { useClasses } from "../../hooks";
import './Input.style.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputForwarRef = forwardRef<HTMLInputElement, IProps>(({ className, ...restProps }, ref) => {
  const classNames = useClasses('input', className);

  return (
    <input ref={ref} className={classNames} {...restProps} />
  );
});

export const Input = InputForwarRef;
