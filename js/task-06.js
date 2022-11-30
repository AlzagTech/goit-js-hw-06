const inputEl = document.querySelector('#validation-input');

console.log(inputEl.dataset.length);

inputEl.addEventListener('blur', onAddValidationClass);

function onAddValidationClass(event) {
    event.currentTarget.value.length === parseInt(inputEl.dataset.length)
      ? inputEl.classList.add('valid')
      : inputEl.classList.add('invalid');
}
