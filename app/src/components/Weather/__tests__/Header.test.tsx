import React from "react";
import renderer from "react-test-renderer";
import { Header } from "../Header";

describe("Header", () => {
  it("matches snapshot", () => {
    const component = renderer.create(
      <Header location={"Melbourne"} formatType={"C"} current={"Clear"} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
