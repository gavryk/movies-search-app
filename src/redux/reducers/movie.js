const initState = {
  item: {},
  videos: [],
  isLoading: true
};

const movie = (state = initState, action) => {
  switch (action.type) {
    case "SET_MOVIE_INFO":
      return {
        ...state,
        item: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_MOVIE_VIDEO":
      return {
        ...state,
        videos: action.payload
      }
    default:
      return state;
  }
};

export default movie;
