import React from "react";
import renderer from "react-test-renderer";
import {Icon} from "../Icon";

describe("Icon", () => {
  it("matches snapshot", () => {
    const component = renderer.create(
      <Icon
       icon="icon"
       description="description"/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
