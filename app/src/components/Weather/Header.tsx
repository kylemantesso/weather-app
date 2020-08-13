import React, { useContext } from "react";
import moment from "moment";

import { Box, Heading, ResponsiveContext, Text } from "grommet";
import { FormatSwitch } from "./FormatSwitch";
import { FormatType } from "../../context/AppContext";

export const Header: React.FC<{
  location: string;
  formatType: FormatType;
  current: string;
}> = ({ location, formatType, current }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box direction="row-responsive" fill justify="between" gap="small">
      <Box direction="column" gap="xxsmall">
        <Heading size="large" margin="none">
          {location}
        </Heading>
        <Text>{moment().format("dddd, MMMM Do")}</Text>
        <Text>{current}</Text>
      </Box>
      <Box justify="start" align={size === "small" ? "start" : "end"}>
        <FormatSwitch formatType={formatType} />
      </Box>
    </Box>
  );
};
