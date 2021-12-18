import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <h2>Movie-Search</h2>
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search Movie..."
          aria-label="Search Movie..."
          aria-describedby="button-addon2"
        />
        <button class="btn btn-outline-success" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
