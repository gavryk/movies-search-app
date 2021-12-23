import { combineReducers } from "redux";
import movie from "./movie";
import movies from "./movies";
import search from "./search";
import settings from "./settings";


const rootReducer = combineReducers({
  movies,
  movie,
  search,
  settings
});

export default rootReducer;
