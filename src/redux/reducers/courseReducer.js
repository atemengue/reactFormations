import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionsTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.value }];
    case LOAD_COURSES_SUCCESS:
      return action.value;
    default:
      return state;
  }
}
