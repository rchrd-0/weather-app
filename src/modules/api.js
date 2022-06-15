async function fetchForecast(coords) {
  const request = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=hourly,current,minutely,alerts&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9`;
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`at fetchData: ${response.statusText}`);
  }
  const parse = await response.json();
  return parse;
}

async function fetchWeather(query) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9`;
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`at fetchData: '${query}' ${response.statusText}`);
  }
  const parse = await response.json();
  return parse;
}

export default async function fetchData(query) {
  const weather = await fetchWeather(query);
  const forecast = await fetchForecast(weather.coord);
  return { weather, forecast };
}
