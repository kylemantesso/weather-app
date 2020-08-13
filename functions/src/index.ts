import * as functions from 'firebase-functions';
import {locationSearch, fetchWeather} from "./services/MetaweatherService";

export const search = functions.https.onRequest( async (request, response) => {
  const locations = await locationSearch(request.query["query"] as string);
  response.send(locations);
});

export const location = functions.https.onRequest( async (request, response) => {
  const weather = await fetchWeather(request.query["query"] as string);
  response.send(weather);
});
