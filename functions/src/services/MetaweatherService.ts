import { METAWEATHER_BASE_URL, MetaWeatherPath } from "../const";
import fetch from 'node-fetch';

export const locationSearch = (query?: string): Promise<any> => {
  if(!query) {
    return Promise.resolve([]);
  }
  const url = `${METAWEATHER_BASE_URL}${MetaWeatherPath.search}?query=${query}`;
  return fetch(url).then((res: any) => res.json());
};

export const fetchWeather = (location: string): Promise<any> => {
  const url = `${METAWEATHER_BASE_URL}${MetaWeatherPath.location}/${location}/`;
  return fetch(url).then((res: any) => res.json());
};
