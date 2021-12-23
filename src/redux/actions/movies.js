import axios from "axios";

export const fetchMovies = (mediaType, pageNum) => {
  return async (dispatch) => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${ process.env.REACT_APP_MOVIE_API_KEY }&language=en&page=${pageNum}`
      )
      .then(({ data }) => {
        dispatch(setMovies(data));
        dispatch(setLoad(false));
      });
  };
};

export const setMovies = (items) => {
  return {
    type: "SET_MOVIES",
    payload: items,
  };
};

export const setLoad = (type) => {
  return {
    type: "SET_LOAD",
    payload: type,
  };
};

export const setPageNum = (num) => {
  return {
    type: "SET_PAGE_NUM",
    payload: num
  }
};

export const setType = (type) => {
  return {
    type: "SET_TYPE",
    payload: type,
  };
};
