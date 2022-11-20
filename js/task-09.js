const refs = {
  btnChangeColor: document.querySelector(".change-color"),
  spanEL: document.querySelector(".color"),
};

const randomBgColor = () => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  refs.spanEL.textContent = document.body.style.backgroundColor;
};

refs.btnChangeColor.addEventListener("click", randomBgColor);
