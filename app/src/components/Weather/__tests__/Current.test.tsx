import React from "react";
import renderer from "react-test-renderer";
import { Current } from "../Current";

describe("Current", () => {
  it("matches snapshot", () => {
    const component = renderer.create(
      <Current
        currentTemp={27}
        description="Light rain"
        icon="lr"
        formatType="F"
        humidity={80}
        windDirection="S"
        windSpeed="20 kph"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
