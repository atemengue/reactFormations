import React from "react";
import { mount, shallow } from "enzyme";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

it(" header contains 3 NavLinks via Shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

it("header contains 3 anchors via mount: NB: real DOM", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
