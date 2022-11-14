const form = document.querySelector(".login-form");
const button = document.querySelector('button[type="submit"]');

button.addEventListener("click", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const {
      elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
      alert("Заполните пожалуйста все поля");
    } else {
      const user = {};
      user.email = email.value;
      user.password = password.value;
      console.log(user);
    }
  });
});

// refs.form.addEventListener('submit', handleSubmit);
