import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchMovies, searchMovies } from "../../redux/actions/movies";
import style from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    let text = e.target.value;
    setInputText(text);
  }

  const submitSearch = () => {
    dispatch(searchMovies(inputText));
    setInputText('');
    navigate("/");
  }

  const goHome = () => {
    dispatch(fetchMovies());
  }

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  }

  return (
    <div className={style.header}>
      <Link to="/" onClick={goHome} className={style.logo}>
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
          onKeyDown={enterHandler}
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
