export interface ILocationResult {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface IConsolidatedWeather {
  id: any;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: Date;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

interface IParent {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

interface ISource {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}

export interface IWeatherResult {
  consolidated_weather: IConsolidatedWeather[];
  time: Date;
  sun_rise: Date;
  sun_set: Date;
  timezone_name: string;
  parent: IParent;
  sources: ISource[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}

export interface IWeather {
  title: string;
  current: IDay;
  forecast: IDay[];
}

export interface IDay {
  id: string;
  date: string;
  description: string;
  temp?: number;
  icon: string;
  windSpeed: string;
  windDirection: string;
  humidity: number;
  max: number;
  min: number;
}
