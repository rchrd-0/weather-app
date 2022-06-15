import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const getLocal = (time, offset) => {
  const localDate = formatInTimeZone(
    (time + offset) * 1000,
    'UTC',
    'yyyy-MM-dd, HH:mm'
  );
  return localDate;
};

const renderDetails = (data) => {
  const { weather } = data;
  const date = document.querySelector('#date');
  const localDate = getLocal(weather.time, weather.offset);
  const today = format(new Date(localDate), 'd MMMM');
  date.textContent = today;

  const location = document.querySelector('#location');
  const cityCountry = [weather.name, weather.country];
  location.textContent = cityCountry.join(', ');
};

const renderCurrent = (data) => {
  const { currentConditions } = data.weather;
  const description = document.querySelector('#description');
  description.textContent = currentConditions.description;

  const currentTemp = document.querySelector('#current-temp');
  currentTemp.textContent = currentConditions.current;

  const conditions = document.querySelectorAll('#conditions > div');
  const conditionValues = [
    currentConditions.feelsLike,
    currentConditions.humidity,
  ];
  for (let i = 0; i < conditions.length; i++) {
    conditions[i].textContent = conditionValues[i];
  }
};

const displayError = (error) => {
  const span = document.querySelector('#input-error');
  span.textContent = error ? 'Location not found' : '';
};

const renderForecast = (data) => {
  const cards = document.querySelectorAll('.card-daily');
  const { forecast } = data;
  const { offset } = forecast;
  const { daily } = forecast;

  for (let i = 0; i < cards.length; i++) {
    const day = cards[i].querySelector('.day');
    const icon = cards[i].querySelector('.icon');
    const tempMin = cards[i].querySelector('.temp-min');
    const tempMax = cards[i].querySelector('.temp-max');
    const localDate = getLocal(daily[i].date, offset);
    const formattedDay = format(new Date(localDate), 'EEEE');

    day.textContent = i === 0 ? 'Today' : formattedDay;
    icon.textContent = daily[i].weatherIcon;
    tempMin.textContent = daily[i].temps.min;
    tempMax.textContent = daily[i].temps.max;
  }
};

const renderDisplay = (data) => {
  renderDetails(data);
  renderCurrent(data);
  renderForecast(data);
  displayError(false);
};

export { renderDisplay, displayError };
