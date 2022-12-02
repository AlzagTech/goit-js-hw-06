let counterValue = 0;

const refs = {
  incrementCounterBtn: document.querySelector('[data-action="increment"]'),
  decrementCounterBtn: document.querySelector('[data-action="decrement"]'),
  valueRef: document.querySelector('#value'),
};

refs.incrementCounterBtn.addEventListener('click', onIncreaseTheValueOfTheCounter);
refs.decrementCounterBtn.addEventListener('click', onDecrementTheValueOfTheCounter);

function onIncreaseTheValueOfTheCounter() {
  counterValue += 1;
  return (refs.valueRef.textContent = counterValue);
}

function onDecrementTheValueOfTheCounter() {
  counterValue -= 1;
  return (refs.valueRef.textContent = counterValue);
}
