let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
// const value = document.querySelector('#value')

minusBtn.addEventListener("click", () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
});

plusBtn.addEventListener("click", () => {
  counterValue += 1;
    value.innerHTML = counterValue;
});