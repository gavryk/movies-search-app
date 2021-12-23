import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setType } from "../../redux/actions/movies";
import { setSearchPageNum, setSearchText } from "../../redux/actions/search";
import { saveLang } from "../../redux/actions/settings";
import Lang from "../Lang/Lang";
import style from "./Header.module.scss";

const Header = ({ lang }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    let text = e.target.value;
    setInputText(text);
  }

  const submitSearch = () => {
    if (inputText !== '') {
      dispatch(setSearchText(inputText));
      dispatch(setSearchPageNum(1));
      setInputText("");
      navigate("/search");
    }
  }

  const goHome = () => {
    dispatch(setType('all'));
  }

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  }

  const handleLang = (lang) => {
    dispatch(saveLang(lang));
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
      <Lang lang={lang} setLang={handleLang} />
    </div>
  );
};

export default Header;
