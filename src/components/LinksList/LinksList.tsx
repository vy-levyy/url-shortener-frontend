import { FC, ReactNode, useMemo } from "react";
import { parseClasses } from "../../helpers";
import { useClasses } from "../../hooks";
import { ILink } from "../../models";
import "./LinksList.style.scss";

export interface IProps {
  links: ILink[];
  className?: string;
  itemClassName?: string;
  header?: string;
  footer?: ReactNode;
  numByIndex?: boolean;
}

export const LinksList: FC<IProps> = ({
  links,
  className,
  itemClassName,
  header,
  footer,
  numByIndex,
}) => {
  const classNames = useClasses("links-list", className);
  const itemClassNames = useClasses("links-list__item", itemClassName);

  const items = useMemo(() => {
    return links.map(({ id, source, target, clicks }, index) => {
      const isNotEven = (index + 1) % 2 === 1;
      const notEvenClass = isNotEven ? "links-list__item_not-even" : null;
      const num = !numByIndex ? id : index + 1;

      return (
        <li key={id} className={parseClasses("list__item", notEvenClass, itemClassNames)}>
          <span className="links-list__item-id">{num}</span>
          <div className="links-list__item-source">
            <a
              className="links-list__link"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              {source}
            </a>
          </div>
          <div className="links-list__item-target">
            <a
              className="links-list__link"
              href={target}
              target="_blank"
              rel="noreferrer"
            >
              {target}
            </a>
          </div>
          <div className="links-list__item-clicks">{clicks || 0}</div>
        </li>
      );
    });
  }, [links, itemClassNames, numByIndex]);

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="links-list__container">
      {header && <h6 className="links-list__header">{header}</h6>}
      <ol className={classNames}>
        {items}
      </ol>
      <div>{footer}</div>
    </div>
  );
};
