const refs = {
  input: document.querySelector('input#font-size-control'),
  span: document.querySelector('span#text'),
};

refs.input.addEventListener('input', onMakeSizeControl);

function onMakeSizeControl(event) {
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}
