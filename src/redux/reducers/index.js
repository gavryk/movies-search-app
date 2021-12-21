import { combineReducers } from "redux";
import movie from "./movie";
import movies from "./movies";
import search from "./search";


const rootReducer = combineReducers({
  movies,
  movie,
  search
});

export default rootReducer;
