export const saveLang = (lang) => {
  return dispatch => {
    try {
      const l = JSON.stringify(lang);
      localStorage.setItem("lang", l);
      dispatch(setLang(lang));
    } catch (err) {
      //Ignore write errors.
    }
  }
};

export const getLang = () => {
  try {
    const txt = localStorage.getItem("lang");
    return JSON.parse(txt);
  } catch (err) {
    console.log(err);
  }
};

export const setLang = (lang) => {
  return {
    type: "SET_LANG",
    payload: lang,
  };
};
