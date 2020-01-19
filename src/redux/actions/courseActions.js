import {
  LOAD_COURSES_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  CREATE_COURSE_SUCCESS,
  DELETE_COURSE_OPTIMISTIC
} from "./actionsTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        dispatch(apiCallError(error));
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

const deleCourseOptimistic = course => {
  return {
    type: DELETE_COURSE_OPTIMISTIC,
    value: course
  };
};

// export const saveCourse = course => dispatch => {
//   dispatch(beginApiCall());
//   courseApi
//     .saveCourse(course)
//     .then(savedCourse => {
//       course.id
//         ? dispatch(updateCourseSuccess(savedCourse))
//         : dispatch(createCourseSucces(savedCourse));
//     })
//     .catch(error => {
//       throw error;
//     });
// };

export const saveCourse = course => {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSucces(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

export const deleteCourse = course => {
  return function(dispatch) {
    dispatch(deleCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
};
