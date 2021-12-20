import axios from "axios";
const searchApi =
  "https://api.themoviedb.org/3/search/multi?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en&query=";

//"server": "npx json-server --watch db.json --port=3001"
export const fetchMovies = (pageNum) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en&page=${pageNum}`
      )
      .then(({ data }) => {
        dispatch(setMovies(data));
        dispatch(setLoad(false));
      });
  };
};

export const searchMovies = (searchText = "") => {
  return (dispatch) => {
    axios.get(`${searchApi}'${searchText}'`).then(({ data }) => {
      dispatch(setMovies(data.results));
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

