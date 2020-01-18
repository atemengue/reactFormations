import {
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  CREATE_COURSE_SUCCESS
} from "./actionsTypes";
import * as courseApi from "../../api/courseApi";

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

const updateCourseSuccess = course => {
  return {
    type: UPDATE_COURSE_SUCCESS,
    value: course
  };
};

const createCourseSucces = course => {
  return {
    type: CREATE_COURSE_SUCCESS,
    value: course
  };
};

export const saveCourse = course => dispatch =>
  courseApi
    .saveCourse(course)
    .then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSucces(savedCourse));
    })
    .catch(error => {
      throw error;
    });
