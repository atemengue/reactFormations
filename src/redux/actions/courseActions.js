import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "./actionsTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    value: course
  };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: LOAD_COURSES_SUCCESS,
    value: courses
  };
}
