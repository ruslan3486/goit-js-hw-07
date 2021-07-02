let inputEl = document.querySelector('#validation-input');
let textLength = inputEl.dataset.length

inputEl.addEventListener('change', e => {
    const text = e.target.value;
    if (text.length === +textLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid');
    inputEl.classList.remove('valid')}
})

