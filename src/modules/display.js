import { format, fromUnixTime } from 'date-fns';
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

const renderDetails = (data) => {
  const date = document.querySelector('#date');
  const today = format(fromUnixTime(data.time), 'dd MMMM');
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
    format(fromUnixTime(data.time), 'HH:mm'),
  ];
  for (let i = 0; i < conditions.length; i++) {
    conditions[i].textContent = conditionValues[i];
  }
};

const displayError = (error) => {
  const span = document.querySelector('#input-error');
  if (error) {
    span.textContent = 'Location not found'
  } else {
    span.textContent = '';
  }
}

const renderDisplay = (data) => {
  renderDetails(data);
  renderCurrent(data);
  displayError(false);
}

export { renderDisplay, displayError}
