const refs = {
  inputField: document.querySelector("#name-input"),
  inputResult: document.querySelector("#name-output"),
};

refs.inputField.addEventListener("input", (e) => {
  refs.inputResult.textContent =
    e.currentTarget.value.trim() !== "" ? e.currentTarget.value : "Anonymous";
});
