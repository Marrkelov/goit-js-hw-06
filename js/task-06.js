const inputValue = document.querySelector("#validation-input");
inputValue.addEventListener("blur", (event) => {
  const input = event.currentTarget;
  input.value.length === Number(input.dataset.length)
    ? (input.classList.add("valid"), input.classList.remove("invalid"))
    : input.classList.add("invalid");
});
