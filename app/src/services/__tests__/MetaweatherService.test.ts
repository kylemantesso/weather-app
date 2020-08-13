import {
  fetchLocations,
  fetchWeather,
  formatTemperature,
  formatWindSpeed,
} from "../MetaweatherService";

global.fetch = jest.fn().mockResolvedValue({ json: jest.fn() });

// TODO: transformWeatherResult, formatWindSpeed

describe("fetchLocations", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  it("fetches locations", () => {
    fetchLocations("searchQuery");
    expect(global.fetch).toHaveBeenCalledWith(
      "/km-weather-app/us-central1/search?query=searchQuery"
    );
  });
});

describe("fetchLocations", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  it("fetches locations", () => {
    fetchWeather("id");
    expect(global.fetch).toHaveBeenCalledWith(
      "/km-weather-app/us-central1/location?query=id"
    );
  });
});

describe("formatWindSpeed", () => {
  it("formats metric", () => {
    expect(formatWindSpeed(100, "C")).toEqual("161 kph");
  });
  it("formats imperial", () => {
    expect(formatWindSpeed(100, "F")).toEqual("100 mph");
  });
});

describe("formatTemperature", () => {
  it("formats metric", () => {
    expect(formatTemperature(100.1, "C")).toEqual(100);
  });
  it("formats imperial", () => {
    expect(formatTemperature(100.1, "F")).toEqual(212);
  });
});
