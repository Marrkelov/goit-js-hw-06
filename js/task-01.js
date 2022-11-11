// кількість категорій

const numberOfCaregories = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCaregories.length}`);

// Текст h2 та кільіксть елементів

numberOfCaregories.forEach((e) => {
  console.log(`Category: ${e.firstElementChild.textContent}`);
  console.log(`Elements: ${e.querySelectorAll("li").length}`);
});
