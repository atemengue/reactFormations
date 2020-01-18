import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReduce";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
