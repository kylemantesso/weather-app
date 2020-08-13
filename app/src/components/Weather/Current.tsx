import React from "react";
import moment from "moment";

import { Box, Heading, Text } from "grommet";
import { Icon } from "./Icon";
import { Day } from "./Day";
import { FormatType } from "../../context/AppContext";

export const Current: React.FC<{
  description: string;
  currentTemp?: number;
  icon: string;
  windSpeed: string;
  windDirection: string;
  humidity: number;
  formatType: FormatType;
}> = ({
  description,
  currentTemp,
  icon,
  windSpeed,
  windDirection,
  humidity,
  formatType,
}) => (
  <Box direction="row">
    <Box fill direction="row" gap="small">
      <Icon icon={icon} description={description} />
      <Heading size="medium" margin="none">
        {currentTemp && `${currentTemp}°${formatType}`}
      </Heading>
    </Box>
    <Box fill>
      <Text>
        Humidity: <Text weight="bold">{Math.round(humidity)}%</Text>
      </Text>
      <Text>
        Wind:{" "}
        <Text weight="bold">
          {windSpeed} {windDirection}
        </Text>
      </Text>
    </Box>
  </Box>
);
