const refs = {
  startBtnEl: document.querySelector('button[data-start]'),
  stopBtnEl: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let intervalId = null;
refs.stopBtnEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtnEl.addEventListener('click', () => {
  refs.startBtnEl.disabled = true;
  refs.stopBtnEl.disabled = false;

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

refs.stopBtnEl.addEventListener('click', () => {
  clearInterval(intervalId);
  refs.startBtnEl.disabled = false;
  refs.stopBtnEl.disabled = true;
});
