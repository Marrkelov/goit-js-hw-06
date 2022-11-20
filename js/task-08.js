const refs = {
  form: document.querySelector(".login-form"),
  button: document.querySelector('button[type="submit"]'),
};

refs.button.addEventListener("click", () => {
  refs.form.addEventListener("submit", (e) => {
    e.preventDefault();

    const {
      elements: { email, password },
    } = e.currentTarget;

    const user = {};

    email.value === "" || password.value === ""
      ? alert("Заполните пожалуйста все поля")
      : ((user.email = email.value), (user.password = password.value));

    console.log(user);
  });
});

// refs.form.addEventListener('submit', handleSubmit);
