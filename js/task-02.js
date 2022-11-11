const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addElements = document.querySelector("#ingredients");
const addElement = (ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
};
const elements = ingredients.map(addElement);
addElements.append(...elements);
