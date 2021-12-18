import axios from "axios";
const api =
  "https://api.themoviedb.org/3/search/multi?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=ru&query=''";

//"server": "npx json-server --watch db.json --port=3001"
export const fetchMovies = () => {
  return (dispatch) => {
    axios
      .get(`${api}`)
      .then(({ data }) => {
        dispatch(setMovies(data.results));
      });
  };
};

export const setMovies = (items) => {
  return {
    type: "SET_MOVIES",
    payload: items,
  };
};

