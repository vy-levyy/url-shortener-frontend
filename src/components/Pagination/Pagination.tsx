import { FC } from "react";
import { DOTS, usePagination } from "./hooks";
import './Pagination.style.scss';

export interface IProps {
  page: number;
  totalPages: number;
  onClick: (page: number) => void;
}

export const Pagination: FC<IProps> = ({ page, totalPages, onClick }) => {
  const numbers = usePagination(page, totalPages);

  return (
    <div className="pagination">
      <div className="pagination__content">
        {numbers.map((num) => {
          if (num !== DOTS) {
            return <div key={num} className="pagination__page" onClick={() => onClick(num)}>{num}</div>;
          }

          return <div key={DOTS} className="pagination__dots">...</div>;
        })}
      </div>
    </div>
  );
};
