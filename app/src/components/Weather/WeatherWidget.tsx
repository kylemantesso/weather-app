import React from "react";
import { FormatType, useAppContext } from "../../context/AppContext";
import { Box } from "grommet";
import { Header } from "./Header";
import { MPH_TO_KPH } from "../../const";
import { Current } from "./Current";
import { Forecast } from "./Forecast";
import { IWeather } from "../../types/weather";

export const WeatherWidget: React.FC<{
  weather: IWeather;
  formatType: FormatType;
}> = ({ weather, formatType }) => {
  return (
    <Box
      elevation="medium"
      pad="medium"
      direction="column"
      gap="small"
      margin="small"
    >
      <Header
        formatType={formatType}
        location={weather.title}
        current={weather.current.description}
      />
      <Current
        formatType={formatType}
        description={weather.current.description}
        currentTemp={weather.current.temp}
        icon={weather.current.icon}
        windSpeed={weather.current.windSpeed}
        windDirection={weather.current.windDirection}
        humidity={weather.current.humidity}
      />
      <Forecast forecasts={weather.forecast} />
    </Box>
  );
};

