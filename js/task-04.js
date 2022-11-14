const refs = {
  countDecrement: document.querySelector('[data-action="decrement"]'),
  countIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

const handleDecrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const handleIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

refs.countDecrement.addEventListener("click", handleDecrement);
refs.countIncrement.addEventListener("click", handleIncrement);
