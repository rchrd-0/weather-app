import fetchData from './api'

function processData(input) {
  const temperature = {
    current: input.main.temp,
    tempMin: input.main.temp_min,
    tempMax: input.main.temp_max,
    feelsLike: input.main.feels_like,
  };
  Object.keys(temperature).forEach((key) => {
    temperature[key] = Math.round(temperature[key]);
  });
  const output = {
    name: input.name,
    country: input.sys.country,
    time: input.dt,
    weather: {
      description: input.weather[0].description,
      ...temperature,
      humidity: input.main.humidity,
    },
  };
  return output;
}

export default async function getWeather(query) {
  const response = await fetchData(query);
  const data = processData(response);
  return data;
}
