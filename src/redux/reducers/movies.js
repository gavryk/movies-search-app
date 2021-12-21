const initState = {
  items: [],
  isLoading: true,
  pageNum: 1,
  mediaType: 'all'
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
    case "SET_PAGE_NUM":
      return {
        ...state,
        pageNum: action.payload
      }  
    case "SET_TYPE":
      return {
        ...state,
        mediaType: action.payload
      };  
    default:
      return state;
  }
};

export default movies;
