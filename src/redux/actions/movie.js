import axios from "axios";


  export const fetchMovieInfo = (id, type) => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
          )
          .then(({ data }) => {
            dispatch(setMovieInfo(data));
            dispatch(setLoading(false));
          });
      } catch(e) {
        console.log(e);
      }
    };
  };

  export const getMovieVideo = (id, type) => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        await axios
          .get(
            `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en`
          )
          .then(({ data }) => {
            dispatch(setMovieVideo(data.results));
            dispatch(setLoading(false));
          });
      } catch (e) {
        console.log(e);
      }
    };
  };

  
  export const setMovieInfo = (item) => {
    return {
      type: "SET_MOVIE_INFO",
      payload: item,
    };
  };

  export const setMovieVideo = (videos) => {
    return {
      type: "SET_MOVIE_VIDEO",
      payload: videos,
    };
  };

  export const setLoading = (type) => {
    return {
      type: "SET_LOADING",
      payload: type,
    };
  };