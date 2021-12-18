const initState = {
  items: []
};

const movies = (state = initState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default movies;
