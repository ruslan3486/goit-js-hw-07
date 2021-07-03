const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ul = document.querySelector('ul#ingredients');
const insertListItems = items => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = items;
  return ingredientEl;
};

const allArray = ingredients.map(items => insertListItems(items));
ul.append(...allArray);
console.log(ul)