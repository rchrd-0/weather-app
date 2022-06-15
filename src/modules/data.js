import fetchData from './api';

const roundTemps = (temps) => {
  Object.keys(temps).forEach((key) => {
    temps[key] = Math.round(temps[key]);
  });
  return temps;
};

const parseWeather = (data) => {
  const temps = {
    current: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    feelsLike: data.main.feels_like,
  };
  return {
    name: data.name,
    country: data.sys.country,
    time: data.dt,
    offset: data.timezone,
    currentConditions: {
      description: data.weather[0].description,
      ...roundTemps(temps),
      humidity: data.main.humidity,
    },
  };
};

const parseForecast = (data) => {
  const days = data.daily;
  const daily = [];
  days.forEach((day) => {
    const date = day.dt;
    const weatherIcon = day.weather[0].icon;
    const temps = roundTemps({ min: day.temp.min, max: day.temp.max });
    daily.push({ date, weatherIcon, temps });
  });
  return {
    offset: data.timezone_offset,
    daily,
  };
};

export default async function getData(query) {
  const data = await fetchData(query);
  data.weather = parseWeather(data.weather);
  data.forecast = parseForecast(data.forecast);
  return data;
}
