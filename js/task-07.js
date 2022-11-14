const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.input.addEventListener("input", (event) => {
  refs.input = Number(event.target.value);
  refs.text.style.fontSize = `${refs.input}px`;
});
