const refs = {
  inputValue: document.querySelector("#validation-input"),
};

const valueCheck = (e) => {
  const input = e.currentTarget;
  input.value.length === Number(input.dataset.length)
    ? (input.classList.add("valid"), input.classList.remove("invalid"))
    : input.classList.add("invalid");
};

refs.inputValue.addEventListener("blur", valueCheck);
