import React from "react";
import renderer from "react-test-renderer";

import { AppContextProvider, useAppContext } from "../AppContext";
import * as weatherService from "../../services/MetaweatherService";

jest.mock("../../services/MetaweatherService");
const mockWeatherService = weatherService as jest.Mocked<typeof weatherService>;

const TestHarness = () => {
  const {
    location,
    setLocation,
    formatType,
    setFormatType,
    weather,
    weatherResult,
  } = useAppContext();
  return (
    <>
      <div id="location">{location}</div>
      <div id="formatType">{formatType}</div>
      <div id="weather">{weather}</div>
      <div id="weatherResult">{weatherResult}</div>
      <button id="setLocation" onClick={() => setLocation(12345)}>
        Set location
      </button>
      <button id="setFormatType" onClick={() => setFormatType("F")}>
        Set format type
      </button>
    </>
  );
};

describe("AppContextProvider", () => {
  beforeEach(() => jest.resetAllMocks());
  it("has default state", () => {
    const instance = renderer.create(
      <AppContextProvider>
        <TestHarness />
      </AppContextProvider>
    ).root;
    expect(instance.findByProps({ id: "location" }).children).toEqual([]);
    expect(instance.findByProps({ id: "weather" }).children).toEqual([]);
    expect(instance.findByProps({ id: "weatherResult" }).children).toEqual([]);
    expect(instance.findByProps({ id: "formatType" }).children).toEqual(["C"]);
  });
  it("fetches on set location", () => {
    mockWeatherService.fetchWeather.mockResolvedValue({});
    const instance = renderer.create(
      <AppContextProvider>
        <TestHarness />
      </AppContextProvider>
    ).root;
    expect(instance.findByProps({ id: "location" }).children).toEqual([]);
    renderer.act(() => {
      instance.findByProps({ id: "setLocation" }).props.onClick();
    });
    expect(mockWeatherService.fetchWeather).toHaveBeenCalledWith(12345);
    expect(instance.findByProps({ id: "location" }).children).toEqual([
      "12345",
    ]);
  });
  it("sets format type", () => {
    const instance = renderer.create(
      <AppContextProvider>
        <TestHarness />
      </AppContextProvider>
    ).root;
    expect(instance.findByProps({ id: "formatType" }).children).toEqual(["C"]);
    renderer.act(() => {
      instance.findByProps({ id: "setFormatType" }).props.onClick();
    });
    expect(instance.findByProps({ id: "formatType" }).children).toEqual(["F"]);
  });
});
