import axios from "axios";

export const searchMovies = (searchText = "", pageNum = 1) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en&query=${searchText}&page=${pageNum}`
      )
      .then(({ data }) => {
        dispatch(setSearchMovies(data));
        dispatch(setSearchLoad(false));

      });
  };
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