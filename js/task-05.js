const refs = {
  inputField: document.querySelector("#name-input"),
  inputResult: document.querySelector("#name-output"),
};

refs.inputField.addEventListener("input", (event) => {
  refs.inputResult.textContent =
    event.currentTarget.value.trim() !== ""
      ? event.currentTarget.value
      : "Anonymous";
});
