import React, { useEffect, useState } from "react";
import {
  fetchWeather,
  transformWeatherResult,
} from "../services/MetaweatherService";
import { IWeather, IWeatherResult } from "../types/weather";

export type FormatType = "C" | "F";

export interface IAppState {
  location: number;
  weather: IWeather;
  weatherResult: IWeatherResult;
  setLocation: (location: number) => void;
  formatType: FormatType;
  setFormatType: (formatType: FormatType) => void;
}

export const AppContext = React.createContext<Partial<IAppState>>({});

export const useAppContext = () => React.useContext(AppContext) as IAppState;

export const AppContextProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<IAppState["location"]>();
  const [weather, setWeather] = useState<IAppState["weather"]>();
  const [weatherResult, setWeatherResult] = useState<
    IAppState["weatherResult"]
  >();
  const [formatType, setFormatType] = useState<IAppState["formatType"]>("C");

  // on location change, fetch weather data
  useEffect(() => {
    if (location) {
      fetchWeather(location)
        .then((weatherResult) => {
          setWeatherResult(weatherResult);
          setWeather(transformWeatherResult(weatherResult, formatType));
        })
        .catch((error) => {
          console.log(error);
          // TODO: Show nice error message and prompt for retry
        });
    }
  }, [location]);

  // on format type change, transform weather result
  useEffect(() => {
    if (weatherResult) {
      setWeather(transformWeatherResult(weatherResult, formatType));
    }
  }, [formatType]);

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        weather,
        formatType,
        setFormatType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
