import * as functions from 'firebase-functions';
import {locationSearch, fetchWeather} from "./services/MetaweatherService";

// TODO: Whitelist CORS domains
export const search = functions.https.onRequest( async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  const locations = await locationSearch(request.query["query"] as string);
  response.send(locations);
});

export const location = functions.https.onRequest( async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  const weather = await fetchWeather(request.query["query"] as string);
  response.send(weather);
});
