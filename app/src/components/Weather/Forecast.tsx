import React, { useContext } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";

import { Day } from "./Day";
import { IDay } from "../../types/weather";

export const Forecast: React.FC<{ forecasts: IDay[] }> = ({ forecasts }) => (
  <Box pad={{ left: "medium", right: "medium", top: "medium" }}>
    <Grid columns="xsmall" align="center">
      {forecasts.map((forecast, ix) => (
        <Day
          description={forecast.description}
          min={forecast.min}
          max={forecast.max}
          key={forecast.id}
          today={ix === 0}
          day={forecast.date}
          icon={forecast.icon}
        />
      ))}
    </Grid>
  </Box>
);
