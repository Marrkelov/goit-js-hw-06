const refs = {
  div: document.querySelector("#boxes"),
  input: document.querySelector("[type=number]"),
  increment: document.querySelector("[data-create]"),
  decrement: document.querySelector("[data-destroy]"),
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

const destroyBoxes = () => {
  refs.div.innerHTML = "";
};

const createBoxes = (amount) => {
  destroyBoxes();
  amount = refs.input.value;
  let step = 10;
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    if (amount >= 1) {
      const el = document.createElement("div");
      el.style.width = `${(width += step)}px`;
      el.style.height = `${(height += step)}px`;
      el.style.backgroundColor = getRandomHexColor();
      console.log(refs.div);
      refs.div.append(el);
    }
  }
  return;
};

refs.increment.addEventListener("click", createBoxes);
refs.decrement.addEventListener("click", destroyBoxes);
