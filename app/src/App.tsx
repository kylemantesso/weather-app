import React from "react";
import { WeatherWidget } from "./components/Weather/WeatherWidget";
import { Search } from "./components/Search/Search";
import { Box } from "grommet";
import {useAppContext} from "./context/AppContext";

export const App: React.FC = () => {
    const {weather, formatType} = useAppContext();
  return (
    <Box align="center">
      <Box direction="column" width="large">
        <Search />
          {weather && <WeatherWidget weather={weather} formatType={formatType} />}
      </Box>
    </Box>
  );
};
