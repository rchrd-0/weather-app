// https://api.openweathermap.org/data/2.5x/weather?q={cityName}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9

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
    weather: {
      description: input.weather[0].description,
      ...temperature,
      humidity: input.main.humidity,
    },
  };
  return output;
}

export default async function fetchData(query) {
  try {
    const request = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9`;
    const response = await fetch(request, { mode: 'cors' });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    const output = processData(data);
    console.log(output);
  } catch (error) {
    return console.error(error);
  }
}
