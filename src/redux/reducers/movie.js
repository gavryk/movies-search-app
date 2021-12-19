const initState = {
  item: {},
};


const movie = (state = initState, action) => {
  switch (action.type) {
    case "SET_MOVIE_INFO":
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default movie;
