import axios from "axios";
const searchApi =
  "https://api.themoviedb.org/3/search/multi?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en&query=";
const api =
  "https://api.themoviedb.org/3/trending/all/week?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en";

//"server": "npx json-server --watch db.json --port=3001"
export const fetchMovies = () => {
  return (dispatch) => {
    axios.get(`${api}`).then(({ data }) => {
      dispatch(setMovies(data.results));
      dispatch(setLoading(false));
    });
  };
};

export const searchMovies = (searchText = "") => {
  return (dispatch) => {
    axios.get(`${searchApi}'${searchText}'`).then(({ data }) => {
      dispatch(setMovies(data.results));
      dispatch(setLoading(false));
    });
  };
};

export const setMovies = (items) => {
  return {
    type: "SET_MOVIES",
    payload: items,
  };
};

export const setLoading = (type) => {
  return {
    type: "SET_LOADING",
    payload: type,
  };
};

