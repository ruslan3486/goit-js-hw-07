const button = {
add: document.querySelector('[data-action="decrement"]'),    
sub: document.querySelector('[data-action="increment"]'),
span: document.querySelector('#value'),

}
let counterValue = 0
const descrement = () => {
    counterValue -= 1;

    button.span.textContent = counterValue

}
const increment = () => {
    counterValue += 1;

    button.span.textContent = counterValue

};

button.sub.addEventListener('click', increment);
button.add.addEventListener('click', descrement)