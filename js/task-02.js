const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const makeItems = ingredients => {
  return ingredients.map(items => {
    console.log(items);

    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = items;
    return item;
  });
};
const ingrItems = makeItems(ingredients);
list.append(...ingrItems);
console.log(list);
