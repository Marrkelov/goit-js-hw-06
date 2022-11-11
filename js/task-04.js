const countDecrement = document.querySelector('[data-action="decrement"]');
const countIncrement = document.querySelector('[data-action="increment"]');
const countValue = document.querySelector("#value");

let counterValue = 0;

const handleIncrement = () => {
  counterValue += 1;
  //   countValue.textContent = counterValue;
};

const handleDecrement = () => {
  counterValue -= 1;
  //   countValue.textContent = counterValue;
};

countIncrement.addEventListener("click, handleIncrement");
countDecrement.addEventListener("click, handleDecrement");
