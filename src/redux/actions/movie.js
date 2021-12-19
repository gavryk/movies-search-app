import axios from "axios";


  export const fetchMovieInfo = (id, type) => {
    return (dispatch) => {
      axios
        .get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=efea5188a7f43aa1303c12cb1ad8a604&language=en`
        )
        .then(({ data }) => {
          dispatch(setMovieInfo(data));
          dispatch(setLoading(false));
        });
    };
  };

  export const setMovieInfo = (item) => {
    return {
      type: "SET_MOVIE_INFO",
      payload: item,
    };
  };

  export const setType = (type) => {
    return {
      type: "SET_MOVIE_TYPE",
      payload: type
    }
  }

  export const setLoading = (type) => {
    return {
      type: "SET_LOADING",
      payload: type,
    };
  };