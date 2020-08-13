import React from "react";

import { Box, Button } from "grommet";
import { FormatType, useAppContext } from "../../context/AppContext";

export const FormatSwitch: React.FC<{ formatType: FormatType }> = ({
  formatType,
}) => {
  const { setFormatType } = useAppContext();
  return (
    <Box direction="row" gap="small">
      <Button
        id="c"
        primary={formatType === "C"}
        label="°C"
        size="small"
        onClick={() => setFormatType("C")}
      />
      <Button
        id="f"
        primary={formatType === "F"}
        label="°F"
        size="small"
        onClick={() => setFormatType("F")}
      />
    </Box>
  );
};
