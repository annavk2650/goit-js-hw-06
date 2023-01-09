const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
const allList = [];

const makeItems = ingredients => {
  return ingredients.map(items => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = items;
    allList.push(item);
  });
};
const ingrItems = makeItems(ingredients);
list.append(...allList);
console.log(list);

//*---Вариант 2 ---*//
// ingredients.map(items => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = items;
//   allList.push(item);
// });

// list.append(...allList);
// console.log(list);
