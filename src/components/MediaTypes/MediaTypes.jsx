import React from "react";
import style from "./MediaTypes.module.scss";

const MediaTypes = React.memo(({ activeCategory, typesList, onClickType }) => {
  return (
    <ul>
      <li
        className={`${style.btn} ${activeCategory === null && style.active}`}
        onClick={() => onClickType("all")}
      >
        All
      </li>
      {typesList &&
        typesList.map((cat, index) => {
          return (
            <li
              className={`${style.btn} ${
                activeCategory === index && style.active
              }`}
              onClick={() =>
                onClickType(cat.toLowerCase().replace("shows", "").trim())
              }
              key={`${cat}_${index}`}
            >
              {cat}
            </li>
          );
        })}
    </ul>
  );
});

export default MediaTypes;
