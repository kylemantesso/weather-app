import React, { useState } from "react";
import { Box, Select } from "grommet";
import { fetchLocations } from "../../services/MetaweatherService";
import { useAppContext } from "../../context/AppContext";
import { Spinner } from "../Spinner/Spinner";
import { ILocationResult } from "../../types/weather";

const defaultOptions: string[] = [];

export const Search = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [locationQuery, setLocationQuery] = useState("");
  const [foundLocations, setFoundLocations] = useState<ILocationResult[]>([]);
  const [searching, setSearching] = useState(false);

  const { setLocation } = useAppContext();

  return (
    <Box
      align="center"
      justify="center"
      pad="large"
      direction="row"
      gap="medium"
    >
      <Select
        size="medium"
        placeholder="Serch location"
        value={locationQuery}
        options={options}
        onChange={({ option }) => {
          setSearching(false);
          setLocationQuery(option);
          setOptions([option]);
          if (foundLocations) {
            const locationId = foundLocations.find(
              (location) => location.title === option
            )!.woeid;
            if (locationId) {
              setLocation(locationId);
            }
          }
        }}
        onClose={() => setOptions([])}
        onSearch={(text) => {
          setSearching(true);
          if (text.length > 2) {
            fetchLocations(text)
              .then((locations) => {
                console.log(locations);
                const foundOptions = locations.map(
                  (location) => location.title
                );
                setFoundLocations(locations);
                setOptions(foundOptions);
                setSearching(false);
              })
              .catch((error) => {
                console.log(error);
                // TODO: Show nice error message and prompt for retry
              });
          }
        }}
      />
      <Box width="xxsmall">{searching && <Spinner />}</Box>
    </Box>
  );
};
