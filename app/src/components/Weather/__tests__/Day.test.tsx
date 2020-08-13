import React from "react";
import renderer from "react-test-renderer";
import { Day } from "../Day";

describe("Day", () => {
  it("matches snapshot today", () => {
    const component = renderer.create(
      <Day
        description="Light rain"
        icon="lr"
        max={30}
        min={20}
        day={"2020-02-19"}
        today={true}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("matches snapshot not today", () => {
    const component = renderer.create(
      <Day
        description="Light rain"
        icon="lr"
        max={30}
        min={20}
        day={"2020-02-19"}
        today={true}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
