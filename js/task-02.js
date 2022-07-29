const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = []

ingredients.forEach(ingredient => {
  const item = document.createElement("li")
  item.textContent = ingredient
  item.classList.add('item')

  list.push(item)
});


document.querySelector('ul').append(...list)