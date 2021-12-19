import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies } from "../../redux/actions/movies";
import style from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    let text = e.target.value;
    setInputText(text);
  }

  const submitSearch = () => {
    dispatch(fetchMovies(inputText));
    setInputText('');
  }

  return (
    <div className={style.header}>
      <Link to="/" className={style.logo}>
        <h2>Movie-Search</h2>
      </Link>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Movie..."
          aria-label="Search Movie..."
          aria-describedby="button-addon2"
          onChange={inputHandler}
          value={inputText}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={() => submitSearch()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
