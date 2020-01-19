import { createCourseSucces } from "./courseActions";
import { courses } from "../../../tools/mockData";
import { CREATE_COURSE_SUCCESS } from "./actionsTypes";

describe("createCourseSuccess", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    // arrange
    const course = courses[0];
    const expectedAction = {
      type: CREATE_COURSE_SUCCESS,
      value: course
    };

    //act
    const action = createCourseSucces(course);

    // assert

    expect(action).toEqual(expectedAction);
  });
});
