const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value.trim();
  const text = value ? value : 'Anonymous';
  refs.span.textContent = text;
}
