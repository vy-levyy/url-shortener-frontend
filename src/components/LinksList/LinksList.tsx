import { FC, useMemo } from "react";
import { useClasses } from "../../hooks";
import { ILink } from "../../models";
import { List } from "../../ui";
import './LinksList.style.scss';

interface IProps {
  links: ILink[];
  className?: string;
}

export const LinksList: FC<IProps> = ({ links, className }) => {
  const items = useMemo(() => {
    return links.map(({ id, source, target, clicks }) => {
      return (
        <>
          <span>{id}</span>
          <div className="links-list__item-content">
            <span>{source}</span>
            <span>{target}</span>
          </div>
          <span>{clicks}</span>
        </>
      );
    });
  }, [links]);

  return <List items={items} className={className} itemClassName="links-list__item" />;
};
