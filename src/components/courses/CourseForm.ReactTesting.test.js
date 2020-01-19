import React from "react";
import CourseForm from "./CourseForm";
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("Should label save button as 'SAVE' when not saving", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("Should label save button as 'SAVE' when saving equal true ", () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
