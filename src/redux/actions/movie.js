import axios from "axios";


  export const fetchMovieInfo = (id) => {
    return (dispatch) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en`
        )
        .then(({ data }) => {
          dispatch(setMovieInfo(data));
          console.log(data);
        });
    };
  };

  export const setMovieInfo = (item) => {
    return {
      type: "SET_MOVIE_INFO",
      payload: item,
    };
  };