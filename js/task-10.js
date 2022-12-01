function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let numberOfBoxes = 0;

const refs = {
  inputEl: document.querySelector('input'),
  btnCreateEl: document.querySelector('button[data-create]'),
  btnDestroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('div#boxes'),
};

refs.inputEl.addEventListener('blur', onMakeNuberOfBoxes);
refs.btnCreateEl.addEventListener('click', createBoxes);
refs.btnDestroyEl.addEventListener('click', destroyBoxes);

function onMakeNuberOfBoxes(event) {
  numberOfBoxes = event.currentTarget.value;
}

function  createBoxes() {
  const boxesArray = [];

  for (let i = 1; i <= numberOfBoxes; i++) {
    const newBox = `
    <div style="height:${20 + i * 10}px;width:${
      20 + i * 10
      }px;background-color:${getRandomHexColor()}"></div>`;
    
    boxesArray.push(newBox);
  }

  refs.boxesEl.innerHTML = boxesArray.join('');
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
}
