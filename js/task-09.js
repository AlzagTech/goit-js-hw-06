function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

refs.btnEl.addEventListener('click', onMakeRandomBgColor);

function onMakeRandomBgColor(event) {
  const hexColor = getRandomHexColor();

  refs.bodyEl.style.backgroundColor = `${hexColor}`;
  refs.spanEl.textContent = `${hexColor}`;
}
