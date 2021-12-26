import React from "react";
import style from "./MediaTypes.module.scss";

const MediaTypes = React.memo(({ activeType, typesList, onClickType }) => {
  
  
  return (
    <ul className={ style.typesList }>
      <li
        className={`${style.btn} ${activeType === 'all' ? style.active : ''}`}
        onClick={() => onClickType("all")}
      >
        All
      </li>
      {typesList &&
        typesList.map((cat, index) => {
          return (
            <li
              className={`${style.btn} ${
                activeType === cat.toLowerCase().replace("shows", "").trim() ? style.active : ''
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
