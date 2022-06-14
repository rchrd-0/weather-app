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
      console.error('Location not found')
    }
  }
}

async function initialLoad() {
  const weather = await getWeather('hong kong');
  renderDisplay(weather);
}

search.addEventListener('keydown', (e) => searchForCity(e));
window.addEventListener('load', initialLoad)