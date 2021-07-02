const ul = document.querySelectorAll('#categories>li')
console.log(`'В списке ${ul.length} категории.'`)
ul.forEach(el => {
    
    console.log(`Категория: ${el.firstElementChild.textContent}, Количество элементов: ${el.lastElementChild.children.length}`)
}); 

