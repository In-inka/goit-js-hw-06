function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');

const textColor = document.querySelector('.color');

function onButtonClick() {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  textColor.textContent = newColor;
}

btn.addEventListener('click', onButtonClick);
