// https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9

export default async function fetchData(query) {
  try {
    const request = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=463f90b73d25b0b65abf11031d0b03b9`
    const response = await fetch (request, {mode: 'cors'});
    if (!response.status) throw new Error(response.statusText);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}