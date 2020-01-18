import { CREATE_COURSE } from "./actionsTypes";

export function createCourse(course) {
  return {
    type: CREATE_COURSE,
    value: course
  };
}
