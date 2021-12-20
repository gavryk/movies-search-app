const initState = {
  items: [],
  isLoading: true,
  pageNum: 1
};

const movies = (state = initState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_LOAD":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default movies;
