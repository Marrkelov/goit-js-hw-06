const btnChangeColor = document.querySelector(".change-color");
const spanEL = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  spanEL.textContent = document.body.style.backgroundColor;
});
