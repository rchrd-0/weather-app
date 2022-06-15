import getWeather from './modules/data';
import { renderDisplay, displayError } from './modules/display';

const search = document.querySelector('#search-city');

async function searchForCity(e) {
  const query = search.value;
  if (e.code === 'Enter' && query.length > 0) {
    search.value = '';
    try {
      const weather = await getWeather(query);
      renderDisplay(weather);
    } catch (error) {
      displayError(true);
      console.error(error)
    }
  }
}

async function initialLoad() {
  const cities = ['sydney', 'hong kong', 'edinburgh', 'kuala lumpur'];
  const weather = await getWeather(cities[Math.floor(Math.random() * cities.length)]);
  renderDisplay(weather);
}

search.addEventListener('keydown', (e) => searchForCity(e));
window.addEventListener('load', initialLoad)