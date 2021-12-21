import React, { useState } from "react";
import style from './Paginator.module.scss';

const Paginator = ({ page, totalPages, onChangedPage }) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  let [portionNumber, setPortionNumber] = useState(1);

  let portionCount = Math.ceil(totalPages / 20);

  let leftPortionPageNumber = (portionNumber - 1) * 20 + 1;
  let rightPortionPageNumber = portionNumber * 20;

  return (
    <div className={style.paginatorWrapper}>
      <nav
        aria-label="page_navigation"
        className="d-flex justify-content-center p-2"
      >
        <ul className="pagination">
          {/*<li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
          {portionNumber > 1 && (
            <li
              className={`${ style.pageItem } pageItem`}
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              <span className="page-link"> Previous </span>
            </li>
          )}
          {pages
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                <li
                  key={p}
                  onClick={(e) => {
                    onChangedPage(p);
                  }}
                  className={`page-item ${ style.pageItem } ${page === p ? style.currentPage : ""}`}
                >
                  <span
                    className={`${page === p ? "text-white" : ""} page-link`}
                  >
                    {p}
                  </span>
                </li>
              );
            })}
          {portionCount > portionNumber && (
            <li
              className={`page-item ${ style.pageItem }`}
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              <span className="page-link"> Next </span>
            </li>
          )}
          {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
        </ul>
      </nav>
    </div>
  );
};

export default Paginator;
