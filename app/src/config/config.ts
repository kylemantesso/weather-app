interface IConfig {
  metaweather: {
   BASE_URL: string;
  };
}

export const ENV = process.env.NODE_ENV;
console.log('Environment: ' + ENV);

let config: IConfig;

if (ENV === "production") {
  config = {
    metaweather: {
      BASE_URL: "https://us-central1-km-weather-app.cloudfunctions.net"
    }
  };
} else {
  config = {
    metaweather: {
      BASE_URL: "/km-weather-app/us-central1"
    }
  };
}

export { config };
