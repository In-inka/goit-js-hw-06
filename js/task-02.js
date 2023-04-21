const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const elIngredients = document.querySelector('#ingredients');
console.log(elIngredients);

const liEl = ingredients.map(el => {
  const elItem = document.createElement('li');

  elItem.textContent = el;
  elItem.classList = 'item';

  return elItem;
});

elIngredients.append(...liEl);
