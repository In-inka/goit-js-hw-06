const value = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtn);

incrementBtn.addEventListener('click', onIncrementBtn);

let counterValue = 0;

function onDecrementBtn() {
  counterValue -= 1;

  value.textContent = counterValue;
}

function onIncrementBtn() {
  counterValue += 1;

  value.textContent = counterValue;
}
