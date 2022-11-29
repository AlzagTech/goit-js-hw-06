const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsListItem = (ingredient) => { 
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');

  return ingredientEl;
};

// document.querySelector('#ingredients').append(...ingredients.map(makeIngredientsListItem));

const ingredientsList = ingredients.map(makeIngredientsListItem);

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(...ingredientsList);

