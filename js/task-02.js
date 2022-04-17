const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
})

ingredientsList.append(...elements);

console.log(ingredientsList)