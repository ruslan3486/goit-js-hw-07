
const input = document.querySelector('#name-input');
     
const spanEl = document.querySelector('#name-output');

function onInputChange() {
    
    return (spanEl.textContent = input.value) 
     
}

input.addEventListener('input', onInputChange)
    


 





