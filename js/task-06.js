const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onAddValidationClass);

function onAddValidationClass(event) {
  inputEl.classList.remove('valid', 'invalid');

  const addClass = (value) => inputEl.classList.add(value);

  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? addClass('valid')
    : addClass('invalid');
}
