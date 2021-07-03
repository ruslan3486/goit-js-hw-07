const buttonEl = document.querySelector('button')
const input = document.querySelector('input')

let render = buttonEl.getAttribute('render');
let destroy = buttonEl.getAttribute('destroy');

input.addEventListener('input', onTargetBtnClick)

function onTargetBtnClick() {
  input.value = render
}
function ofTargetBtnClick() {
  input.value = destroy
}