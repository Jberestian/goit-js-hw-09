import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import '../css/timer.css';

const refs = {
  inputDatetimePickerEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('button[data-start]'),
  daysSpan: document.querySelector('span[data-days]'),
  hoursSpan: document.querySelector('span[data-hours]'),
  minutesSpan: document.querySelector('span[data-minutes]'),
  secondsSpan: document.querySelector('span[data-seconds]'),
};

refs.startBtnEl.disabled = true;

let timeId = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtnEl.disabled = false;
    }
    userDate = selectedDates[0];
  },
};

flatpickr(refs.inputDatetimePickerEl, options);

refs.startBtnEl.addEventListener('click', onClickStartTimer);

function onClickStartTimer() {
  timeId = setInterval(() => {
    const diff = userDate - new Date();

    if (diff <= 0) {
      clearInterval(timeId);
      return;
    }
    setTimeSpan();
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function setTimeSpan() {
  const { days, hours, minutes, seconds } = convertMs(userDate - new Date());

  refs.daysSpan.textContent = pad(days);
  refs.hoursSpan.textContent = pad(hours);
  refs.minutesSpan.textContent = pad(minutes);
  refs.secondsSpan.textContent = pad(seconds);
}
