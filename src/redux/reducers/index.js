import { combineReducers } from "redux";
import movie from "./movie";
import movies from "./movies";


const rootReducer = combineReducers({
  movies,
  movie
});

export default rootReducer;
