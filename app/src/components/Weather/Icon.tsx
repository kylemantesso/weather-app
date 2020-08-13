import React from "react";

export const Icon: React.FC<{
  icon: string;
  description: string;
}> = ({ icon, description }) => (
  <img
    alt={description}
    src={`https://www.metaweather.com/static/img/weather/${icon}.svg`}
    height="60px"
  />
);
