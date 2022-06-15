import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
// {
//   "name": "Hong Kong",
//   "country": "HK",
//   "weather": {
//       "description": "moderate rain",
//       "current": 26,
//       "tempMin": 26,
//       "tempMax": 27,
//       "feelsLike": 26,
//       "humidity": 88
//   }
// }

const getLocal = (data) => {
  const localDate = formatInTimeZone(
    (data.time + data.timezone) * 1000,
    'UTC',
    'yyyy-MM-dd, HH:mm'
  );
  return localDate;
};

const renderDetails = (data) => {
  const date = document.querySelector('#date');
  const localDate = getLocal(data);
  const today = format(new Date(localDate), 'd MMMM');
  date.textContent = today;

  const location = document.querySelector('#location');
  const city = [data.name, data.country];
  location.textContent = city.join(', ');
};

const renderCurrent = (data) => {
  const description = document.querySelector('#description');
  description.textContent = data.weather.description;

  const currentTemp = document.querySelector('#current-temp');
  currentTemp.textContent = data.weather.current;

  const conditions = document.querySelectorAll('#conditions > div');
  const conditionValues = [
    data.weather.feelsLike,
    data.weather.humidity,
    // format(new Date(((data.time ), 'HH:mm'),
  ];
  for (let i = 0; i < conditions.length; i++) {
    conditions[i].textContent = conditionValues[i];
  }
};

const displayError = (error) => {
  const span = document.querySelector('#input-error');
  span.textContent = error ? 'Location not found' : '';
};

const renderDisplay = (data) => {
  renderDetails(data);
  renderCurrent(data);
  displayError(false);
};

export { renderDisplay, displayError };
