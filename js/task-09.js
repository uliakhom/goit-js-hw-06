function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgColor = document.querySelector('body');
const span = document.querySelector('.color')

changeBgColor.addEventListener('click', btnClick);

function btnClick(event) {
  const color = getRandomHexColor();
  changeBgColor.style.backgroundColor = color;
  span.textContent = color;
}
