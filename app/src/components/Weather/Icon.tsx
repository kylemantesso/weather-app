import React from "react";

export const Icon = ({
  icon,
  description,
}: {
  icon: string;
  description: string;
}) => (
  <img
      alt={description}
    src={`https://www.metaweather.com/static/img/weather/${icon}.svg`}
    height="60px"
  />
);
