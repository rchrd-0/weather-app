import getData from './modules/data';
import { renderDisplay, displayError } from './modules/display';

const search = document.querySelector('#search-city');


const searchForCity = async (e) => {
  const query = search.value;
  if (e.code === 'Enter' && query.length > 0) {
    try {
      search.value = '';
      const weatherData = await getData(query);
      return weatherData
    }
    catch (error) {
      console.error(error)
    }
  }
}

// async function initialLoad() {
//   const cities = ['sydney', 'hong kong', 'edinburgh', 'kuala lumpur'];
//   const weather = await getWeather(cities[Math.floor(Math.random() * cities.length)]);
//   renderDisplay(weather);
// }

search.addEventListener('keydown', (e) => searchForCity(e));
// window.addEventListener('load', initialLoad)
