import getWeather from './modules/data';
import renderDisplay from './modules/display';

const search = document.querySelector('#search-city');

async function searchForCity(e) {
  const query = search.value;
  if (e.code === 'Enter' && query.length > 0) {
    search.value = '';
    try {
      const weather = await getWeather(query);
      renderDisplay(weather);
    } catch (error) {
      return console.error(error);
    }
  }
}

search.addEventListener('keydown', (e) => searchForCity(e));