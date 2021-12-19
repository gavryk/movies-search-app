const initState = {
  items: [],
  isLoading: true
};

const movies = (state = initState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        items: action.payload,
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

export default movies;
