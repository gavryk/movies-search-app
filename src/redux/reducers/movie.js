const initState = {
  item: {},
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
    default:
      return state;
  }
};

export default movie;
