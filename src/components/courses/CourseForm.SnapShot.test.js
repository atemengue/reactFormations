import React from "react";
import renderer from "react-test-renderer";
import CourseFrom from "./CourseForm";
import { courses, authors } from "../../../tools/mockData";

it("le bouton contient 'Saving.. ' lorsque saving est true", () => {
  const tree = renderer.create(
    <CourseFrom
      course={courses[0]}
      authors={authors}
      saving
      onSave={jest.fn()}
      onChange={jest.fn()}
    />
  );

  expect(tree).toMatchSnapshot();
});

it("le bouton contient 'Save... ' lorsque saving est false", () => {
  const tree = renderer.create(
    <CourseFrom
      course={courses[0]}
      authors={authors}
      saving={false}
      onSave={jest.fn()}
      onChange={jest.fn()}
    />
  );

  expect(tree).toMatchSnapshot();
});
