const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients')

const ItemArray = ingredients.map(ingredient => {
const item = document.createElement('li')
    item.textContent = ingredient
    ul.append(item)
})

console.log(ul)
