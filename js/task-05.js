
const input = document.querySelector('#name-input');
     
const spanEl = document.querySelector('#name-output');

function onInputChange() {
    
    return input.value === '' ? spanEl.textContent = 'незнакомец' : spanEl.textContent = input.value;
    
}

input.addEventListener('input', onInputChange)
    


 





