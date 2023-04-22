const input = document.querySelector('#name-input');
console.log(input);

const elSpan = document.querySelector('#name-output');
console.log(elSpan);

input.addEventListener('input', onSpanText);

function onSpanText() {
  elSpan.textContent = input.value.trim();
  if (!input.value) {
    elSpan.textContent = 'Anonymous';
  }
}
