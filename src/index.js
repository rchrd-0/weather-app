import getData from './modules/data';
import { renderDisplay, displayError, setLoading } from './modules/display';

const search = document.querySelector('#search-city');

const searchForCity = async (e) => {
  const query = search.value;
  if (e.code === 'Enter' && query.length > 0) {
    try {
      search.value = '';
      setLoading(true);
      const weatherData = await getData(query);
      renderDisplay(weatherData);
    } catch (error) {
      console.error(error);
      displayError(true);
    }
  }
  setLoading(false);
};

const initialLoad = async () => {
  const cities = [
    'sydney',
    'hong kong',
    'edinburgh',
    'kuala lumpur',
    'munich',
    'london',
    'tokyo',
  ];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const weatherData = await getData(randomCity);
  renderDisplay(weatherData);
};

search.addEventListener('keydown', (e) => searchForCity(e));
window.addEventListener('load', initialLoad);
