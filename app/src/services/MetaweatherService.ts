import {
  IWeatherResult,
  ILocationResult,
  IConsolidatedWeather,
  IWeather,
  IDay,
} from "../types/weather";
import { FormatType } from "../context/AppContext";
import { MPH_TO_KPH } from "../const";
import { config } from "../config/config";

enum MetaWeatherPath {
  search = "/api/location/search",
  location = "/api/location",
}

// Fetch locations for search autocomplete
export const fetchLocations = (query: string): Promise<ILocationResult[]> => {
  const url = `${config.metaweather.BASE_URL}/search?query=${query}`;
  return fetch(url).then((res) => res.json());
};

// Fetch weather data
export const fetchWeather = (query: number): Promise<IWeatherResult> => {
  const url = `${config.metaweather.BASE_URL}/location?query=${query}`;
  return fetch(url).then((res) => res.json());
};

// transform weather data result - convert from metric to imperial
export const transformWeatherResult = (
  weatherResult: IWeatherResult,
  formatType: FormatType
): IWeather => {
  return {
    title: weatherResult.title,
    current: formatDay(weatherResult.consolidated_weather[0], formatType),
    forecast: weatherResult.consolidated_weather.map((consolidatedWeather) =>
      formatDay(consolidatedWeather, formatType)
    ),
  };
};

// format data fro single day result
export const formatDay = (
  consolidatedWeather: IConsolidatedWeather,
  formatType: FormatType
): IDay => ({
  id: consolidatedWeather.id,
  date: consolidatedWeather.applicable_date,
  description: consolidatedWeather.weather_state_name,
  temp: formatTemperature(consolidatedWeather.the_temp, formatType),
  icon: consolidatedWeather.weather_state_abbr,
  windSpeed: formatWindSpeed(consolidatedWeather.wind_speed, formatType),
  windDirection: consolidatedWeather.wind_direction_compass,
  humidity: consolidatedWeather.humidity,
  max: formatTemperature(consolidatedWeather.max_temp, formatType),
  min: formatTemperature(consolidatedWeather.min_temp, formatType),
});

// format and convert windspeed between imperial and metric
export const formatWindSpeed = (windSpeed: number, formatType: FormatType) =>
  formatType === "C"
    ? `${Math.round(convertMphToKph(windSpeed))} kph`
    : `${Math.round(windSpeed)} mph`;

// format and convert temperature between imperial and metric
export const formatTemperature = (
  temperature: number,
  formatType: FormatType
): number =>
  formatType === "C"
    ? Math.round(temperature)
    : Math.round(convertCelsiusToFahrenheit(temperature));

// util conversion functions
const convertCelsiusToFahrenheit = (celsius: number) => {
  return celsius * (9 / 5) + 32;
};

const convertMphToKph = (mph: number) => mph * MPH_TO_KPH;
