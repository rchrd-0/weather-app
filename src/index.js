import getWeather from './modules/data';

const search = document.querySelector('#search-city');

async function searchForCity(e) {
  const query = search.value;
  if (e.code === 'Enter' && query.length > 0) {
    search.value = '';
    try {
      const weather = await getWeather(query);
      console.log(weather);
    } catch (error) {
      console.error(error);
    }
  }
}

search.addEventListener('keydown', (e) => searchForCity(e));
