import {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS
} from "../actions/actionsTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case CREATE_COURSE_SUCCESS:
      return [...state, { ...action.value }];
    case UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.value.id ? action.value : course
      );
    case LOAD_COURSES_SUCCESS:
      return action.value;
    default:
      return state;
  }
}
