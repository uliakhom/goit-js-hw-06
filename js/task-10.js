function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBox);
refs.destroyBtn.addEventListener('click', onDestroyBox);

function onCreateBox(event) {
  
  const numberOfBoxes = refs.controls.value;
  let width = 30;
  let height = 30;

  for (let i = 0; i < numberOfBoxes; i += 1) {
    width += 10;
    height += 10;
    
    const randomColor = getRandomHexColor();
    const box = `<div style="background-color:${randomColor}; width:${width}px; height:${height}px" ></div>`;

    refs.boxes.insertAdjacentHTML("beforeend", box);
  }
  
};

function onDestroyBox(event) {
 refs.boxes.innerHTML = ''
}