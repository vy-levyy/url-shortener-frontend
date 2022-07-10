import { FC } from "react";
import { ILinksProps, IPaginationProps, LinksList, Pagination } from "../../components";
import "./PaginationLinksList.style.scss";

interface IProps extends Omit<ILinksProps, "footer">, IPaginationProps {}

export const PaginationLinksList: FC<IProps> = ({ page, totalPages, onClick, ...linksListProps }) => {
  const footer = (
    <div className="pagination-links-list__footer">
      <Pagination page={page} totalPages={totalPages} onClick={onClick} />
    </div>
  );

  return <LinksList {...linksListProps} footer={footer} />
};
