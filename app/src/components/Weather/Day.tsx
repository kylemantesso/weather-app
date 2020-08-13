import React from "react";
import moment from "moment";

import { Box, Text } from "grommet";
import { Icon } from "./Icon";

export const Day: React.FC<{
  icon: string;
  description: string;
  day: string;
  today: boolean;
  max: number;
  min: number;
}> = ({ icon, day, today, max, min, description }) => (
  <Box direction="column" justify="center" align="center" gap="small">
    <Text weight="bold" size="small">
      {today ? "Today" : moment(day).format("dddd")}
    </Text>
    <Icon icon={icon} description={description} />
    <Box direction="row" gap="xsmall">
      <Text weight="bold" size="small">
        {Math.round(max)}°
      </Text>
      <Text size="small">{Math.round(min)}°</Text>
    </Box>
  </Box>
);
