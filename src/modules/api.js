// https://api.openweathermap.org/data/2.5x/weather?q={cityName}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9

export default async function fetchData(query) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9`;
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(`at fetchData: '${query}' ${response.statusText}`);
  }
  const parse = await response.json();
  return parse;
}