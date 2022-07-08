import { FC, ReactNode } from "react";
import { parseClasses } from "../../helpers";
import { useClasses } from "../../hooks";
import "./List.style.scss";

interface IProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
}

export const List: FC<IProps> = ({ items, className, itemClassName }) => {
  const classNames = useClasses('list', className);

  if (items.length === 0) {
    return null;
  }

  return (
    <ol className={classNames}>
      {items.map((item, index) => {
        const isNotEven = (index + 1) % 2 === 1;
        const className = isNotEven ? 'list__item_not-even' : '';

        return <li className={parseClasses('list__item', className, itemClassName)}>{item}</li>;
      })}
    </ol>
  );
};
