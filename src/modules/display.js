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
  const time = document.querySelector('#time');
  const localDate = getLocal(weather.time, weather.offset);
  const today = format(new Date(localDate), 'd MMMM');
  date.textContent = today;
  time.textContent = format(new Date(localDate), 'HH:mm');

  const location = document.querySelector('#location');
  const cityCountry = [weather.name, weather.country];
  location.textContent = cityCountry.join(', ');
};

const renderCurrent = (data) => {
  const { currentConditions } = data.weather;

  const currentTemp = document.querySelector('#current-temp');
  currentTemp.textContent = `${currentConditions.current} °C`;
  const description = document.querySelector('#description');
  description.textContent = currentConditions.description;

  const conditions = document.querySelectorAll('#conditions .value');
  const conditionValues = [
    `${currentConditions.feelsLike} °C`,
    `${currentConditions.humidity} %`,
  ];
  for (let i = 0; i < conditions.length; i++) {
    conditions[i].textContent = conditionValues[i];
  }
};

const displayError = (error) => {
  const span = document.querySelector('#input-error');
  if (error) {
    span.classList.remove('opacity-0');
    span.textContent = 'Location not found';
  } else {
    span.classList.add('opacity-0');
    setTimeout(() => {
      span.textContent = '';
    }, 200);
  }
};

const renderForecast = (data) => {
  const cards = document.querySelectorAll('.card-daily');
  const { forecast } = data;
  const { offset } = forecast;
  const { daily } = forecast;

  for (let i = 0; i < cards.length; i++) {
    const day = cards[i].querySelector('.day');
    const icon = cards[i].querySelector('.forecast-icon');
    const tempMin = cards[i].querySelector('.temp-min');
    const tempMax = cards[i].querySelector('.temp-max');
    const localDate = getLocal(daily[i].date, offset);
    const formattedDay = format(new Date(localDate), 'EEEE');

    day.textContent = i === 0 ? 'Today' : formattedDay;
    icon.dataset.weatherCode = daily[i].weatherIcon;
    tempMin.textContent = `${daily[i].temps.min} °C`;
    tempMax.textContent = `${daily[i].temps.max} °C`;
  }
};

const setLoading = (bool) => {
  const searchIcon = document.querySelector('#search-icon');
  const loadIcon = document.querySelector('#load-icon');
  if (bool) {
    searchIcon.classList.add('visibility-hidden');
    loadIcon.classList.remove('visibility-hidden');
  } else {
    loadIcon.classList.add('visibility-hidden');
    searchIcon.classList.remove('visibility-hidden');
  }
};

const renderDisplay = (data) => {
  renderDetails(data);
  renderCurrent(data);
  renderForecast(data);
  displayError(false);
};

export { renderDisplay, displayError, setLoading };
