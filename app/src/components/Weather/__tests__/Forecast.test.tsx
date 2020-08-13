import React from "react";
import renderer from "react-test-renderer";
import { Day } from "../Day";
import { IDay } from "../../../types/weather";
import { Forecast } from "../Forecast";

describe("Forecast", () => {
  it("matches snapshot", () => {
    const forecasts: IDay[] = [
      {
        id: "a",
        date: "2020-08-01",
        description: "Light rain",
        temp: 20.5,
        icon: "lr",
        windSpeed: "10 kph",
        windDirection: "S",
        humidity: 80,
        max: 34,
        min: 12,
      },
      {
        id: "b",
        date: "2020-08-02",
        description: "Clear",
        icon: "c",
        windSpeed: "20 kph",
        windDirection: "S",
        humidity: 80,
        max: 30,
        min: 15,
      },
    ];
    const component = renderer.create(<Forecast forecasts={forecasts} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
