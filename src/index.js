import getWeatherData from './modules/api';

const search = document.querySelector('#search-city');
search.addEventListener('keydown', (e) => {
  const { value } = search;
  if (e.code === 'Enter' && value.length > 0) {
    getWeatherData(value);
    search.value = '';
  }
});
