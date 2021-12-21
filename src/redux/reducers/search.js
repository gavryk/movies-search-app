import { getSrchTxt } from "../actions/search";

const initState = {
  items: [],
  isLoading: true,
  searchText: getSrchTxt(),
  pageNum: 1,
};

const search = (state = initState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_SEARCH_LOAD":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_SEARCH_PAGE_NUM":
      return {
        ...state,
        pageNum: action.payload,
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default search;
