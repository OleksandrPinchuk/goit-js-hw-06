const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUlEl = document.querySelector("#ingredients");

const liElementsArr = [];

ingredients.forEach(ingredient => {
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList = "item";
  return liElementsArr.push(liItem);
});

ingredientsUlEl.append(...liElementsArr);

console.log(ingredientsUlEl);