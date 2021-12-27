import React, { useEffect, useRef, useState } from "react";
import style from "./Lang.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Flags from 'country-flag-icons/react/3x2'

const langsList = [
  { label: "EN", value: "en-US", flag: <Flags.US /> },
  { label: "DE", value: "de-DE", flag: <Flags.DE /> },
  { label: "RU", value: "ru-RU", flag: <Flags.RU /> },
  { label: "ES", value: "es-ES", flag: <Flags.ES /> },
  { label: "PL", value: "pl-PL", flag: <Flags.PL /> },
];

const Lang = React.memo(({ lang, setLang }) => {
  const [visibleLangs, setVisibleLangs] = useState(false);
  let activeLang = langsList.find((obj) => obj.value === lang);
  const langRef = useRef();

  const toggleVisibleList = () => {
    setVisibleLangs(!visibleLangs);
  };

  const selectLang = (lang) => {
    setLang(lang);
    setVisibleLangs(false);
  };

  const clickOffLangsPopup = (event) => {
    let path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(langRef.current)) {
      setVisibleLangs(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", clickOffLangsPopup);
  }, []);

  return (
    <div ref={langRef} className={style.dropdown}>
      <div className={style.langLabel}>
        <span
          onClick={toggleVisibleList}
          className={`btn dropdown-header ${style.activeLabelFlex}`}
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className={style.flagIcon}>{activeLang.flag}</span>
          <span className={style.selectLang}>{activeLang.label}</span>
          <b className={`mx-2 ${visibleLangs ? style.caretActive : ""}`}>
            <FontAwesomeIcon icon={faCaretDown} />
          </b>
        </span>
      </div>
      <ul
        id="sort-dropdown-menu"
        className={`${style.dropdownMenu} ${
          visibleLangs && style.visibleLangList
        } `}
        aria-labelledby="dropdownMenuLink"
      >
        {langsList &&
          langsList.map(function (el, index) {
            return (
              <li
                key={`${el.label}_${index}`}
                onClick={() => selectLang(el.value)}
                className={`dropdown-item ${lang === el.value && style.active}`}
              >
                <div className={style.flagIcon}>{el.flag}</div>
                <span className={style.langName}>{el.label}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default Lang;
