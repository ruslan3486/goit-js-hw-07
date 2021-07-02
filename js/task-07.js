let inputEl = document.querySelector('#font-size-control')
let spanEl = document.querySelector('#text');

inputEl.addEventListener('input', e => {
    let textEl = e.target.value;
    
spanEl.style.fontSize = textEl + 'px'
})