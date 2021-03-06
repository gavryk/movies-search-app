import axios from "axios";

export const searchMovies = (searchText = "", pageNum = 1) => {
  return async (dispatch, getState) => {
    const { appLang } = getState().settings;
    await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=${appLang}&query=${searchText}&page=${pageNum}`
      )
      .then(({ data }) => {
        dispatch(setSearchMovies(data));
        dispatch(setSearchLoad(false));
        saveSearchText(searchText);
      });
  };
};

//Save in local storage, for refresh page
export const saveSearchText = (text) => {
  try {
    const txt = JSON.stringify(text);
    localStorage.setItem("search", txt);
  } catch (err) {
    //Ignore write errors.
  }
};

export const getSrchTxt = () => {
  try {
    const txt = localStorage.getItem("search");
    return JSON.parse(txt);
  } catch (err) {
    console.log(err);
  }
};

export const setSearchMovies = (items) => {
  return {
    type: "SET_SEARCH",
    payload: items,
  };
};

export const setSearchLoad = (type) => {
  return {
    type: "SET_SEARCH_LOAD",
    payload: type,
  };
};

export const setSearchPageNum = (num) => {
  return {
    type: "SET_SEARCH_PAGE_NUM",
    payload: num,
  };
};

export const setSearchText = (txt) => {
  return {
    type: "SET_SEARCH_TEXT",
    payload: txt
  }
};